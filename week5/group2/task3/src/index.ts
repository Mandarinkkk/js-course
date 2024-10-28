function fibonacci(n: number): number { 
    if (n <= 1) return n; 
    return fibonacci(n - 1) + fibonacci(n - 2); 
} 
 
const fibonacciMemoized = (() => { 
    const cache: Map<number, number> = new Map(); 
    return function fib(n: number): number { 
        if (n <= 1) return n; 
        if (cache.has(n)) return cache.get(n)!; 

        const result = fib(n - 1) + fib(n - 2); 
        cache.set(n, result); 
        return result; 
    }; 
})(); 
 
const main = () => { 
    const result = document.getElementById("result") as HTMLElement; 
    const inputNumber = parseInt((document.getElementById("fibonacciNumber") as HTMLInputElement).value.trim()); 
 
    if (isNaN(inputNumber) || inputNumber < 0) { 
        result.innerText = "Пожалуйста, введите положительное целое число."; 
        return; 
    } 

    const startRegular = performance.now();
    const regularFib = fibonacci(inputNumber);
    const endRegular = performance.now();
    const regularTime = endRegular - startRegular;

    const startMemoized = performance.now();
    const memoizedFib = fibonacciMemoized(inputNumber);
    const endMemoized = performance.now();
    const memoizedTime = endMemoized - startMemoized;

    result.innerHTML = 
        `Обычное вычисление: ${regularFib} (Время: ${regularTime.toFixed(7)} мс)<br>
        Оптимизированное вычисление: ${memoizedFib} (Время: ${memoizedTime.toFixed(7)} мс)`
    ; 
}; 
 
document.getElementById("calculateFibonacci")!.addEventListener("click", main);
