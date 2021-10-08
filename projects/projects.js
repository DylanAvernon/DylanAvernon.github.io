import { pacmanSimulationProperties } from "./simulations/pacman-simulation.js";
import { projectileSimulationProperties } from "./simulations/projectile-simulation.js";
import { randomWalkProperties } from "./simulations/random-walk-simulation.js";

import { letterCounterProperties } from "./text-processors/letter-counter.js";
import { wordCounterProperties } from "./text-processors/word-counter.js";
import { sentenceCounterProperties } from "./text-processors/sentence-counter.js";

// Simulations
document.getElementById('simulations').appendChild(projectileSimulationProperties.project.element);
document.getElementById('simulations').appendChild(randomWalkProperties.project.element);
document.getElementById('simulations').appendChild(pacmanSimulationProperties.project.element);

// Text-Processors
document.getElementById('text-processors').appendChild(letterCounterProperties.project.element);
document.getElementById('text-processors').appendChild(wordCounterProperties.project.element);
document.getElementById('text-processors').appendChild(sentenceCounterProperties.project.element);