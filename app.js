let canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let x = canvas.width / 2;
let y = canvas.height - 30;
let velocityX = 1;
let velocityY = -1;
const ballRadius = 10;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    drawBall();

    if (x + velocityX > canvas.width - ballRadius || x + velocityX < ballRadius) {
        velocityX = -velocityX;
    }
    if (y + velocityY > canvas.height - ballRadius || y + velocityY < ballRadius){
        velocityY= -velocityY;
    }

    x += velocityX;
    y += velocityY;
}

function startGame() {
    const interval = setInterval(draw, 10);
}

startGame();

