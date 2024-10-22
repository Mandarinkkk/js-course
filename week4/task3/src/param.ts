function getRandomEndPoint(    
    canvasWidth: number, 
    canvasHeight: number,     
    excludedSide: string
): { x: number, y: number } {    
    const sides = ['top', 'right', 'bottom', 'left'].filter(side => side !== excludedSide);
    const randomSide = sides[Math.floor(Math.random() * sides.length)];
    switch (randomSide) {        
        case 'top':
            return { x: Math.floor(Math.random() * canvasWidth), y: 0 };        
            case 'right':
            return { x: canvasWidth, y: Math.floor(Math.random() * canvasHeight) };        
            case 'bottom':
            return { x: Math.floor(Math.random() * canvasWidth), y: canvasHeight };        
            case 'left':
            return { x: 0, y: Math.floor(Math.random() * canvasHeight) };        
            default:
            throw new Error('Invalid side');    
        }
}

(window as any).getRandomEndPoint = getRandomEndPoint