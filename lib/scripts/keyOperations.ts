import fakeJson from '../data/fakeJson.json'

// Creating a unique key using the object keys and the route received from the user
function createUniqeKey(obj: object, path: string) {
    // ایجاد یک استرینگ با فرمت URL query parameters
    const getObjectKeys = Reflect.ownKeys(obj);
    const dataString = `objectKeys=${getObjectKeys.join(".")}&userPath=${path}`;
    return dataString
}

// ---------------------------------------------------------------------------------

// Checking the presence of the key in the json file
function isExistUniqeKey(key: string): boolean {
    const innerFakeFile = fakeJson;
    if (key in innerFakeFile)
        return true
    return false
}

export { createUniqeKey, isExistUniqeKey }
