import { Simulation } from '../../components/simulation.js';
import { Ball } from '../../components/ball.js';
import { getRandomInt } from '../../components/helpers.js';
let randomWalkStructure = {
    id: 'random-walk-simulation',
    title: 'Random Walk Simulation',
    buttons: {
        'Create Balls': function createBalls() {
            let numberOfBalls = Number.parseInt(prompt("How many balls do you want?"));
            if (Number.isNaN(numberOfBalls)) {
                numberOfBalls = 1;
            }
            for (let i = 0; i < numberOfBalls; i++) {
                let newBall = new Ball(randomWalkProperties, 'ball', getRandomInt(7, 1), getRandomInt(7, 1), 450/2, 450/2);
                newBall.container.element.appendChild(newBall.element);
                randomWalkProperties.balls.push(newBall);
            }
        },
        'Change Wind Speed': function changeWindSpeed() {
            let newWindSpeed = Number.parseInt(prompt("How strong do you want the wind to be?"));
            if (!Number.isNaN(newWindSpeed)) {
                randomWalkProperties.windSpeed = newWindSpeed;
                randomWalkProperties.balls.forEach((ball) => {
                    ball.velX = ball.orignalVelX;
                })
            }
        },
        'Change Gravity': function changeGravity() {
            let newGravity = Number.parseInt(prompt("How strong do you want the gravity to be?"));
            if (!Number.isNaN(newGravity)) {
                randomWalkProperties.gravity = newGravity;
                randomWalkProperties.balls.forEach((ball) => {
                    ball.velY = ball.originalVelY;
                }) 
            }
        },
        'Start Simulation': function startSimulation() {
            randomWalkProperties.balls.forEach((ball) => randomWalkProperties.intervalIDs.push(setInterval(ball.moveRandomly, 1000/62, ball)) );
        },
        'Stop Simulation': function stopSimulation() {
            randomWalkProperties.intervalIDs.forEach( (id) => clearInterval(id) );
        },
        'Remove Ball': function removeBall() {
            let ballToRemove = randomWalkProperties.balls.pop();
            let intervalToRemove = randomWalkProperties.intervalIDs.pop();
            clearInterval(intervalToRemove);
            ballToRemove.container.element.removeChild(ballToRemove.element);
        },
        'Remove All Balls': function removeAll() {
            let length = randomWalkProperties.balls.length;
            for (let i = 0; i < length; i++) {
                let ballToRemove = randomWalkProperties.balls.pop();
                let intervalToRemove = randomWalkProperties.intervalIDs.pop();
                clearInterval(intervalToRemove);
                ballToRemove.container.element.removeChild(ballToRemove.element);
            }
        }
    },
    repoLink: {
        href: 'https://github.com/DylanAvernon/random-walk-simulation',
        textContent: 'GitHub Repo'
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
                'Change Wind Speed': ['change-wind-speed-button', 'btn', 'btn-secondary'],
                'Change Gravity': ['change-gravity-button', 'btn', 'btn-secondary']
            }
        },
        container: ['container'],
        repoLink: ['repo-link', 'link-info']
    },
    ids: {
        simulation: 'random-walk-simulation',
        header3: 'random-walk-simulation-header3',
        navigationBar: {
            navigationBar: 'random-walk-simulation-navigation-bar',
            buttons: {
                'Create Balls': 'random-walk-simulation-create-balls-button', 
                'Remove Ball': 'random-walk-simulation-remove-ball-button', 
                'Remove All Balls': 'random-walk-simulation-remove-all-balls-button', 
                'Start Simulation': 'random-walk-simulation-start-simulation-button', 
                'Stop Simulation': 'random-walk-simulation-stop-simulation-button',
                'Change Wind Speed': 'random-walk-simulation-change-wind-speed-button',
                'Change Gravity': 'random-walk-simulation-change-gravity-button'
            }
        },
        container: 'random-walk-simulation-container',
        repoLink: 'random-walk-simulation-repo-link'
    }
}

let randomWalkProperties = {
        balls: [],
        intervalIDs: [],
        maxEdge: 450,
        minEdge: 0,
        gravity: 0,
        stepSize: 10,
        windSpeed: 0,
        project: new Simulation(randomWalkStructure)
}

randomWalkProperties.project.render();
randomWalkProperties.project.style();
randomWalkProperties.project.activate();

export { randomWalkProperties };