import fileOperations from "../../file-operation/modules";
import pathOperation from "../../path-operation/module";
import retrieveNavigator from "../../search-operation/module";
import diHelper from "../helpers";

const {isEmpityData} = diHelper;


const DiContainer = (() => {
    const handleGrabValue = (obj: object, path: string, defaultValue?: string): any | undefined => {
        const pathValue = fileOperations.getPathValue(obj, path)
        if (!!pathValue) {
            const getObjValue = pathOperation.getObjectValueWithStringPath(obj, pathValue)
            return getObjValue
        }
        const getArrayPath = pathOperation.convertPathToArray(path)
        const { grabPath, grabValue } = retrieveNavigator.grabValue(obj, getArrayPath)

        if ( isEmpityData(grabValue) )
            return defaultValue

        const convertGrabPathToString = pathOperation.mapRoutesToStringPath(grabPath)
        fileOperations.setKey(obj, path, convertGrabPathToString)
        return grabValue
    };

    const handleGrabPath = (obj: object, path: string, defaultValue?: string): any | undefined => {
        const pathValue = fileOperations.getPathValue(obj, path)
        if (!!pathValue)
            return pathValue

        const getArrayPath = pathOperation.convertPathToArray(path)
        const grabPath = retrieveNavigator.grabPath(obj, getArrayPath)
        if (!!!grabPath.length)
            return defaultValue
        const convertGrabPathToString = pathOperation.mapRoutesToStringPath(grabPath)
        fileOperations.setKey(obj, path, convertGrabPathToString)
        return convertGrabPathToString
    };

    return {
        grabValue: handleGrabValue,
        grabPath: handleGrabPath
    };
})();

export default DiContainer;