function removeDuplicates(array: string[]): string[] {
    return [...new Set(array)];}
const main = () => {    
    const result = document.getElementById("result") as HTMLElement;
    const inputData = (document.getElementById("array") as HTMLInputElement).value.trim();
    if (!inputData) {        
        result.innerText = "Пожалуйста, введите данные массива.";
        return;    
    }
    const array = inputData.split(',').map(item => item.trim());
    const uniqueArray = removeDuplicates(array);
    result.innerText = "Массив без дубликатов: " + uniqueArray.join(', ');};
document.getElementById("removeDuplicates")!.addEventListener("click", main);