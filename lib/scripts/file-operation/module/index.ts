import { PATHS_JSON_FILE } from '../../../constant';
import fileHelper from '../helpers';

const fs = require('fs');

const fileOperations = (() => {
    // Writes Unique key in the json file
    function setUniqueKey(obj: object, path: string, orgPath: string) {
        !fs.existsSync(PATHS_JSON_FILE) && createPathsJsonFile()
        const getUniqueKey = fileHelper.createUniqueKey(obj, path)
        const hasheUniqueKey = fileHelper.stringHasher(getUniqueKey)
        updatePathsJsonFile(hasheUniqueKey, orgPath)
    }

    // Create Json file
    function createPathsJsonFile() {
        const parentFolder = fileHelper.extractParentDirectory(PATHS_JSON_FILE)
        try {
            !fileHelper.isExistPath(parentFolder) && fs.mkdirSync(parentFolder);
            fs.writeFileSync(PATHS_JSON_FILE, JSON.stringify({}), (error) => {
                console.log('error', error);
            });
        } catch (error) {
            console.error(error)
        }
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
        if (fileHelper.isExistWindow() === "node") {
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
    function getPathOnTheFile(obj: object, path: string): string | undefined {
        const getUniqueKey = fileHelper.createUniqueKey(obj, path)
        const getHash = fileHelper.stringHasher(getUniqueKey)
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
