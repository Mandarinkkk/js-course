const countMaxNumbers = (input) => {
    
    // Преобразование строки в массив чисел
    numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    
    if (numbers.length === 0) {
        alert = ("Пожалуйста, введите корректные числа.");
        return ;
    }
    maxNumber = Math.max(...numbers); // Находим максимальное число
    count = numbers.filter(num => num === maxNumber).length; // Подсчитываем количество максимальных чисел

    return {maxNumber: maxNumber, count: count};
}

const main = () => {
    let result = document.getElementById("result");
    let input = document.getElementById("numbers").value;
    let cmn = countMaxNumbers(input);
    result.innerText = "Количество чисел, равных максимальному " + maxNumber + ": " + count;
};

document.getElementById("countMaxNumbers").addEventListener("click", main);
