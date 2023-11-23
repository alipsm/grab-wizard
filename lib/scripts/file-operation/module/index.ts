import { PATHS_JSON_FILE } from './../../../constant/index';
const fs = require('fs');
const fileOperations = (() => {
    // Creating a unique key using the object keys and the route received from the user
    function createUniqueKey(obj:object, path:string) {
        const getObjectKeys = Reflect.ownKeys(obj);
        const dataString = `objectKeys=${getObjectKeys.join(".")}&userPath=${path}`;
        return dataString;
    }
    // Writes Unique key in the json file
    function setUniqueKey(key:string, path:string) {
        fs.existsSync(PATHS_JSON_FILE) ?
            updatePathsJsonFile(key, path) :
            createPathsJsonFile(key, path);
    }
    // Creates JSON file to store key-value for paths
    function createPathsJsonFile(key:string, path:string) {
        fs.writeFileSync(PATHS_JSON_FILE, JSON.stringify({ [key]: path }), (error) => {
            console.log('error', error);
        });
    }
    // Updates JSON file to store key-value for paths
    function updatePathsJsonFile(key:string, path:string) {
        try {
            const fileContent = fs.readFileSync(PATHS_JSON_FILE, 'utf8');
            const data = JSON.parse(fileContent);
            data[key] = path;
            const updatedData = JSON.stringify(data, null, 2);
            fs.writeFileSync(PATHS_JSON_FILE, updatedData, 'utf8');
        }
        catch (error) {
            // Tries to create JSON file
            createPathsJsonFile(key, path);
        }
    }
    return {
        createPathsJsonFile,
        updatePathsJsonFile,
        createUniqueKey,
        setUniqueKey,
    };
})();
export default fileOperations;
