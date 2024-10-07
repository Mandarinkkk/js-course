const findPrimes = (number) => {
    number = Number(number); // Преобразуем входное значение в число

    if (isNaN(number) || number <= 1) {
        alert("Пожалуйста, введите целое число больше 1.");
        return;
    } 
    
    let primes = ""; // Строка для хранения найденных простых чисел

    for (let i = 2; i <= number; i++) {
        if (isPrime(i)) {
            primes += i + ", "; // Добавляем простое число к строке
        }
    }

    // Удаляем последнюю запятую и пробел
    if (primes.length > 0) {
        primes = primes.slice(0, -2);
    }

    return primes;
    
};

const isPrime = (num) => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            return false; // Число составное
        }
    }
    return true; // Число простое
};

const main = () => {
    let result = document.getElementById("result");
    let number = document.getElementById("number").value;
    let prime = findPrimes(number);
    result.innerText = "Простые числа до " + number + " : " + prime;
};

document.getElementById("findPrime").addEventListener("click", main);

