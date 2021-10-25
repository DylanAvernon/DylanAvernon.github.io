import { Simulation } from '../../components/simulation.js';
import { Ball } from '../../components/ball.js';
let projectileSimulationStructure = {
    title: 'Projectile Simulation',
    buttons: {
        'Create Balls': function createBalls() {
            let numberOfBalls = Number.parseInt(prompt("How many balls do you want?"));
            if (Number.isNaN(numberOfBalls)) {
                numberOfBalls = 1;
            }
            for (let i = 0; i < numberOfBalls; i++) {
                let newBall = new Ball(projectileSimulationProperties, 'ball');
                newBall.container.element.appendChild(newBall.element);
                projectileSimulationProperties.balls.push(newBall);
            }
        },
        'Change Gravity': function changeGravity() {
            let newGravity = Number.parseInt(prompt("How strong do you want the gravity to be?"));
            if (!Number.isNaN(newGravity)) {
                projectileSimulationProperties.gravity = newGravity;
                projectileSimulationProperties.balls.forEach((ball) => {
                    ball.velY = ball.originalVelY;
                }) 
            }
        },
        'Start Simulation': function startSimulation() {
            projectileSimulationProperties.balls.forEach((ball) => projectileSimulationProperties.intervalIDs.push(setInterval(ball.move, 1000/60, ball)) );
        },
        'Stop Simulation': function stopSimulation() {
            projectileSimulationProperties.intervalIDs.forEach( (id) => clearInterval(id) );
        },
        'Remove Ball': function removeBall() {
            let ballToRemove = projectileSimulationProperties.balls.pop();
            let intervalToRemove = projectileSimulationProperties.intervalIDs.pop();
            clearInterval(intervalToRemove);
            ballToRemove.container.element.removeChild(ballToRemove.element);
        },
        'Remove All Balls': function removeAll() {
            let length = projectileSimulationProperties.balls.length;
            for (let i = 0; i < length; i++) {
                let ballToRemove = projectileSimulationProperties.balls.pop();
                let intervalToRemove = projectileSimulationProperties.intervalIDs.pop();
                clearInterval(intervalToRemove);
                ballToRemove.container.element.removeChild(ballToRemove.element);
            }
        }
    },
    classList: {
        simulation: ['simulation'],
        header3: ['header3'],
        navigationBar: {
            navigationBar: ['navigation-bar'],
            buttons: {
                'Create Balls': ['create-balls-button', 'btn', 'btn-primary'], 
                'Remove Ball': ['remove-ball-button', 'btn', 'btn-warning'], 
                'Remove All Balls': ['remove-all-balls-button', 'btn', 'btn-danger'], 
                'Start Simulation': ['start-simulation-button', 'btn', 'btn-success'], 
                'Stop Simulation': ['stop-simulation-button', 'btn', 'btn-warning'],
                'Change Gravity': ['change-gravity-button', 'btn', 'btn-secondary']
            }
        },
        container: ['container']
    },
    ids: {
        simulation: 'projectile-simulation',
        header3: 'projectile-simulation-header3',
        navigationBar: {
            navigationBar: 'projectile-simulation-navigation-bar',
            buttons: {
                'Create Balls': 'projectile-simulation-create-balls-button', 
                'Remove Ball': 'projectile-simulation-remove-balls-button', 
                'Remove All Balls': 'projectile-simulation-remove-all-balls-button', 
                'Start Simulation': 'projectile-simulation-start-simulation-button', 
                'Stop Simulation': 'projectile-simulation-stop-simulation-button',
                'Change Gravity': 'projectile-simulation-change-gravity-button'
            }
        },
        container: 'projectile-simulation-container'
    }
}

let projectileSimulationProperties = {
        balls: [],
        intervalIDs: [],
        maxEdge: 450,
        minEdge: 0,
        gravity: 0,
        project: new Simulation(projectileSimulationStructure)
}

projectileSimulationProperties.project.render();
projectileSimulationProperties.project.style();
projectileSimulationProperties.project.activate();

export { projectileSimulationProperties };