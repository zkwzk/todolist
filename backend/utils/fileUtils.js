import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = __dirname + '/' + "../data/items.json";

export function readFile() {
    return fs.readFileSync(dataPath).toString();
}

export function writeFile(data) {
    fs.writeFileSync(dataPath, JSON.stringify(data));
}