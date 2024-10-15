const test = (sensorData) => {
    let errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
    
    if (sensorData.length === 0) {
        errorMessage.textContent = 'Ошибка: Введите данные!';
        return;
    }
    if (sensorData.length > 512) {
        errorMessage.textContent = 'Ошибка: Введенная строка превышает 512 символов!';
        return;
    }

    if ((!sensorData.includes('@')) && (sensorData.length > 5)) {
        errorMessage.textContent = 'Ошибка: В строке отсутствуют символы "@" для разделения показаний.';
        return;
    }

    const sensorEntries = sensorData.split('@');
    const sensorMap = {};
    for (let entry of sensorEntries) {        
    const match = entry.match(/^(\d{2})(-?\d{1,2})$/);
        if (!match) {            
        errorMessage.textContent += "Ошибка в формате записи: " + entry + " ";
            continue;        }
        const id = match[1];
        const temp = parseInt(match[2], 10);       
        if (temp < -50 || temp > 50) {
            errorMessage.textContent += "Ошибка: Температура " + temp + " для датчика " + id + " вне допустимого диапазона (-50 до 50).   ";
            continue;
        }

        const invalidChars = /[^0-9@\-]/;
        if (invalidChars.test(entry)) {
            errorMessage.textContent += 'Ошибка: Строка содержит недопустимые символы. Разрешены только цифры, символ "-" и "@". ';
            continue;
        }
        
        if (!sensorMap[id]) {
            sensorMap[id] = [];
        }        
        sensorMap[id].push(temp);
    } 
    if (Object.keys(sensorMap).length === 0) {
        errorMessage.textContent += 'Ошибка: Нет валидных данных для обработки. ';        
        return;
    }

    return sensorMap;

    };