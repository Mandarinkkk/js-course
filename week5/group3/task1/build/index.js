"use strict";
function removeDuplicates(array) {
    return [...new Set(array)];
}
const main = () => {
    const result = document.getElementById("result");
    const inputData = document.getElementById("array").value.trim();
    if (!inputData) {
        result.innerText = "Пожалуйста, введите данные массива.";
        return;
    }
    const array = inputData.split(',').map(item => item.trim());
    const uniqueArray = removeDuplicates(array);
    result.innerText = "Массив без дубликатов: " + uniqueArray.join(', ');
};
document.getElementById("removeDuplicates").addEventListener("click", main);
//# sourceMappingURL=index.js.map