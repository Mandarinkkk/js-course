"use strict";
function main() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    const lineCount = document.getElementById('lineCount').valueAsNumber;
    const side = document.getElementById('side').value;
    const startPoint = getStartingPoint(canvas.width, canvas.height, side);
    const lineColor = getRandomColor();
    for (let i = 0; i < lineCount; i++) {
        const endPoint = getRandomEndPoint(canvas.width, canvas.height, side);
        drawLine(context, startPoint.x, startPoint.y, endPoint.x, endPoint.y, lineColor);
    }
}
window.main = main;
//# sourceMappingURL=index.js.map