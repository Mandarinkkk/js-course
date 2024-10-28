function getPermutations<T>(arr: Array<T>): Array<Array<T>> { 
  if (arr.length <= 1) return [arr]; 
  let result: Array<Array<T>> = []; 

  arr.forEach((item, index) => { 
      let remainingItems = [...arr.slice(0, index), ...arr.slice(index + 1)]; 
      let perms = getPermutations(remainingItems); 

      perms.forEach(perm => result.push([item, ...perm])); 
  }); 

  return result; 
} 

function checkDataFormat(input: string[]): boolean {
  return input.every(item => !isNaN(Number(item)));
}
 
const main = () => { 
  let result = document.getElementById("result") as HTMLDivElement; 
  let inputData = (document.getElementById('arrayInput') as HTMLInputElement).value.trim(); 

  if (!inputData) { 
      result.innerText = "Пожалуйста, введите массив чисел."; 
      return; 
  } 

  let arrayString = inputData.split(',');
  if (!checkDataFormat(arrayString)) {
    result.innerText = "Проверьте формат данных. Все значения должны быть числами.";
    return;
  }

  let array = arrayString.map(Number); 
  let permutations = getPermutations(array); 

  result.innerText = "Все перестановки: " + JSON.stringify(permutations); 
}; 
 
document.getElementById("calculatePerms")!.addEventListener("click", main);