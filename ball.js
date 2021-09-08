class Ball {
    constructor(velX = getRandomInt(7, 1), velY = getRandomInt(7, 1), posX = getRandomInt(450, 0), posY = getRandomInt(450, 0)) {
      this.ball = document.createElement('div');
      this.color = getRandomColor();
      this.ball.className = 'balls';
      this.posX = posX;
      this.posY = posY;
      this.ball.style.left = `${this.posX}px`;
      this.ball.style.top = `${this.posY}px`;
      this.ball.style.background = `rgb(${this.color.red}, ${this.color.green}, ${this.color.blue})`;
      container.container.appendChild(this.ball);
  
      this.velX = velX;
      this.velY = velY;
      this.maxEdge = maxEdge;
      this.minEdge = minEdge;
    }
    computeNewCoordinates(b) {
        // New X-coordinate
        b.posX += b.velX;

        // apply gravity
        b.velY += gravity;

        // New Y-coordinate
        b.posY += b.velY;
    } 

    detectEdges(b) {
        if (b.posX < b.minEdge || b.posX > b.maxEdge) b.velX = -b.velX;
        if (b.posY > b.maxEdge) {
            b.velY = -b.velY;

            /*  The value assigned to posY when the bottom edge
                is detected must be equal to the minEdge.
             */

            b.posY = b.maxEdge;
        }
        else if (b.posY < b.minEdge) {
            b.velY = -b.velY;
            b.posY = b.minEdge;
        }
    }

    move(b) {
        b.computeNewCoordinates(b);
        b.detectEdges(b);

        // Move the ball
        b.ball.style.left = b.posX + 'px';
        b.ball.style.top = b.posY + 'px';
    }
}