function main(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;    
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.clearRect(0, 0, canvas.width, canvas.height);
    const lineCount = (document.getElementById('lineCount') as HTMLInputElement).valueAsNumber;
    
    for (let i = 0; i < lineCount; i++) {
      const params = getLineParams(canvas.width, canvas.height);        
      drawLine(context, params.x1, params.y1, params.x2, params.y2, params.color);
    }
}


(window as any).main = main;