function validateDictionaryData(data: string[], n: number): boolean { 
    const regex = /^[a-z]+ - ([a-z]+, )*[a-z]+$/; 
    return data.length === n && data.every(line => regex.test(line)); 
} 
 
function createLatinDictionary(data: string[]): Map<string, string[]> { 
    const latinToEnglish = new Map<string, Set<string>>(); 
 
    data.forEach(line => { 
        const [englishWord, latinWords] = line.split(' - '); 
        const latinList = latinWords.split(', '); 
 
        latinList.forEach(latinWord => { 
            if (!latinToEnglish.has(latinWord)) { 
                latinToEnglish.set(latinWord, new Set()); 
            } 
            latinToEnglish.get(latinWord)!.add(englishWord); 
        }); 
    }); 
 
    const sortedLatinToEnglish = new Map<string, string[]>(); 
    Array.from(latinToEnglish.keys()) 
        .sort() 
        .forEach(latinWord => { 
            const sortedEnglishWords = Array.from(latinToEnglish.get(latinWord)!).sort(); 
            sortedLatinToEnglish.set(latinWord, sortedEnglishWords); 
        }); 
 
    return sortedLatinToEnglish; 
} 
 
const main = () => { 
    const result = document.getElementById("result") as HTMLElement; 
    const inputData = (document.getElementById("dictionary") as HTMLTextAreaElement).value.trim().split('\n'); 
 
    const n = parseInt(inputData[0]); 
    const data = inputData.slice(1); 
 
    if (!validateDictionaryData(data, n)) { 
        result.innerText = "Некорректный формат данных. Убедитесь, что строки соответствуют требованиям."; 
        return; 
    } 
 
    const latinDictionary = createLatinDictionary(data); 
 
    let output = `${latinDictionary.size}\n`; 
    latinDictionary.forEach((englishWords, latinWord) => { 
        output += `${latinWord} - ${englishWords.join(', ')}\n`; 
    }); 
    result.innerText = output.trim(); 
}; 
 
document.getElementById("convertDictionary")!.addEventListener("click", main);