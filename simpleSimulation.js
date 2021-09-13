import { Project } from './project.js';
import { Ball } from './ball.js';
let projectStructure = {
    id: 'simple-simulation',
    title: 'Particle Motion Simulation',
    buttons: {
        'Create Balls': function createBalls() {
            let numberOfBalls = Number.parseInt(prompt("How many balls do you want?"));
            if (Number.isNaN(numberOfBalls)) {
                numberOfBalls = 1;
            }
            for (let i = 0; i < numberOfBalls; i++) {
                let newBall = new Ball(properties);
                newBall.container.element.appendChild(newBall.element);
                properties.balls.push(newBall);
            }
        },
        'Start Simulation': function startSimulation() {
            properties.balls.forEach((ball) => properties.intervalIDs.push(setInterval(ball.move, 1000/60, ball)) );
        },
        'Stop Simulation': function stopSimulation() {
            properties.intervalIDs.forEach( (id) => clearInterval(id) );
        },
        'Change Gravity': function changeGravity() {
            let newGravity = Number.parseInt(prompt("How strong do you want the gravity to be?"));
            if (!Number.isNaN(newGravity)) {
                properties.gravity = newGravity;
                properties.balls.forEach((ball) => {
                    ball.velY = ball.originalVelY;
                }) 
            }
        },
        'Remove Ball': function removeBall() {
            let ballToRemove = properties.balls.pop();
            let intervalToRemove = properties.intervalIDs.pop();
            clearInterval(intervalToRemove);
            ballToRemove.container.element.removeChild(ballToRemove.element);
        }
    }
}

let properties = {
        balls: [],
        intervalIDs: [],
        maxEdge: 450,
        minEdge: 0,
        gravity: 0,
        project: new Project(projectStructure)
}
document.getElementById('projects').appendChild(properties.project.element);