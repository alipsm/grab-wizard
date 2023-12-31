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
        const fileContent = _readFile()
        fileContent[key] = path;
        _writeFile(fileContent)
    }


    function getLocalEnvironmentData() {
        if (fileHelper.isExistWindow() === "node") {
            if (!fs.existsSync(PATHS_JSON_FILE)) {
                createPathsJsonFile()
                return {}
            }
            const fileContent = _readFile();
            return fileContent || {}
        } else {

        }
    }


    // Updates JSON file to store key-value for paths
    function getPathOnTheFile(obj: object, path: string): string | undefined {
        const getHash = fileHelper.getHashData(obj,path)

        let data: object = getLocalEnvironmentData()
        if (!!data && typeof data === "object")
            return data[getHash];
        return undefined
    }


    function removePathItem(obj: object, path: string) {
        const getHash = fileHelper.getHashData(obj,path)
        _removeFileItems(getHash)
    }

    const _readFile=()=>{
        const fileContent = fs.readFileSync(PATHS_JSON_FILE, 'utf8');
        const data = JSON.parse(fileContent);
        return data
    }

    const _writeFile=(data:object)=>{
        const updatedData = JSON.stringify(data, null, 2);
        fs.writeFileSync(PATHS_JSON_FILE, updatedData, 'utf8');
    }

    const _removeFileItems=(hashId:string|number)=>{
        const fileContent = _readFile()
        delete fileContent[hashId]
        _writeFile(fileContent)
    }




    return {
        getPathOnTheFile,
        removePathItem,
        setUniqueKey,
    };
})();
export default fileOperations;
