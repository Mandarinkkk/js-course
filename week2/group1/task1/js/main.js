const age = (ageInput) => {
    if (isNaN(ageInput) || ageInput < 0) {
    return "Пожалуйста, введите корректный возраст.";
    }
    else {
    let ageString;
    // оператор switch для определения правильного склонения
    switch (ageInput % 10) {
        case 1:
            if (ageInput % 100 !== 11) {
                ageString = `${ageInput} год`;
            } else {
                ageString = `${ageInput} лет`;
            }
            break;
        case 2:
        case 3:
        case 4:
            if (ageInput % 100 !== 12 && ageInput % 100 !== 13 && ageInput % 100 !== 14) {
                ageString = `${ageInput} года`;
            } else {
                ageString = `${ageInput} лет`;
            }
            break;
        default:
            ageString = `${ageInput} лет`;
            break;
    }

    return ageInput, ageString;
    }
};

const main = () => {
    let result = document.getElementById("result");
    let ageInput = document.getElementById("ageInput").value;
    result.innerHTML = age(ageInput);
};

document.getElementById("check").addEventListener("click", main);

