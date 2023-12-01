const fs = require('fs');

const fileHelper = (() => {
    // Checking the presence of the key in the json file
    function isExistUniqueKey(jsonData: object, key: number) {
        const innerFakeFile = jsonData;
        if (key in innerFakeFile)
            return true;
        return false;
    }
    // Checking the presence of the key in the json file
    function isExistWindow():"browser"|"node" {
        if (typeof window === "object")
            return "browser";
        return "node";
    }

    function isExistPath(path:string):boolean {
        return !!fs.existsSync(path)
    }

    // Creating a unique key using the object keys and the route received from the user
    function createUniqueKey(obj:object, path:string) {
        const getObjectKeys = Reflect.ownKeys(obj);
        let dataString:string = `${getObjectKeys.join(".")}&${path}`;
        return dataString;
    }

    // converts string to the hash number
    function stringHasher(str: string) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
        }
        return Math.abs(hash);
    }

    function extractParentDirectory(path: string) {
        let dir: any = path.split("/")
        dir.pop()
        dir = dir.join("/")
        return dir;
    }

    return {
        isExistUniqueKey,
        createUniqueKey,
        extractParentDirectory,
        isExistWindow,
        stringHasher,
        isExistPath,
    };
})();
export default fileHelper;
