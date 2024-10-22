"use strict";
function getLineParams(canvasWidth, canvasHeight) {
    const x1 = Math.floor(Math.random() * canvasWidth);
    const y1 = Math.floor(Math.random() * canvasHeight);
    const x2 = Math.floor(Math.random() * canvasWidth);
    const y2 = Math.floor(Math.random() * canvasHeight);
    const color = getRandomColor();
    return { x1, y1, x2, y2, color };
}
window.getLineParams = getLineParams;
//# sourceMappingURL=param.js.map