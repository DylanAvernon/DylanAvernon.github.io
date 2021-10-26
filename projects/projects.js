import { pacmanSimulationProperties } from "./simulations/pacman-simulation.js";
import { projectileSimulationProperties } from "./simulations/projectile-simulation.js";
import { randomWalkProperties } from "./simulations/random-walk-simulation.js";

import { letterCounterProperties } from "./text-processors/letter-counter.js";
import { wordCounterProperties } from "./text-processors/word-counter.js";
import { sentenceCounterProperties } from "./text-processors/sentence-counter.js";
import { stringPermutorProperties } from "./featured-projects/string-permutor.js";
import { busTrackerProperties } from "./featured-projects/bus-tracker.js";

// Featured Projects
let featuredProjects = document.getElementById('featured-projects');

featuredProjects.appendChild(busTrackerProperties.project.element);
featuredProjects.appendChild(pacmanSimulationProperties.project.element);

// Simulations
let simulations = document.getElementById('simulations');

simulations.appendChild(projectileSimulationProperties.project.element);
simulations.appendChild(randomWalkProperties.project.element);

// Text-Processors
let textProcessors = document.getElementById('text-processors');

textProcessors.appendChild(letterCounterProperties.project.element);
textProcessors.appendChild(wordCounterProperties.project.element);
textProcessors.appendChild(sentenceCounterProperties.project.element);
textProcessors.appendChild(stringPermutorProperties.project.element);