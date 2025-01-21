export function maxWater(height: Array<number>): number { 
    let left = 0; 
    let right = height.length - 1; 
    let maxVolume = 0; 
  
    while (left < right) { 
        let width = right - left; 
        let minHeight = Math.min(height[left], height[right]); 
        maxVolume = Math.max(maxVolume, width * minHeight); 
        height[left] < height[right] ? left++ : right--; 
    } 
  
    return maxVolume; 
  } 
  
export function checkNonNegativity(heights: number[]): boolean {
    return heights.every(height => height >= 0);
  }
  
export  function checkDataType(heights: string[]): boolean {
    return heights.every(height => !isNaN(Number(height)));
  }