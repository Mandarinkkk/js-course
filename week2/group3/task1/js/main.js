const countMaxNumbers = (input) => {
    
    // Преобразование строки в массив чисел
    numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    
    if (numbers.length === 0) {
        return "Пожалуйста, введите корректные числа.";
    }
    else {
    maxNumber = Math.max(...numbers); // Находим максимальное число
    count = numbers.filter(num => num === maxNumber).length; // Подсчитываем количество максимальных чисел

    return "Количество чисел, равных максимальному", maxNumber, ":", count;
    }
}

const main = () => {
    let result = document.getElementById("result");
    let input = document.getElementById("numbers").value;
    result.innerHTML = countMaxNumbers(input);
};

document.getElementById("countMaxNumbers").addEventListener("click", main);
