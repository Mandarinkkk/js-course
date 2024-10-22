"use strict";
function drawLine(context, x1, y1, x2, y2, strokeColor) {
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.strokeStyle = strokeColor;
    context.stroke();
}
window.drawLine = drawLine;
//# sourceMappingURL=draw.js.map