"use strict";
function getStartingPoint(canvasWidth, canvasHeight, side) {
    switch (side) {
        case 'top':
            return { x: canvasWidth / 2, y: 0 };
        case 'right':
            return { x: canvasWidth, y: canvasHeight / 2 };
        case 'bottom':
            return { x: canvasWidth / 2, y: canvasHeight };
        case 'left':
            return { x: 0, y: canvasHeight / 2 };
        default:
            throw new Error('Invalid side');
    }
}
window.getStartingPoint = getStartingPoint;
//# sourceMappingURL=point.js.map