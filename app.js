const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const ballcount = document.getElementById("ball-count");

let balls = []; 
const initialBall = { x: canvas.width / 2, y: canvas.height - 30, velocityX: 2, velocityY: -2, radius: 5 };

function drawBall(x, y, radius) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    balls.forEach(ball => {
        drawBall(ball.x, ball.y, ball.radius);

        let hitWall = false;

        if (ball.x + ball.velocityX > canvas.width - ball.radius || ball.x + ball.velocityX < ball.radius) {
            ball.velocityX = -ball.velocityX;
            // console.log("Hit");
            createNewBall();
        }
        if (ball.y + ball.velocityY > canvas.height - ball.radius || ball.y + ball.velocityY < ball.radius) {
            ball.velocityY = -ball.velocityY;
            // console.log("Hit");
            createNewBall();
        }

        ball.x += ball.velocityX;
        ball.y += ball.velocityY;
    });
}

function createNewBall() {
    let newBall = Object.assign({}, initialBall); // Clone initial ball object
    // newBall.radius *= 2; // Double the radius
    newBall.x = Math.floor(Math.random() * (canvas.width - newBall.radius * 2)) + newBall.radius;
    newBall.y = Math.floor(Math.random() * (canvas.height - newBall.radius * 2)) + newBall.radius;
    balls.push(newBall);
    ballcount.innerHTML = "Ball Count: " + balls.length;
}

function startGame() {
    balls.push(initialBall);
    ballcount.innerHTML = "Ball Count: " + balls.length;

    const interval = setInterval(draw, 10);
}

startGame();