"use strict";
function getRectangleParams(canvasWidth, canvasHeight) {
    const width = Math.floor(Math.random() * 100) + 20;
    const height = Math.floor(Math.random() * 100) + 20;
    const x = Math.floor(Math.random() * (canvasWidth - width));
    const y = Math.floor(Math.random() * (canvasHeight - height));
    const color = getRandomColor();
    console.log(`gnrtd clr ${color}`);
    return { x, y, width, height, color };
}
window.getRectangleParams = getRectangleParams;
//# sourceMappingURL=param.js.map