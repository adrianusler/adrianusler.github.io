---
title: Research
description: Electrochemistry &amp; Numerical Methods
layout: default
---

# Topics
<div class="card-container">
{% for item in site.data.topics %}
<div class="card">
  <h3>{{item.title}}</h3>
  {% if item.figure %}
  <div><img src="{{item.figure}}" alt="{{item.title}}" style="max-width: 100%; display:inline-block; margin: 10px;" /></div>
  {% endif %}
  {% if item.abstract %}
  <a href="#popup_{{item.id}}">Show more</a>
  {% endif %}
</div>
<div id="popup_{{item.id}}" class="overlay">
  <div class="popup">
    <h3>{{item.title}}</h3>
    <a class="close" href="#">&times;</a>
    {% if item.figure %}
    <div><img src="{{item.figure}}" alt="{{item.title}}" style="max-width: 50%; float:right; margin: 10px;" /></div>
    {% endif %}
    {{item.abstract}}
    <a href="#">Close</a>
  </div>
</div>
{% endfor %}
</div><!-- end card-container -->

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