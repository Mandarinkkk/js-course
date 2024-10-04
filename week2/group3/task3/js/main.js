function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const sortNumbers = (input) => {

    // Преобразование строки в массив чисел
    const numbers = input.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));

    if (numbers.length === 0) {
     
        return "Пожалуйста, введите корректные числа.";
    }
    else {
    const sortedNumbers = mergeSort(numbers);
    
    return "Отсортированные числа: ", sortedNumbers.join(', ');
    }
};

const main = () => {
    let result = document.getElementById("result");
    let input = document.getElementById("numbers").value;
    result.innerHTML = sortNumbers(input);
};

document.getElementById("sortNumbers").addEventListener("click", main);

