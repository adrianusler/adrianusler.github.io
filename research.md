---
title: Research
layout: default
---

# Topics
## Grain-boundary space-charge layers in ion-conducting solids
The electrical resistance of ion-conducting oxides (useful e.g. as solid electrolytes in fuel cells) is often largely determined by the grain-to-grain contacts. The resistance of pristine grain boundaries in ion-conducting solids is generally attributed to the presence of space charge at the grain boundaries&mdash;specifically, the mobile majority charge carriers are depleted in the space-charge layers, owing to an excess charge of the grain-boundary core, by which they are repelled.
In the scope of simplified models, properties of the grain-boundary space-charge layers in a sample may be deduced from electrical measurements (e.g. impedance spectroscopy). 

[comment]: # In the simplest case, the counter-charged ions (e.g., acceptor cations) are assumed to take a uniform concentration profile throughout the sample (Mott&ndash;Schottky model). In the scope of this oversimplified representation, closed-form expressions may be derived that relate the electrical properties (resistance, capacitance) of grain boundaries to the space-charge potential &Phi;<sub>0</sub>, i.e., the value of the electric potential at the edge between grain-boundary core and space-charge layer, relative to the bulk reference value.

[comment]: # In my research, I have studied by means of continuum (FEM) simulations how electrical properties are related to &Phi;<sub>0</sub> in more complex cases, taking into account the typical thermal history of ceramic samples. Upon sintering, acceptor cations will be mobile and reach electrochemical equilibrium. When the sample is subsequently cooled down, the cations' mobility decreases. At typical measurement conditions (500&ndash;1000 K), the cations may typically be considered to be immobile, with their concentration profile being retained from a high-temperature equilibrium state. This scenarios may be modelled in the scope of the restricted-equilibrium model, in which the cation profile is assumed to be frozen-in abruptly at a transition temperature.

In my research, I have studied by means of continuum (FEM) simulations how the properties observed in electrical measurements can be affected by the thermal history of ceramic samples. During sample fabrication (sintering), the grain-boundary defect chemistry can undergo irreversible changes (e.g., accumulation of dopants at grain boundaries), which are typically disregarded in the analysis of electrical data.

<div style="text-align: center;">
  <img src="/figures/RE_illustration.png" alt="illustration of the restricted-equilibrium model" style="max-width: 50%;" />
</div>

## Random-walk statistics on crystal lattices
The kinetics of ion transport in solid materials can be studied by means of atomistic simulations, by extracting a diffusion coefficient from the ions' trajectories. Specifically, the mean squared displacement (MSD) of the ions is analysed as a function of simulation time. The outcome of such a simulation is inherently subject to statistical uncertainties.

In my research, I have focused on quantifying these uncertainties, in particular on how the error in a tracer diffusion coefficient depends on simulation parameters such as the number of diffusing particles, the total simulation time, and the crystal structure.

# Methods
## Finite Element Method
The Finite Element Method (FEM) is a numerical technique used to solve differential equations. A particular strength of FEM is its ability to handle arbitrary subdivisions of the simulation domain into smaller, simpler parts (the elements). In this way, computational effort can be focused on regions where higher accuracy is needed, while coarser discretisations can be used elsewhere.

In the context of my research, FEM is employed to simulate the electrochemical systems, with a focus on double layers (in liquid electrolytes) and space-charge layers (in solid electrolytes).

## Kinetic Monte Carlo
Kinetic Monte Carlo (kMC) is a stochastic simulation technique used to model the time evolution of a system. Unlike Molecular Dynamics simulations, which explicitly track the positions and velocities of individual atoms, kMC describes events on longer time scales by treating them as random processes with average event rates.

In my research, kMC is utilized to study the random-walk behavior of ions as they migrate through the lattice structure of ion-conducting solids. In this way, ion transport can be simulated on much longer time scales than with Molecular Dynamics, thus providing broader insights into the statistics of diffusion processes.