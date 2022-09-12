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

// todo-2.1: implement a function and export it
// hint: after implement it, can use the npm test to run the test and check whether it success or not
function create(task) {
    const allItems = getAll();  // read all items stored in the data/items.json file to an array
    allItems.push({id: uuidv4(), task: task}); // add the new task to the array and assign an unique id
    // todo-2.2: save the changes to local json file,
    // hint: can use the writeFile method provided in fileUtils
    return allItems;
}