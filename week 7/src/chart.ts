function drawChart(data: number[]): void {    
    const existingCanvas = document.getElementById('chart') as HTMLCanvasElement | null;    if (existingCanvas) existingCanvas.remove();
    const canvas = document.createElement('canvas');
    canvas.id = 'chart';    canvas.width = 800; 
    canvas.height = 400;    
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) {        console.error("Не удалось получить контекст 2D рисования.");
        return;    }
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const maxDataValue = Math.max(...data);     
    const barWidth = canvasWidth / data.length * 0.8;
    const gapWidth = canvasWidth / data.length * 0.2;    
    ctx.beginPath();
    ctx.moveTo(40, canvasHeight - 20);
    ctx.lineTo(40, 20);    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;    ctx.stroke();
    ctx.beginPath();    
    ctx.moveTo(40, canvasHeight - 20);
    ctx.lineTo(canvasWidth - 20, canvasHeight - 20);    
    ctx.stroke();
    data.forEach((value, index) => {        
        const x = 40 + index * (barWidth + gapWidth);
        const barHeight = (value / maxDataValue) * (canvasHeight - 40);
        ctx.fillStyle = 'blue';        
        ctx.fillRect(x, canvasHeight - barHeight - 20, barWidth, barHeight);
        ctx.fillStyle = 'black';        
        ctx.textAlign = 'center';
        ctx.fillText(value.toString(), x + barWidth / 2, canvasHeight - barHeight - 25);    });
    const yLabelStep = Math.ceil(maxDataValue / 5);    
    for (let i = 0; i <= maxDataValue; i += yLabelStep) {
        const y = canvasHeight - 20 - (i / maxDataValue) * (canvasHeight - 40);        
        ctx.fillStyle = 'black';
        ctx.textAlign = 'right';        
        ctx.fillText(i.toString(), 35, y);
    }}
