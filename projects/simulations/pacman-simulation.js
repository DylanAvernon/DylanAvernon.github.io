import { Simulation } from '../../components/simulation.js';
import { Pacman } from '../../components/pacman.js';
let images = [
    ['../../images/right-opened.png', '../../images/right-closed.png'],
    ['../../images/left-opened.png', '../../images/left-closed.png']
];
let pacmanSimulationStructure = {
    title: 'Pacman Simulation',
    buttons: {
        'Create Pacmen': function createPacmen() {
            let newPacman = new Pacman(pacmanSimulationProperties, 'pacman');
            newPacman.container.element.appendChild(newPacman.element);
            pacmanSimulationProperties.pacmen.push(newPacman);
        },
        'Start Simulation': function startSimulation() {
            pacmanSimulationProperties.pacmen.forEach((pacman) => pacmanSimulationProperties.intervalIDs.push(setInterval(pacman.move, 1000/60, pacman)));
        },
        'Stop Simulation': function stopSimulation() {
            pacmanSimulationProperties.intervalIDs.forEach((id) => clearInterval(id));
        },
        'Remove Pacman': function removePacman() {
            let pacmanToRemove = pacmanSimulationProperties.pacmen.pop();
            let intervalToRemove = pacmanSimulationProperties.intervalIDs.pop();
            clearInterval(intervalToRemove);
            pacmanToRemove.container.element.removeChild(pacmanToRemove.element);
        },
        'Remove All Pacmen': function removeAll() {
            let length = pacmanSimulationProperties.pacmen.length;
            for (let i = 0; i < length; i++) {
                let pacmanToRemove = pacmanSimulationProperties.pacmen.pop();
                let intervalToRemove = pacmanSimulationProperties.intervalIDs.pop();
                clearInterval(intervalToRemove);
                pacmanToRemove.container.element.removeChild(pacmanToRemove.element);
            }
        }
    },
    repoLink: {
        href: 'https://github.com/DylanAvernon/pacman-simulation',
        textContent: 'GitHub Repo'
    },
    classList: {
        simulation: ['simulation'],
        header3: ['header3'],
        navigationBar: {
            navigationBar: ['navigation-bar'],
            buttons: {
                'Create Pacmen': ['create-pacmen-button', 'btn', 'btn-primary'], 
                'Start Simulation': ['start-simulation-button', 'btn', 'btn-success'], 
                'Stop Simulation': ['stop-simulation-button', 'btn', 'btn-warning'],
                'Remove Pacman': ['remove-pacman-button', 'btn', 'btn-warning'], 
                'Remove All Pacmen': ['remove-all-pacmen-button', 'btn', 'btn-danger']
            }
        },
        container: ['container'],
        repoLink: ['repo-link', 'link-info']
    },
    ids: {
        simulation: 'pacman-simulation',
        header3: 'pacman-simulation-header3',
        navigationBar: {
            navigationBar: 'pacman-simulation-navigation-bar',
            buttons: {
                'Create Pacmen': 'pacman-simulation-create-pacmen-button', 
                'Start Simulation': 'pacman-simulation-start-simulation-button', 
                'Stop Simulation': 'pacman-simulation-stop-simulation-button',
                'Remove Pacman': 'pacman-simulation-remove-pacam-button', 
                'Remove All Pacmen': 'pacman-simulation-remove-all-pacmen-button' 
            }
        },
        container: 'pacman-simulation-container',
        repoLink: 'pacman-simulation-repo-link'
    }
};

let pacmanSimulationProperties = {
    pacmen: [],
    intervalIDs: [],
    pacmanImages: images,
    maxEdge: 450,
    minEdge: 0,
    project: new Simulation(pacmanSimulationStructure)
}

pacmanSimulationProperties.project.render();
pacmanSimulationProperties.project.style();
pacmanSimulationProperties.project.activate();

export { pacmanSimulationProperties };