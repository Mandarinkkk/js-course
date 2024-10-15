function calculateAverage(sensorMap) {    
    const averages = [];
        for (const id in sensorMap) {
            const temperatures = sensorMap[id];        
            const sum = temperatures.reduce((acc, temp) => acc + temp, 0);
            const avg = sum / temperatures.length;        
            averages.push([id, avg]);
        }
    return averages;
    }