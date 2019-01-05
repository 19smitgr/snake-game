let food = {
    x: getRandInt(0, grid.numCols - 1),
    y: getRandInt(0, grid.numRows - 1),
    color: "#ff0000",
    draw() {
        grid.fillSpace(this.x, this.y, this.color);
    },
    generateNewPos() {
        this.x = getRandInt(0, grid.numCols - 1);
        this.y = getRandInt(0, grid.numRows - 1);
    }
}