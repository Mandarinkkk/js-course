function drawRectangle(    
    context: CanvasRenderingContext2D,
    x: number,    
    y: number,
    width: number,    
    height: number,
    fillColor: string
): void {
    context.fillStyle = fillColor;    
    context.fillRect(x, y, width, height);

    context.strokeStyle = 'black';
    context.strokeRect(x, y, width, height);
    }

(window as any).drawRectangle = drawRectangle;