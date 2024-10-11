function calculateShannonEntropy(data) {
    const frequency = {};
    const length = data.length;

    for (const char of data) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    let entropy = 0;

    for (const char in frequency) {
        const probability = frequency[char] / length;
        entropy -= probability * Math.log2(probability);
    }

    return entropy.toFixed(2);
}


const main = () => {
    let result = document.getElementById("result");
    let inputData = document.getElementById('inputData').value.trim();
    if (!inputData) {
        result.innerText = "Пожалуйста, введите строку.";
    }
    let entropy = calculateShannonEntropy(inputData);
    result.innerText = "Энтропия: " +entropy;
};

document.getElementById("calculateBtn").addEventListener("click", main);