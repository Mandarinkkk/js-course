"use strict";
function main() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    const lineCount = document.getElementById('lineCount').valueAsNumber;
    for (let i = 0; i < lineCount; i++) {
        const params = getLineParams(canvas.width, canvas.height);
        drawLine(context, params.x1, params.y1, params.x2, params.y2, params.color);
    }
}
window.main = main;
//# sourceMappingURL=index.js.map