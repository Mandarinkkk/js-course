const daysInMonth = (month, year) => {
    if (month < 1 || month > 12) {
        alert('Некорректный номер месяца');
        return;
    }
    else if (month == 2) {
        return isLeapYear(year) ? 29 : 28; // Февраль
    }
    else if ([4, 6, 9, 11].includes(month)) {
        return 30; // Апрель, Июнь, Сентябрь, Ноябрь
    }
    else {
        return 31; // Январь, Март, Май, Июль, Август, Октябрь, Декабрь
    }

    return;
};

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const main = () => {
    let result = document.getElementById("result");
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    let days = daysInMonth(month, year)
    result.innerText = "В " + month + " месяце " + year + " года "+ days + " дней.";
};

document.getElementById("calculate").addEventListener("click", main);


