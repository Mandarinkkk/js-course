const calculateSquareRoot = (number) => {
    if (isNaN(number) || number < 0) {
        alert("Пожалуйста, введите положительное число.");
        return ;
    }
    
    let guess = number / 2; // Начальное приближение
    let epsilon = 0.00001; // Точность
    let iterationCount = 0;
    
    while (Math.abs(guess * guess - number) > epsilon) {
        guess = (guess + number / guess) / 2; // Формула Герона
        iterationCount++;
    }

    return {guess: guess, iterationCount: iterationCount};

};

const main = () => {
    let result = document.getElementById("result");
    let number = document.getElementById("number").value;
    let root = calculateSquareRoot(number);
    result.innerText = "Квадратный корень из " + number + " равен примерно " + root.guess.toFixed(5) + " итераций: " + root.iterationCount;
};

document.getElementById("calculate").addEventListener("click", main);

