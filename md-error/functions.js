const e_const = 1.60217663e-19;
const k_const = 1.380649e-23;

document.onkeyup = check_if_f5;
function check_if_f5(event_pass){
	if (event_pass.code=='F5'){
		location.reload(true);
	}
}

function get_current_simulation_id(increment=false){
	var element = document.getElementById('current_id');
	var current_simulation_id = parseInt(element.value);
	if (increment){element.value = current_simulation_id+1;}
	return current_simulation_id;
}
/* Classes */
var my_master;// SimulationMaster is instantiated in start()
class SimulationMaster{
	constructor(){
		this.simulations_div = document.getElementById('simulations_div');
		let current_simulation_id = get_current_simulation_id();
		let current_simulation_div = document.getElementById('simulation_'+current_simulation_id);
		this.simulations = [ new Simulation(this, current_simulation_div, true) ];
		get_current_simulation_id(true);// increment current simulation id
	}

	add_simulation(){
		let current_simulation_id = get_current_simulation_id();
		let new_div = document.createElement('div');
		new_div.id = 'simulation_' + (current_simulation_id+1);
		this.simulations_div.appendChild(new_div);
		let button = document.getElementById('mybutton');
		new_div.appendChild(button);
		let current_div = document.getElementById('simulation_'+current_simulation_id);
		let sim = new Simulation(this, current_div);
		this.simulations.push(sim);
		this.update_calculation(current_simulation_id, true);
		get_current_simulation_id(true);
	}

	update_calculation(id=null, update_range=false){
		this.Nk = parseInt(document.getElementById('Nk').value);// no. of tracer particles
		this.sk = parseFloat(document.getElementById('sk').value);// jump distance
		this.dim = parseInt(document.getElementById('dim').value);// dimensionality (typically 3)
		if (id!=null){
			this.simulations[id].update_calculation();
			return true;
		}
		this.simulations.forEach(function(element){
			element.update_calculation();
		});
		return true;
	}
}
class Simulation{
	constructor(master, div, elements_already_created=false){
		this.master = master;
		this.efficiency_barometer = new EfficiencyBarometer(this);
		this.precision_output = new PrecisionOutput(this);
		this.div = div;    this.id = get_current_simulation_id();
		this.create_input_elements(elements_already_created);
		if (elements_already_created){
			return true;
		}
	}
	create_input_elements(elements_already_created=false){
		let this_ = this// "this" behaves weirdly in javascript. This proxy variable makes sure that "this" is the object, rather than the function in which "this_" is used.
		if (elements_already_created){
			this.Nruns_input = document.getElementById("Nruns"+this.id);
			this.Nruns_input_label = document.getElementById("Nruns" + this.id + "_label");
			this.MSDend_input = document.getElementById("MSDend"+this.id);
			this.MSDend_input_label = document.getElementById("MSDend"+this.id + "_label");
			return true;
		}
        this.Nruns_input_div = document.createElement('div');
        this.Nruns_input_div.classList.add('input-group');
        this.Nruns_input_div.classList.add('input-group-icon');
		this.Nruns_input = document.createElement('input');
		this.Nruns_input.type = "text";
		this.Nruns_input.id = "Nruns"+this.id;
		this.Nruns_input.value = "1";
		this.Nruns_input.addEventListener('change', function(){this_.master.update_calculation(this_.id)});
		this.Nruns_input_label = document.createElement('div');
        this.Nruns_input_label.classList.add('input-icon');
		this.Nruns_input_label.innerHTML="N<sub>runs</sub>";
        this.Nruns_input_div.appendChild(this.Nruns_input);
        this.Nruns_input_div.appendChild(this.Nruns_input_label);
        this.MSDend_input_div = document.createElement('div');
        this.MSDend_input_div.classList.add('input-group');
        this.MSDend_input_div.classList.add('input-group-icon');
		this.MSDend_input = document.createElement('input');
		this.MSDend_input.type = "text";
		this.MSDend_input.id = "MSDend"+this.id;
		this.MSDend_input.value = "1e-20";
		this.MSDend_input.addEventListener('change', function(){this_.master.update_calculation(this_.id)});
		this.MSDend_input_label = document.createElement('div');
        this.MSDend_input_label.classList.add('input-icon');
		this.MSDend_input_label.innerHTML="<i>r<sub>k</sub><sup>2</sup></i>";
        this.MSDend_input_div.appendChild(this.MSDend_input)
        this.MSDend_input_div.appendChild(this.MSDend_input_label)
		this.div.appendChild(this.Nruns_input_div);
		this.div.appendChild(this.MSDend_input_div);
		return true;
	}
	update_calculation(){
		this.Nk		= this.master.Nk;
		this.dim		= this.master.dim;
		this.sk		= this.master.sk;
		let Nruns = parseInt(this.Nruns_input.value);
		let MSDend = parseFloat(this.MSDend_input.value);
		let Njumps_eff = this.Nk * MSDend / this.sk**2;
		this.NkJ = this.Nk*(1.-Math.exp(-Njumps_eff/this.Nk));
		this.relerr = 1.;
		if (this.NkJ > 1){this.relerr = Math.sqrt(2./(this.dim*this.NkJ * Nruns));}
		this.efficiency_barometer.update_ranges();
		this.efficiency_barometer.update_value();
		this.precision_output.update_value();
		// this.Njumps_eff_out.innerHTML = parseInt(Njumps_eff);
		// this.relerr_out.innerHTML = parseInt(relerr*10000)/100 + "%";
		// if (Njumps_eff>=this.Nk){
		// 	this.comment_out.innerHTML = "saturation reached";
		// }
		// else{
		// 	this.comment_out.innerHTML = "-";
		// }
	}
}

class PrecisionOutput{
	constructor(simulation){
		this.simulation = simulation;
		this.relerr_output = document.getElementById('relerr_output');
		this.NkJ_output = document.getElementById('NkJ_output');
	}
	update_value(){
		const relerr = this.simulation.relerr;
		const NkJ = this.simulation.NkJ;
		this.relerr_output.innerHTML = 'Particles jumped: ' + parseInt(NkJ) + '<br/>'
										+ 'rel. error: ' + parseInt(relerr*10000)/100 + "%";
		// this.NkJ_output.innerHTML = 'Particles jumped: ' + parseInt(NkJ);
	}
}

class EfficiencyBarometer{
	constructor(simulation){
		this.simulation = simulation;
		this.radius = 100
		this.offset_x = 10 + this.radius;
		this.offset_y = 10 + this.radius;
		this.region_shortrange 	  = document.getElementById('region_shortrange');
		this.region_mediumrange   = document.getElementById('region_mediumrange');
		this.region_optimal 	  = document.getElementById('region_optimal');
		this.region_plateau_onset = document.getElementById('region_plateau_onset');
		this.region_plateau       = document.getElementById('region_plateau');
		this.efficiency_pointer = document.getElementById('efficiency_pointer');
	}
	update_ranges(){
		const Nk = this.simulation.Nk;
		let max_ratio_shortrange = 1.-Math.exp(-2/Nk);
		let max_ratio_mediumrange = 1.-Math.exp(-20/Nk);
		let max_ratio_optimal = 1.-Math.exp(-1.);
		let max_ratio_plateau_onset = 1.-Math.exp(-2.);
		let max_ratio_plateau = 1.;
		let minx, miny, maxx, maxy;
		[minx, miny, maxx, maxy] = this.minmax_circlearc(0., max_ratio_shortrange);
		region_shortrange.setAttribute("d", "M " + minx + " " + miny + " A 100 100 0 0 1 " + maxx + " " + maxy);
		[minx, miny, maxx, maxy] = this.minmax_circlearc(max_ratio_shortrange, max_ratio_mediumrange);
		region_mediumrange.setAttribute("d", "M " + minx + " " + miny + " A 100 100 0 0 1 " + maxx + " " + maxy);
		[minx, miny, maxx, maxy] = this.minmax_circlearc(max_ratio_mediumrange, max_ratio_optimal);
		region_optimal.setAttribute("d", "M " + minx + " " + miny + " A 100 100 0 0 1 " + maxx + " " + maxy);
		[minx, miny, maxx, maxy] = this.minmax_circlearc(max_ratio_optimal, max_ratio_plateau_onset);
		region_plateau_onset.setAttribute("d", "M " + minx + " " + miny + " A 100 100 0 0 1 " + maxx + " " + maxy);
		[minx, miny, maxx, maxy] = this.minmax_circlearc(max_ratio_plateau_onset, max_ratio_plateau);
		region_plateau.setAttribute("d", "M " + minx + " " + miny + " A 100 100 0 0 1 " + maxx + " " + maxy);
	}
	minmax_circlearc(ratio_min, ratio_max){
		let minx = this.radius*Math.cos(Math.PI*(ratio_min-1.))+this.offset_x;
		let miny = this.radius*Math.sin(Math.PI*(ratio_min-1.))+this.offset_y;
		let maxx = this.radius*Math.cos(Math.PI*(ratio_max-1.))+this.offset_x;
		let maxy = this.radius*Math.sin(Math.PI*(ratio_max-1.))+this.offset_y;
		return [minx, miny, maxx, maxy];
	}
	update_value(){
		const Nk = this.simulation.Nk;
		const NkJ = this.simulation.NkJ;
		let ratio = NkJ / Nk;//1.-Math.exp(-val/opt);
		let angle = 180 * ratio;
		this.efficiency_pointer.setAttribute("transform", 'rotate(' + angle + ' ' + this.offset_x + ' ' + this.offset_y + ')');

	}
}

function start(){
	window.my_master = new SimulationMaster();
	window.my_master.update_calculation(null, true);//{update_range: true}
}