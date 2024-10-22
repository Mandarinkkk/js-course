"use strict";
function drawRectangle(context, x, y, width, height, fillColor) {
    context.fillStyle = fillColor;
    context.fillRect(x, y, width, height);
    context.strokeStyle = 'black';
    context.strokeRect(x, y, width, height);
}
window.drawRectangle = drawRectangle;
//# sourceMappingURL=draw.js.map