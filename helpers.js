// min [inclusive], max [inclusive]
function getRandInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// PointVectors are used because as snake tail gets longer,
// the tail needs to follow the path of the tail in front of it one move ago
function PointVector(x, y, vx, vy) {
    return {
        x: x,
        y: y,
        vx: vx,
        vy: vy
    }
}