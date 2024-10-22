function drawLine(    context: CanvasRenderingContext2D,
    x1: number,    
    y1: number,
    x2: number,    
    y2: number,
    strokeColor: string): void {
    context.beginPath();    
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);    
    context.strokeStyle = strokeColor;
    context.stroke();}

(window as any).drawLine = drawLine;