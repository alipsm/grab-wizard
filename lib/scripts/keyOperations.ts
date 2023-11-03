import fakeJson from '../data/fakeJson.json'
import { PATHS_JSON_FILE } from '../constant';
import { createPathsJsonFile, updatePathsJsonFile } from './fileOperations';

var fs = require('fs');

// Creating a unique key using the object keys and the route received from the user
function createUniqueKey(obj: object, path: string) {
    const getObjectKeys = Reflect.ownKeys(obj);
    const dataString = `objectKeys=${getObjectKeys.join(".")}&userPath=${path}`;
    return dataString
}


// Checking the presence of the key in the json file
function isExistUniqueKey(key: string): boolean {
    const innerFakeFile = fakeJson;
    if (key in innerFakeFile)
        return true
    return false
}


// Writes Unique key in the json file
function setUniqueKey(key: string, path: string) {
    if (fs.existsSync(PATHS_JSON_FILE)) {
        updatePathsJsonFile(key, path)
    } else {
        createPathsJsonFile(key, path)
    }
}

export { createUniqueKey, isExistUniqueKey, setUniqueKey }
