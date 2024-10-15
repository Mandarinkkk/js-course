const main = () => {    let result = document.getElementById("result");
    let sensorData = document.getElementById('sensorData').value;    
    let testData = test(sensorData);
    let sortBy = document.getElementById('sortBy').value;    
    result.innerText = '';    
    if (testData) {
        result.innerText = 'Данные прошли проверку.\n';       
        const sensorAverages = calculateAverage(testData);
        const sortedSensors = sortData(sensorAverages, sortBy);        
        sortedSensors.forEach(([id, avgTemp]) => {
            result.innerText += `${id}  ${avgTemp.toFixed(1)}\n`;       
            });
    } 
    else {        
        result.innerText = 'Ошибка при обработке данных.';
    }
};
document.getElementById('calculateButton').addEventListener('click', main);