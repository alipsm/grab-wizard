const fileOperationHelpers = (() => {
    // Checking the presence of the key in the json file
    function isExistUniqueKey(jsonData:object, key:string) {
        const innerFakeFile = jsonData;
        if (key in innerFakeFile)
            return true;
        return false;
    }
    // Checking the presence of the key in the json file
    function isExistWindow() {
        if (typeof window === "object")
            return true;
        return false;
    }
    return {
        isExistUniqueKey,
        isExistWindow
    };
})();
export default fileOperationHelpers;
