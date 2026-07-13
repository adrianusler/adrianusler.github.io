---
title: Research
description: Electrochemistry &amp; Numerical Methods
layout: default
---

# Topics
<div class="card-container">
<div class="card">
<h3>Impedance spectroscopy of electrochemical systems</h3>
<div><img src="/figures/schematic_nyquist_four_features_1.png" alt="schematic impedance spectrum of a simulated flat-plate electric double-layer capacitor" style="max-width: 50%; float:right; margin: 10px;" /></div>
Impedance spectroscopy is an electrical measurement technique in which electrochemical systems are subjected to an oscillating stimulus, and the resulting response is measured. Different electrochemical processes (e.g., charge transfer, diffusion, and double-layer charging) can be distinguished by their characteristic time scales. The interpretation of impedance spectra requires detailed physical understanding of the involved processes. In my work, I use simulations to help interpret impedance spectra of electrochemical systems, with a focus on double layers in liquid electrolytes and space-charge layers in solid electrolytes.
</div>

<div class="card">
<h3>Grain-boundary space-charge layers in ion-conducting solids</h3>
<div>
  <img src="/figures/RE_illustration.png" alt="illustration of the restricted-equilibrium model" style="max-width: 80%; display: inline-block; margin: 10px;" />
</div>
The electrical resistance of many ion-conducting oxides (useful e.g. as solid electrolytes in fuel cells) is largely determined by the presence of space charge at the grain boundaries.
With formulas from simplified models, one can estimate from electrical measurements the electric potential difference between the grain boundary and the grain bulk, called the space-charge potential.
In my research, I have studied the validity of such estimates. Notably, the underlying models do not account for a sample's thermal history. During sample fabrication (sintering), the grain-boundary defect chemistry can undergo irreversible changes which are typically disregarded in the analysis of electrical data.
</div>

<div class="card">
<h3>Random-walk statistics on crystal lattices</h3>
<div><img src="/figures/illustration_tracer_diffusion_corr.png" alt="illustration of tracer diffusion in a crystal lattice" style="max-width: 50%; float:right; margin: 10px;" /></div>
The kinetics of ion transport in solid materials can be studied by means of atomistic simulations, by extracting a diffusion coefficient from the ions' trajectories. Specifically, the mean squared displacement (MSD) of the ions is analysed as a function of simulation time. The outcome of such a simulation is inherently subject to statistical uncertainties.

In my research, I have focused on quantifying these uncertainties, in particular on how the error in a tracer diffusion coefficient depends on simulation parameters such as the number of diffusing particles, the total simulation time, and the crystal structure.
</div>
</div>

# Methods
<div class="card-container">
<div class="card">
<h3>Finite Element Method</h3>
<div>
  <img src="/figures/fem_hatfunctions.png" alt="illustration of hat basis functions in FEM" style="max-width: 50%; float:right; margin: 10px;" />
</div>

The Finite Element Method (FEM) is a numerical technique used to solve differential equations. A particular strength of FEM is its ability to handle arbitrary subdivisions of the simulation domain into smaller, simpler parts (the elements). 

In this way, computational effort can be focused on regions where higher accuracy is needed, while coarser discretisations can be used elsewhere.

In the context of my research, FEM is employed to simulate the electrochemical systems, with a focus on double layers (in liquid electrolytes) and space-charge layers (in solid electrolytes).
</div>

<div class="card">
<h3>Kinetic Monte Carlo</h3>
<div>
  <img src="/figures/random_oscillation_1736982453.png" alt="illustration of the kinetic Monte Carlo (kMC) method" style="max-width: 50%; float:right; margin: 10px;" />
</div>

Kinetic Monte Carlo (kMC) is a stochastic simulation technique used to model the time evolution of a system. Unlike Molecular Dynamics simulations, which explicitly track the positions and velocities of individual atoms, kMC describes events on longer time scales by treating them as random processes with average event rates.

In my research, kMC is utilized to study the random-walk behavior of ions as they migrate through the lattice structure of ion-conducting solids. In this way, ion transport can be simulated on much longer time scales than with Molecular Dynamics, thus providing broader insights into the statistics of diffusion processes.
</div>
</div>