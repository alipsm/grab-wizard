import fileOperations from "../../file-operation/module";
import pathOperation from "../../path-operation/module";
import retrieveNavigator from "../../search-operation/module";
import diHelper from "../helpers";

const { isEmpityData } = diHelper;


const DiContainer = (() => {
    const handleGrabValue = (obj: object, path: string, defaultValue?: string): any | undefined => {
        const getPathValue = fileOperations.getPathOnTheFile(obj, path)

        if (!!getPathValue) {
            const getObjValue = pathOperation.getObjectValueWithStringPath(obj, getPathValue)
            isEmpityData(getObjValue) ? fileOperations.removePathItem(obj, path) : (() => {
                return getObjValue
            })
        }

        const getArrayPath = pathOperation.convertPathToArray(path)
        const { grabPath, grabValue } = retrieveNavigator.grabValue(obj, getArrayPath)

        if (isEmpityData(grabValue))
            return defaultValue

        _getStringPathAndWrite(path, grabPath, obj)
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
        const stringPath = _getStringPathAndWrite(path, grabPath, obj)
        return stringPath
    };

    const _getStringPathAndWrite = (path: string, grabPath: any[], obj: object): string => {
        const convertGrabPathToString = pathOperation.mapRoutesToStringPath(grabPath)
        fileOperations.setUniqueKey(obj, path, convertGrabPathToString)
        return convertGrabPathToString
    }

    return {
        grabValue: handleGrabValue,
        grabPath: handleGrabPath
    };
})();

export default DiContainer;