const calculateMedian = (input) => {

    // Преобразование строки в массив чисел
    numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbers.length === 0) {
        alert = ("Пожалуйста, введите корректные числа.");
        return ;
    }
    else {
    // Сортируем массив
    numbers.sort((a, b) => a - b);

    mid = Math.floor(numbers.length / 2);
    
    let median;
    if (numbers.length % 2 === 0) {
        // Если чётное количество элементов
        median = (numbers[mid - 1] + numbers[mid]) / 2;
    } else {
        // Если нечётное количество элементов
        median = numbers[mid];
    }

    return "Медиана", median;
    }
};

const main = () => {
    let result = document.getElementById("result");
    let input = document.getElementById("numbers").value;
    let mid = calculateMedian(input)
    result.innerText = "Медиана " + mid;
};

document.getElementById("calculateMedian").addEventListener("click", main);

