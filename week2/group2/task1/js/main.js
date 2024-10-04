const calculateSquareRoot = (number) => {
    if (isNaN(number) || number < 0) {
        return "Пожалуйста, введите положительное число.";
    }
    else {
    let guess = number / 2; // Начальное приближение
    let epsilon = 0.00001; // Точность
    let iterationCount = 0;
    
    while (Math.abs(guess * guess - number) > epsilon) {
        guess = (guess + number / guess) / 2; // Формула Герона
        iterationCount++;
    }

    return `Квадратный корень из ${number} равен примерно ${guess.toFixed(5)} (итераций: ${iterationCount}).`;
    }
};

const main = () => {
    let result = document.getElementById("result");
    let number = document.getElementById("number").value;
    result.innerHTML = calculateSquareRoot(number);
};

document.getElementById("calculate").addEventListener("click", main);

