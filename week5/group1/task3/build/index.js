"use strict";
function maxWater(height) {
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
function checkNonNegativity(heights) {
    return heights.every(height => height >= 0);
}
function checkDataType(heights) {
    return heights.every(height => !isNaN(Number(height)));
}
const main = () => {
    let result = document.getElementById("result");
    let inputData = document.getElementById('heightInput').value.trim();
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
    drawChart(heights);
};
document.getElementById("calculateMaxArea").addEventListener("click", main);
//# sourceMappingURL=index.js.map