
const gameCanvas = document.getElementById('gameCanvas');
const ctx = gameCanvas.getContext('2d');
gameCanvas.width = window.innerWidth;
gameCanvas.height = window.innerHeight;

let runnerX = gameCanvas.width / 2 - 60;
let kebabX = Math.random() * (gameCanvas.width - 40);
let kebabY = -40;
let score = 0;
let gameover = false;
let frameCounter = 0; // 用于跟踪动画帧
let runnerDirection = 'right'; // 记录小人移动方向


function enterFullScreen() {
  if (document.documentElement.requestFullscreen) {
    document.documentElement.requestFullscreen();
  } else if (document.documentElement.mozRequestFullScreen) { // Firefox
    document.documentElement.mozRequestFullScreen();
 
} else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari and Opera
    document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
    document.documentElement.msRequestFullscreen();
    }
    }
    
    function update() {
    if (gameover) return;
    
    ctx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    drawBackground(ctx, gameCanvas, backgroundImage);
    drawTitle(ctx, gameCanvas);
    
    drawRunnerAndPlate(ctx, gameCanvas, runnerX, frameCounter, runnerDirection);
    drawKebab(ctx, kebabX, kebabY);
    drawScore(ctx, score);
    
    kebabY += 3;
    if (kebabY > gameCanvas.height) {
    gameover = true;
    alert('游戏结束！得分: ' + score);
    }
    
    if (kebabY >= gameCanvas.height - 150 && kebabX >= runnerX && kebabX <= runnerX + 120) {
    score++;
    kebabX = Math.random() * (gameCanvas.width - 40);
    kebabY = -40;
    }
    
    frameCounter++; // 更新动画帧计数器
    requestAnimationFrame(update);
    }
    
    enterFullScreen(); // 进入全屏模式
    update();
    
    document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && runnerX > 0) {
    runnerX -= 20;
    runnerDirection = 'left'; // 更新小人移动方向
    } else if (event.key === 'ArrowRight' && runnerX < gameCanvas.width - 120) {
    runnerX += 20;
    runnerDirection = 'right'; // 更新小人移动方向
    }
    });

