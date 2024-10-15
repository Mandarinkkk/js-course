const countStringInString = (searchString, inputStrings) => {

    let count = 0;

    inputStrings.forEach((substring) => {
        let startIndex = 0;
        while ((startIndex = substring.indexOf(searchString, startIndex)) !== -1) {
            count++;
            startIndex++; // Увеличиваем индекс для поиска следующего вхождения
        }
    });

    return count;


};
