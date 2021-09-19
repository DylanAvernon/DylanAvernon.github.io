import { Project } from '../components/project.js';
import { Ball } from '../components/ball.js';
import { getRandomInt } from '../components/helpers.js';
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
                let newBall = new Ball(randomWalkProperties, getRandomInt(7, 1), getRandomInt(7, 1), 450/2, 450/2);
                newBall.container.element.appendChild(newBall.element);
                randomWalkProperties.balls.push(newBall);
            }
        },
        'Start Simulation': function startSimulation() {
            randomWalkProperties.balls.forEach((ball) => randomWalkProperties.intervalIDs.push(setInterval(ball.moveRandomly, 1000/62, ball)) );
        },
        'Stop Simulation': function stopSimulation() {
            randomWalkProperties.intervalIDs.forEach( (id) => clearInterval(id) );
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
        project: new Project(randomWalkStructure)
}
document.getElementById('projects').appendChild(randomWalkProperties.project.element);