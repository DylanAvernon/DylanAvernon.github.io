// elementToRemoveFrom.removeChild(elementToRemove)
function getRandomInt(max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}
function getRandomColor() {
    return {
        red: getRandomInt(255, 0), 
        green: getRandomInt(255, 0), 
        blue: getRandomInt(255, 0)
    };
}
function createBalls() {
    let numberOfBalls = Number.parseInt(prompt("How many balls do you want?"));
    if (Number.isNaN(numberOfBalls)) {
        numberOfBalls = 1;
    }
    for (let i = 0; i < numberOfBalls; i++) {
        balls.push(new Ball());
    }
}
function startSimulation() {
    balls.forEach((ball) => intervalIDs.push(setInterval(ball.move, 1000/60, ball)) );
}
function stopSimulation() {
    intervalIDs.forEach( (id) => clearInterval(id) );
}
function changeGravity() {
    let newGravity = Number.parseInt(prompt("How strong do you want the gravity to be?"));
    if (!Number.isNaN(newGravity)) {
        gravity = newGravity;
        balls.forEach(ball => {
            ball.velY = ball.originalVelY;
        })
    }
}

