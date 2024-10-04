const daysInMonth = (month, year) => {
    if (month < 1 || month > 12) {
        return 'Некорректный номер месяца';
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

    return `В ${month} месяце ${year} года ${daysInMonth} дней.`;
};

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const main = () => {
    let result = document.getElementById("result");
    let month = document.getElementById('month').value;
    let year = document.getElementById('year').value;
    result.innerHTML = daysInMonth(month, year);
};

document.getElementById("calculate").addEventListener("click", main);


