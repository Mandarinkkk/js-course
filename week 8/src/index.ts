import { maxWater, checkNonNegativity, checkDataType } from './chart';
 
const main = () => { 
  let result = document.getElementById("result") as HTMLDivElement; 
  let inputData = (document.getElementById('heightInput') as HTMLInputElement).value.trim(); 

  if (!inputData) { 
      result.innerText = "Пожалуйста, введите высоты."; 
      return; 
  } 

  let heightsString = inputData.split(',');
  if (!checkDataType(heightsString)) {
    result.innerText = "Проверьте формат данных. Все значения должны быть числами.";
    return;
  }

  let heights = heightsString.map(Number); 

  if (!checkNonNegativity(heights)) {
    result.innerText = "Проверьте неотрицательность чисел. Все значения должны быть неотрицательными.";
    return;
  }

  let volume = maxWater(heights); 

  result.innerText = "Максимальный объем воды: " + volume;
  

}; 
 
document.getElementById("calculateMaxArea")!.addEventListener("click", main);