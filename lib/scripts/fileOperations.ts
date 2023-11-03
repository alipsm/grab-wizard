import { PATHS_JSON_FILE } from "../constant";

var fs = require('fs');

// Creates JSON file to store key-value for paths
function createPathsJsonFile(key: string, path: string) {
    fs.writeFileSync(PATHS_JSON_FILE, JSON.stringify({ [key]: path }), (error) => {
        console.log('error', error)
    })
}

// Updates JSON file to store key-value for paths
function updatePathsJsonFile(key: string, path: string) {
    try {
        const fileContent = fs.readFileSync(PATHS_JSON_FILE, 'utf8');
        const data = JSON.parse(fileContent);
        data[key] = path;
        const updatedData = JSON.stringify(data, null, 2);
        fs.writeFileSync(PATHS_JSON_FILE, updatedData, 'utf8');
    } catch (error) {
        // Tries to create JSON file
        createPathsJsonFile(key,path)
    }
}

export {
    createPathsJsonFile,
    updatePathsJsonFile
}