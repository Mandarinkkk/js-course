 function processLanguages(data: string[][]): { common: string[], all: string[] } { 
    let allLanguages = new Set<string>(); 
    let commonLanguages = new Set(data[0]); 
 
    data.forEach(languages => { 
        allLanguages = new Set([...allLanguages, ...languages]); 
        commonLanguages = new Set([...commonLanguages].filter(lang => languages.includes(lang))); 
    }); 
 
    return { 
        common: [...commonLanguages].sort(), 
        all: [...allLanguages].sort() 
    }; 
} 
 
function validateInput(inputData: string[]): { valid: boolean, error?: string, data?: string[][] } { 
    const numStudents = parseInt(inputData[0]); 
    if (isNaN(numStudents) || numStudents < 1) { 
        return { valid: false, error: "Первая строка должна содержать количество школьников (целое число больше нуля)." }; 
    } 
 
    const languagesData: string[][] = []; 
    let index = 1;
 
    for (let i = 0; i < numStudents; i++) { 
        if (index >= inputData.length) { 
            return { valid: false, error: "Неполные данные для всех школьников." }; 
        } 
 
        const numLanguages = parseInt(inputData[index]);
        if (isNaN(numLanguages) || numLanguages < 0) { 
            return { valid: false, error: `Неверное количество языков для школьника ${i + 1}. `}; 
        } 
 
        const studentLanguages = inputData.slice(index + 1, index + 1 + numLanguages); 
        if (studentLanguages.length !== numLanguages) { 
            return { valid: false, error: `Несоответствие количества языков для школьника ${i + 1}.`}; 
        }

        const languageRegex = /^[A-Za-zА-Яа-яЁё]+$/;
        for (const language of studentLanguages) {
            if (!languageRegex.test(language)) {
                return { valid: false, error: `Язык "${language}" для школьника ${i + 1} содержит недопустимые символы. \nЕсли это количество языков следующего ученика, то количество введенных языков не совпадает с изначальным числом.`};
            }
        }
 
        languagesData.push(studentLanguages); 
        index += numLanguages + 1; 
    } 
 
    return { valid: true, data: languagesData }; 
} 
 
const main = () => { 
    const result = document.getElementById("result") as HTMLElement; 
    const inputData = (document.getElementById("languages") as HTMLTextAreaElement).value.trim().split('\n'); 
 
    if (!inputData.length) { 
        result.innerText = "Пожалуйста, введите данные по школьникам."; 
        return; 
    } 
 
    const validationResult = validateInput(inputData); 
    if (!validationResult.valid) { 
        result.innerText = validationResult.error!; 
        return; 
    } 
 
    const { common, all } = processLanguages(validationResult.data!); 
 
    result.innerHTML = `Общие языки:<br>${common.length}<br>${common.join('<br>')}<br><br>Все языки:<br>${all.length}<br>${all.join('<br>')}`; 
}; 

document.getElementById("findLanguages")!.addEventListener("click", main);