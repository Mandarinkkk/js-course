function main(): void {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;    
    const context = canvas.getContext('2d') as CanvasRenderingContext2D;
    context.clearRect(0, 0, canvas.width, canvas.height);
    const rectCount = (document.getElementById('rectCount') as HTMLInputElement).valueAsNumber;
        
      for (let i = 0; i < rectCount; i++) {
        const params = getRectangleParams(canvas.width, canvas.height);        
        drawRectangle(context, params.x, params.y, params.width, params.height, params.color);
    }
}
(window as any).main = main;
