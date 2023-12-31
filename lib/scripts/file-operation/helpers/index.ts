const fs = require('fs');

const fileHelper = (() => {
    // Checking the presence of the key in the json file
    function isExistUniqueKey(jsonData: object, key: number) {
        return (key in jsonData ? true : false)
    }

    // Checking the presence of the key in the json file
    function isExistWindow(): "browser" | "node" {
        if (typeof window === "object")
            return "browser";
        return "node";
    }

    function isExistPath(path: string): boolean {
        return !!fs.existsSync(path)
    }

    const _removeSymbolKeys = (objKeys: any[]) => (objKeys.filter((objKey: any) => (typeof objKey !== "symbol")))

    // Creating a unique key using the object keys and the route received from the user
    function createUniqueKey(obj: object, path: string) {
        const getObjectKeys = Reflect.ownKeys(obj)
        const filterBySymbol = _removeSymbolKeys(getObjectKeys)
        let dataString: string = `${filterBySymbol.join(".")}&${path}`;
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

    function getHashData(obj: object, path: string) {
        const getUniqueKey = createUniqueKey(obj, path)
        const getHash = stringHasher(getUniqueKey)
        return getHash
    }

    return {
        isExistUniqueKey,
        createUniqueKey,
        extractParentDirectory,
        isExistWindow,
        stringHasher,
        getHashData,
        isExistPath,
    };
})();
export default fileHelper;
