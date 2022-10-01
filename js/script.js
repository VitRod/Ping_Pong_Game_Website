// Canvas
const { body } = document;
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');
const width = 500;
const height = 700;
const screenWidth = window.screen.width;
const canvasPosition = screenWidth / 2 - width / 2;
const isMobile = window.matchMedia('(max-width: 600px)');
const gameOverEl = document.createElement('div');

// Paddle
const paddleHeight = 10;
const paddleWidth = 50;
const paddleDiff = 25;
let paddleBottomX = 225;
let paddleTopX = 225;
let playerMoved = false;
let paddleContact = false;

// Ball
let ballX = 250;
let ballY = 350;
const ballRadius = 5;

// Speed
let speedY;
let speedX;
let trajectoryX;
let computerSpeed;

// Change Mobile Settings
if (isMobile.matches) {
    speedY = -2;
    speedX = speedY;
    computerSpeed = 4;
  } else {
    speedY = -1;
    speedX = speedY;
    computerSpeed = 3;
  }

  // Score
let playerScore = 0;
let computerScore = 0;
const winningScore = 7;
let isGameOver = true;
let isNewGame = true;


// Render Everything on Canvas
function renderCanvas() {
    // Canvas Background
    context.fillStyle = '#17202A';
    context.fillRect(0, 0, width, height);
  
    // Paddle Color
    context.fillStyle = '#F9EBEA';
  
    // Player Paddle (Bottom)
    context.fillRect(paddleBottomX, height - 20, paddleWidth, paddleHeight);
  
    // Computer Paddle (Top)
    context.fillRect(paddleTopX, 10, paddleWidth, paddleHeight);
  
    // Dashed Center Line
    context.beginPath();
    context.setLineDash([4]);
    context.moveTo(0, 350);
    context.lineTo(500, 350);
    context.strokeStyle = 'grey';
    context.stroke();
  
    // Ball
    context.beginPath();
    context.arc(ballX, ballY, ballRadius, 2 * Math.PI, false);
    context.fillStyle = 'white';
    context.fill();
  
    // Score
    context.font = '32px Courier New';
    context.fillText(playerScore, 20, canvas.height / 2 + 50);
    context.fillText(computerScore, 20, canvas.height / 2 - 30);
    context.font = '40px Courier New sans-serif';
    context.strokeText('PONG GAME', 260, 340);
  }
  
