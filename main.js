let project = document.getElementById('simple-simulation');
let balls = [];
let intervalIDs = [];
let maxEdge = 450;
let minEdge = 0;

/*  
    In order for the ball to keep moving 
    the force of gravity must be less than
    or equal to the ball's velocity in the
    y-direction
*/
let gravity = 0;
let container = new Container();


