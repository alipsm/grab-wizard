import { PATHS_JSON_FILE } from '../../../constant';
import fileOperationHelpers from '../helpers';

const fs = require('fs');

const fileOperations = (() => {
    // Writes Unique key in the json file
    function setUniqueKey(obj: object,path:string, orgPath: string) {
        !fs.existsSync(PATHS_JSON_FILE) && createPathsJsonFile()
        const getUniqueKey = fileOperationHelpers.createUniqueKey(obj, path)
        const hasheUniqueKey = fileOperationHelpers.stringHasher(getUniqueKey)
        updatePathsJsonFile(hasheUniqueKey, orgPath)
    }

    // Create Json file
    function createPathsJsonFile() {
        fs.writeFileSync(PATHS_JSON_FILE, JSON.stringify({}), (error) => {
            console.log('error', error);
        });
    }



    // Updates JSON file to store key-value for paths
    function updatePathsJsonFile(key: number, path: string) {
        const fileContent = fs.readFileSync(PATHS_JSON_FILE, 'utf8');
        const data = JSON.parse(fileContent);
        data[key] = path;
        const updatedData = JSON.stringify(data, null, 2);
        fs.writeFileSync(PATHS_JSON_FILE, updatedData, 'utf8');
    }


    function getLocalEnvironmentData() {
        if (fileOperationHelpers.isExistWindow() === "node") {
            if (!fs.existsSync(PATHS_JSON_FILE)) {
                createPathsJsonFile()
                return {}
            }
            const fileContent = fs.readFileSync(PATHS_JSON_FILE, 'utf8');
            return JSON.parse(fileContent) || {}
        } else {

        }
    }


    // Updates JSON file to store key-value for paths
    function getPathOnTheFile(obj: object, path:string): string | undefined {
        const getUniqueKey = fileOperationHelpers.createUniqueKey(obj, path)
        const getHash = fileOperationHelpers.stringHasher(getUniqueKey)
        let data: object = getLocalEnvironmentData()
        if (!!data && typeof data === "object")
            return data[getHash];
        return undefined
    }


    return {
        getPathOnTheFile,
        setUniqueKey,
    };
})();
export default fileOperations;
