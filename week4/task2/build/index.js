"use strict";
function main() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    const rectCount = document.getElementById('rectCount').valueAsNumber;
    for (let i = 0; i < rectCount; i++) {
        const params = getRectangleParams(canvas.width, canvas.height);
        drawRectangle(context, params.x, params.y, params.width, params.height, params.color);
    }
}
window.main = main;
//# sourceMappingURL=index.js.map