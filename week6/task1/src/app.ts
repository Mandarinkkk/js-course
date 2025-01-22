function findMostFrequentCharacter(inputString: string): [string, number] {
  const frequencyMap: { [key: string]: number } = {};

  // Count the frequency of each character in the string
  for (let char of inputString) {
      frequencyMap[char] = (frequencyMap[char] || 0) + 1;
  }

  // Find the character with the maximum frequency
  let mostFrequentChar: string = '';
  let maxCount: number = 0;

  for (let char in frequencyMap) {
      if (frequencyMap[char] > maxCount) {
          mostFrequentChar = char;
          maxCount = frequencyMap[char];
      }
  }

  return [mostFrequentChar, maxCount];
}

function main(): void {
  const inputString: string = (document.getElementById('inputString') as HTMLInputElement).value;
  const [char, count] = findMostFrequentCharacter(inputString);

  const resultElement = document.getElementById('result')!;
  resultElement.textContent = `Most frequent character: '${char}', Count: ${count}`;
}

// Attach event listener to the button
document.getElementById('findButton')!.addEventListener('click', main);
