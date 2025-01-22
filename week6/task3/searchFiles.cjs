"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
const path = __importStar(require("path"));
const searchFiles = (dir, searchTerm) => {
    // Рекурсивно ищем файлы в директории
    const searchInDirectory = (directory) => {
        // Чтение содержимого директории
        const files = fs.readdirSync(directory);
        for (const file of files) {
            const filePath = path.join(directory, file);
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                // Если это директория, рекурсивно ищем в ней
                searchInDirectory(filePath);
            }
            else {
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
    const searchInFile = (filePath, searchTerm) => {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        if (fileContent.toLowerCase().includes(searchTerm.toLowerCase())) {
            console.log(`Найдено совпадение в файле: ${filePath}`);
        }
    };
    searchInDirectory(dir);
};
// Пример использования
const directoryPath = './'; // Путь к директории для поиска
const searchTerm = 'ggg'; // Слово для поиска
searchFiles(directoryPath, searchTerm);
