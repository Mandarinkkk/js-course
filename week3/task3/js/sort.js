function sortData(sensorAverages, sortBy) {    
    if (sortBy === 'id') {
            return sensorAverages.sort((a, b) => parseInt(a[0]) - parseInt(b[0]));    
            } 
            else if (sortBy === 'temperature') {
            return sensorAverages.sort((a, b) => a[1] - b[1]);    
            }
    return sensorAverages;
    }
