function drawBackground(ctx, gameCanvas, backgroundImage) {
    ctx.globalAlpha = 0.5; // 设置透明度为50%
    ctx.drawImage(backgroundImage, 0, 0, gameCanvas.width, gameCanvas.height);
    ctx.globalAlpha = 1.0; // 恢复透明度为100%
  }
  
  function drawRunnerAndPlate(ctx, gameCanvas, runnerX, frameCounter, runnerDirection) {
    ctx.font = '120px Arial';
    const plateSymbol = '🥘';
    // 根据小人移动方向调整小人和盘子的相对位置
    if (runnerDirection === 'left') {
      ctx.fillText(plateSymbol + '🏃‍♂️', runnerX, gameCanvas.height - 30);
    } else {
      ctx.save();
      ctx.scale(-1, 1); // 水平翻转
      ctx.fillText(plateSymbol + '🏃‍♂️', -runnerX - 120, gameCanvas.height - 30);
      ctx.restore();
    }
  }
  
  function drawKebab(ctx, kebabX, kebabY) {
    ctx.font = '60px Arial';
    ctx.fillText('🍖', kebabX, kebabY);
  }
  
  function drawScore(ctx, score) {
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText('得分: ' + score, 10, 40);
  }
  
  function drawTitle(ctx, gameCanvas) {
    ctx.fillStyle = 'black';
    ctx.font = '50px Arial';
    ctx.fillText('进淄赶烤', gameCanvas.width / 2 - 100, 60);
  }
  
