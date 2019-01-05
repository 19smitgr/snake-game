let then = Date.now();
let now;

addEventListener("keydown", function(e) {
    snake.changeMovement(e.keyCode);
});

function gameLoop() {
    now = Date.now();
    delta = now - then;

    if (delta > 50) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        grid.draw();
        snake.renderMovement();
        if (snake.isHittingWall()) {
            // stops snake
            snake.body[0].vx = 0;
            snake.body[0].vy = 0;

            // this is where the game over function would be called
        }

        if (snake.isTouchingFood()) {
            snake.getLonger();
            food.generateNewPos();
        }

        food.draw();

        then = now;
    }

    requestAnimationFrame(gameLoop);
}

snake.constructor();
gameLoop();