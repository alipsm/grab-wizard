import fileOperations from "../file-operation/module";
import pathOperation from "../path-operation/module";
import retrieveNavigator from "../search-operation/module";

const DiContainer = (() => {
    const handleGrabValue = (obj: object, path: string, defaultValue?: string): any | undefined => {
        const getPathValue = fileOperations.getPathOnTheFile(obj, path)
        if (!!getPathValue) {
            const getObjValue = pathOperation.getObjectValueWithStringPath(obj, getPathValue)
            return getObjValue
        }
        const getArrayPath = pathOperation.convertPathToArray(path)
        const { grabPath, grabValue } = retrieveNavigator.grabValue(obj, getArrayPath)

        if (!!!grabValue)
            return defaultValue

        const convertGrabPathToString = pathOperation.mapRoutesToStringPath(grabPath)
        fileOperations.setUniqueKey(obj, path, convertGrabPathToString)
        return grabValue
    };

    const handleGrabPath = (obj: object, path: string, defaultValue?: string): any | undefined => {
        const getPathValue = fileOperations.getPathOnTheFile(obj, path)
        if (!!getPathValue)
            return getPathValue

        const getArrayPath = pathOperation.convertPathToArray(path)
        const grabPath = retrieveNavigator.grabPath(obj, getArrayPath)
        if (!!!grabPath.length)
            return defaultValue
        const convertGrabPathToString = pathOperation.mapRoutesToStringPath(grabPath)
        fileOperations.setUniqueKey(obj, path, convertGrabPathToString)
        return convertGrabPathToString
    };

    return {
        grabValue: handleGrabValue,
        grabPath: handleGrabPath
    };
})();

export default DiContainer;