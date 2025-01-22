import * as fs from 'fs';
import * as path from 'path';

const searchFiles = (dir: string, searchTerm: string) => {
  // Рекурсивно ищем файлы в директории
  const searchInDirectory = (directory: string) => {
    // Чтение содержимого директории
    const files = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        // Если это директория, рекурсивно ищем в ней
        searchInDirectory(filePath);
      } else {
        // Ищем по названию
        if (file.toLowerCase().includes(searchTerm.toLowerCase())) {
          console.log(`Найден файл по названию: ${filePath}`);
        }

        // Если это текстовый файл, ищем по содержимому
        if (file.endsWith('.txt')) {
          searchInFile(filePath, searchTerm);
        }
      }
    }
  };

  // Чтение содержимого текстового файла
  const searchInFile = (filePath: string, searchTerm: string) => {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    if (fileContent.toLowerCase().includes(searchTerm.toLowerCase())) {
      console.log(`Найдено совпадение в файле: ${filePath}`);
    }
  };

  searchInDirectory(dir);
};

// Пример использования
const directoryPath = './';  // Путь к директории для поиска
const searchTerm = 'ggg';  // Слово для поиска

searchFiles(directoryPath, searchTerm);
