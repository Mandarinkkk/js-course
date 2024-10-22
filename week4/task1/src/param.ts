function getLineParams(canvasWidth: number, canvasHeight: number): 
{ x1: number, y1: number, x2: number, y2: number, color: string } {
    const x1 = Math.floor(Math.random() * canvasWidth);
    const y1 = Math.floor(Math.random() * canvasHeight);   
    const x2 = Math.floor(Math.random() * canvasWidth);
    const y2 = Math.floor(Math.random() * canvasHeight);   
    const color = getRandomColor();
    return { x1, y1, x2, y2, color };
}

(window as any).getLineParams = getLineParams;