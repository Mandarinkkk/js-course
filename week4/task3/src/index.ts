function main(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;    
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.clearRect(0, 0, canvas.width, canvas.height);
    const lineCount = (document.getElementById('lineCount') as HTMLInputElement).valueAsNumber;    
    const side = (document.getElementById('side') as HTMLSelectElement).value;
    
    const startPoint = getStartingPoint(canvas.width, canvas.height, side);
    const lineColor = getRandomColor();
    for (let i = 0; i < lineCount; i++) {        
      const endPoint = getRandomEndPoint(canvas.width, canvas.height, side);
      drawLine(context, startPoint.x, startPoint.y, endPoint.x, endPoint.y, lineColor);    }
}

(window as any).main = main