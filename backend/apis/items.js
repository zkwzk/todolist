import {readFile, writeFile} from '../utils/fileUtils.js';
import {v4 as uuidv4} from 'uuid';

export function getAll() {
    const items = readFile();
    return JSON.parse(items);
}

export function done(id) {
    const allItems = getAll();
    const restItems = allItems.filter((item) => item.id !== id);
    writeFile(restItems);
    return restItems;
}

export function create(task) {
    const allItems = getAll();
    allItems.push({id: uuidv4(), task: task});
    writeFile(allItems);
    return allItems;
}