import helper from '../helpers';
import { StorageInterface } from '../interface';


// choose storage space
const storageServices:StorageInterface = (() => {
    if (helper.isExistWindow) {
        return require("./local")
    }
    return require("./fs")
})()

const fileOperations = (() => {
    const initDirectory = () => {
        storageServices.initDirectory()
    }

    const setKey = (obj: object, path: string, orgPath: string) => {
         initDirectory()
        const getUniqueKey = helper.createUniqueKey(obj, path)
        const hashedUniqueKey = helper.stringHasher(getUniqueKey)
        updateKey(hashedUniqueKey, orgPath)
    }

    const updateKey = (key: number, path: string) => {
        const fileContent = storageServices.read()
        const jsonParsed: object = helper.jsonParse(fileContent);
        jsonParsed[key] = path;
        const updatedData = helper.jsonStringify(jsonParsed);
        storageServices.write(updatedData)
    }

    const getPathValue = (obj: object, path: string): string | undefined => {
        initDirectory()
        const getUniqueKey = helper.createUniqueKey(obj, path)
        const getHash = helper.stringHasher(getUniqueKey)
        let getFileData: string = storageServices.read()
        const jsonParsed: object = helper.jsonParse(getFileData)
        if (!!jsonParsed && typeof jsonParsed === "object")
            return jsonParsed[getHash];
        return undefined
    }

    return {
        getPathValue,
        setKey,
    };
})();
export default fileOperations;
