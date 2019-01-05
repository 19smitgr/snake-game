let grid = {
    get GRID_SQUARE_SIZE() {
        return 20;
    },
    get numRows() {
        return Math.ceil(canvas.height / this.GRID_SQUARE_SIZE);
    },
    get numCols() {
        return Math.ceil(canvas.width / this.GRID_SQUARE_SIZE);
    },
    // creates as many squares within screen
    draw() {
        ctx.lineWidth = 2;
        for (let currentRow = 0; currentRow < this.numRows; currentRow++) {
            ctx.beginPath();
            ctx.moveTo(0, currentRow * this.GRID_SQUARE_SIZE);
            ctx.lineTo(canvas.width, currentRow * this.GRID_SQUARE_SIZE);
            ctx.stroke();
        }
    
        for (let currentCol = 0; currentCol < this.numCols; currentCol++) {
            ctx.beginPath();
            ctx.moveTo(currentCol * this.GRID_SQUARE_SIZE, 0);
            ctx.lineTo(currentCol * this.GRID_SQUARE_SIZE, canvas.height);
            ctx.stroke();
        }
    },
    fillSpace(x, y, color = "#000000") {
        ctx.beginPath();
        ctx.fillStyle = color;
        ctx.fillRect(
            x * this.GRID_SQUARE_SIZE, 
            y * this.GRID_SQUARE_SIZE, 
            this.GRID_SQUARE_SIZE, 
            this.GRID_SQUARE_SIZE
        );
    }
}