function maxProfit(prices: Array<number>): number { 
  let minPrice = Infinity; 
  let maxProfit = 0; 

  for (const price of prices) { 
      if (price < minPrice) minPrice = price; 
      else if (price - minPrice > maxProfit) maxProfit = price - minPrice;
  } 

  return maxProfit; 
} 

function checkNonNegativity(prices: number[]): boolean {
  return prices.every(price => price >= 0);
}

function checkDataType(prices: string[]): boolean {
  return prices.every(price => !isNaN(Number(price)));
}
 
const main = () => { 
  let result = document.getElementById("result") as HTMLDivElement; 
  let inputData = (document.getElementById('pricesInput') as HTMLInputElement).value.trim(); 

  if (!inputData) { 
      result.innerText = "Пожалуйста, введите цены акций.";  
      return; 
  } 

  let pricesString = inputData.split(',');
  if (!checkDataType(pricesString)) {
    result.innerText = "Проверьте формат данных. Все значения должны быть числами.";
    return;
  }

  let prices = pricesString.map(Number); 

  if (!checkNonNegativity(prices)) {
    result.innerText = "Проверьте неотрицательность цен. Все значения должны быть неотрицательными.";
    return;
  }

  let profit = maxProfit(prices); 

  result.innerText = "Максимальная прибыль: " + profit; 
}; 
 
document.getElementById("calculateMaxProfit")!.addEventListener("click", main);