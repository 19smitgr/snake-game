let snake = {
    initialX: 4, // arbitrary starting point to give player time to react
    initialY: 4,
    initialVx: 1,
    initialVy: 0,
    color: "#0000ff", // dark green
    body: [],
    constructor() {
        // push head into body (sounds weird, doesn't it?)
        this.body.push(PointVector(this.initialX, this.initialY, this.initialVx, this.initialVy));
    },
    getHeadPos() {
        return {
            x: this.body[0].x, 
            y: this.body[0].y
        }
    },
    changeMovement(keyCode) {
        let head = this.body[0];
        if (keyCode == keys.left || keyCode == keys.right) {
            head.vy = 0;
            if (keyCode == keys.left) head.vx = -1;
            if (keyCode == keys.right) head.vx = 1;
        } else if (keyCode == keys.up || keyCode == keys.down) {
            head.vx = 0;
            if (keyCode == keys.up) head.vy = -1;
            if (keyCode == keys.down) head.vy = 1;
        }
    },
    renderMovement() {
        for (let i = 0; i < this.body.length; i++) {
            this.body[i].x += this.body[i].vx;
            this.body[i].y += this.body[i].vy;

            grid.fillSpace(this.body[i].x, this.body[i].y, this.color);
        }    

        this.propogateVelocities();
    },
    propogateVelocities() {
        let endOfTail = this.body.length - 1;
        console.log(endOfTail - 1)
        for (let i = endOfTail - 1; i >= 0; i--) {
            this.body[i + 1].vx = this.body[i].vx;
            this.body[i + 1].vy = this.body[i].vy;
        }
    },
    isHittingWall() {
        let hittingLeft = this.getHeadPos().x <= 0;
        let hittingRight = this.getHeadPos().x >= grid.numCols - 1;
        let hittingTop = this.getHeadPos().y <= 0;
        let hittingBottom = this.getHeadPos().y >= grid.numRows - 1;

        return hittingLeft || hittingRight || hittingTop || hittingBottom;
    },
    isTouchingFood() {
        let head = this.getHeadPos();
        return head.x == food.x && head.y == food.y;
    },
    getLonger() {
        if (this.body.length > 1) {
            let endOfTail = this.body[this.body.length - 1];
            let secondToLastTail = this.body[this.body.length - 2];
            let newTailPart = PointVector(endOfTail.x - secondToLastTail.vx, endOfTail.y - secondToLastTail.vy, endOfTail.vx, endOfTail.vy);

            this.body.push(newTailPart);
        } else {
            let endOfTail = this.body[this.body.length - 1];
            let newTailPart = PointVector(endOfTail.x - endOfTail.vx, endOfTail.y - endOfTail.vy, endOfTail.vx, endOfTail.vy);

            this.body.push(newTailPart);
        }

        this.propogateVelocities();
    }
}