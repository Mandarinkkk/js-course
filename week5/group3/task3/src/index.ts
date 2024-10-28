function isValidBrackets(s: string): boolean { 
    const stack: string[] = []; 
    const pairs: Record<string, string> = { 
        ')': '(', 
        ']': '[', 
        '}': '{' 
    }; 
 
    for (const char of s) { 
        if (['(', '[', '{'].includes(char)) { 
            stack.push(char); 
        } else if (stack.pop() !== pairs[char]) { 
            return false; 
        } 
    } 
 
    return stack.length === 0; 
} 

function containsOnlyBrackets(s: string): boolean {
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char !== '(' && char !== ')' && char !== '[' && char !== ']' && char !== '{' && char !== '}') {
            return false;
        }
    }
    return true;
}

const main = () => { 
    const result = document.getElementById("result") as HTMLElement; 
    const inputData = (document.getElementById("brackets") as HTMLInputElement).value.trim(); 
 
    if (!inputData) { 
        result.innerText = "Пожалуйста, введите строку со скобками."; 
        return; 
    } 

    if (!containsOnlyBrackets(inputData)) {
        result.innerText = "Строка должна содержать только скобки.";
        return;
    }
 
    const isValid = isValidBrackets(inputData); 
    result.innerText = isValid ? "Строка валидна" : "Строка не валидна"; 
}; 
 
document.getElementById("validateBrackets")!.addEventListener("click", main);
