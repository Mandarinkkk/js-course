"use strict";
function getPermutations(arr) {
    if (arr.length <= 1)
        return [arr];
    let result = [];
    arr.forEach((item, index) => {
        let remainingItems = [...arr.slice(0, index), ...arr.slice(index + 1)];
        let perms = getPermutations(remainingItems);
        perms.forEach(perm => result.push([item, ...perm]));
    });
    return result;
}
function checkDataFormat(input) {
    return input.every(item => !isNaN(Number(item)));
}
const main = () => {
    let result = document.getElementById("result");
    let inputData = document.getElementById('arrayInput').value.trim();
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
document.getElementById("calculatePerms").addEventListener("click", main);
//# sourceMappingURL=index.js.map