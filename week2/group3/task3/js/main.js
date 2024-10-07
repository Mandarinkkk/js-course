const sortNumbers = (input) => {

    // Преобразование строки в массив чисел
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbers.length === 0) {
        alert("Пожалуйста, введите корректные числа.");
        return ;
    }

    const sortedNumbers = mergeSort(numbers);
    
    return sortedNumbers.join(', ');

};

const main = () => {
    let result = document.getElementById("result");
    let input = document.getElementById("numbers").value;
    let sorted = sortNumbers(input)
    result.innerText = "Отсортированные числа: " + sorted;
};

document.getElementById("sortNumbers").addEventListener("click", main);

