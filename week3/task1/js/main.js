const main = () => {
    let result = document.getElementById("result");
    let searchString = document.getElementById('searchString').value.trim();
    let inputStrings = document.getElementById('inputStrings').value.trim().split('\n');
    if (!searchString) {
        result.innerText = "Пожалуйста, введите строку для поиска.";
    }
    let countString = countStringInString(searchString, inputStrings)
    result.innerText = 'Количество вхождений:' + countString;
};

document.getElementById("calculateBtn").addEventListener("click", main);
