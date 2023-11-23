import { NavigatorInterface } from "../../../types";
import { mapRoutesToStringPath } from "../../pathConverter";
import navigateAndRetrieveHelpers from "../helpers";

const { areSameKeys, isFinalItem, isLastRoutesKey, isObject } = navigateAndRetrieveHelpers;
const retrieveNavigator = (() => {
    const grabValue = (obj: object,routes: NavigatorInterface["routes"],defaultValue?:string) => {
        const { grabValue } = navigateAndRetrieve({ obj, routes, defaultValue });
        return grabValue;
    };
    const grabPath = (obj: object,routes: NavigatorInterface["routes"],defaultValue?:string) => {
        const { grabPath } = navigateAndRetrieve({ obj, routes, defaultValue });
        let getObjStringSyntax =  mapRoutesToStringPath(grabPath);
        return getObjStringSyntax;
    };
    return {
        grabValue, grabPath
    };
})();
export default retrieveNavigator;
// Callback function for find nested value
function navigateAndRetrieve(navData) {
    const { obj, routes } = navData;
    var indexFound = 0; // => Controls the index number of found routes
    var routesMonitoring = []; // => Monitores object routes 
    // handle callback search function (find nested value & path)
    function search(obj, routes) {
        for (const key in obj) {
            const nextObj = obj[key];
            if (areSameKeys(routes, indexFound, key)) {
                routesMonitoring.push(key);
                indexFound++;
                if (isLastRoutesKey(routes, indexFound)) {
                    return { path: routesMonitoring, value: nextObj };
                }
                const result = search(nextObj, routes);
                return result;
            }
            else if (isFinalItem(obj, indexFound, key)) {
                return undefined;
            }
            else if (isObject(obj, key)) {
                routesMonitoring.push(key);
                const result = search(nextObj, routes);
                if (result)
                    return result;
            }
        }
        routesMonitoring.pop();
        return undefined;
    }
    const result = search(obj, routes);
    return {
        grabValue:  result?.value ?? navData.defaultValue,
        grabPath:  result?.path ?? []
    };
}
