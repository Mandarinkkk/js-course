const findPrimes = (number) => {
    number = Number(number); // Преобразуем входное значение в число

    if (isNaN(number) || number <= 1) {
        return "Пожалуйста, введите целое число больше 1.";
    } else {
        const primes = sieveOfEratosthenes(number); // Объявляем переменную с помощью const

        return `Простые числа до ${number}: ${primes.join(', ')}`; // Используем шаблонные строки
    }
};

function sieveOfEratosthenes(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 и 1 не являются простыми числами

    for (let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false; // Убираем составные числа
            }
        }
    }

    return isPrime.map((prime, index) => prime ? index : null).filter(Number.isInteger);
}

const main = () => {
    let result = document.getElementById("result");
    let number = document.getElementById("number").value;
    result.innerHTML = findPrimes(number);
};

document.getElementById("findPrime").addEventListener("click", main);
