import { NavigatorInterface } from "../../../types";
import searchHelper from "../helpers";

const { areSameKeys, isFinalItem, isLastRoutesKey, isObject, isExistKeyInCurrentObjectKeys } = searchHelper;
const retrieveNavigator = (() => {
    const grabValue = (obj: object, routes: NavigatorInterface["routes"], defaultValue?: string) => {
        const result = navigateAndRetrieve({ obj, routes, defaultValue });
        return result;
    };
    const grabPath = (obj: object, routes: NavigatorInterface["routes"], defaultValue?: string): NavigatorInterface["routes"] => {
        const { grabPath } = navigateAndRetrieve({ obj, routes, defaultValue });
        return grabPath;
    };
    return {
        grabValue, grabPath
    };
})();
export default retrieveNavigator;

// Callback function for find nested value
function navigateAndRetrieve(navData: NavigatorInterface): { grabPath: NavigatorInterface["routes"], grabValue: any } {

    // remove all circular references in the object value with IIFE
    ((data) => {
        const seen = new WeakSet();
        const stringified = JSON.stringify(data, _remove());
        function _remove() {
            return (key, value: any) => {
                if (isObject(value)) {
                    if (seen.has(value)) {
                        return;
                    }
                    seen.add(value);
                }
                return value;
            }
        }
        navData.obj = JSON.parse(stringified);
    })(navData.obj);


    const { obj, routes } = navData;

    const searchData = {
        indexFound: 0,
        routesMonitoring: []
    }
    Object.seal(searchData);

    function search(obj: object, routes: NavigatorInterface["routes"]) {
        Object.freeze(obj)

        // If the key was in the list of current keys, it will be selected
        {
            let getObjKey = routes[searchData.indexFound]
            if (isExistKeyInCurrentObjectKeys(obj, getObjKey)) {
                handleFindKey.call(searchData, getObjKey)
                if (isLastRoutesKey(routes, searchData.indexFound)) {
                    return { path: searchData.routesMonitoring, value: obj[getObjKey] };
                }
                const result = search(obj[getObjKey], routes);
                return result;
            }
        }


        for (const key in obj) {
            const nextObj = obj[key];
            if (areSameKeys(routes, searchData.indexFound, key)) {
                handleFindKey.call(searchData, key)
                if (isLastRoutesKey(routes, searchData.indexFound)) {
                    return { path: searchData.routesMonitoring, value: nextObj };
                }
                const result = search(nextObj, routes);
                return result;
            }
            else if (isObject(nextObj)) {
                searchData.routesMonitoring.push(key);
                const result = search(nextObj, routes);
                if (result)
                    return result;
            }
            else if (isFinalItem(obj, searchData.indexFound, key)) {
                searchData.routesMonitoring.pop();
                return undefined;
            }
        }
        searchData.routesMonitoring.pop();
        return undefined;
    }

    function handleFindKey(key: string) {
        this.routesMonitoring.push(key);
        this.indexFound++;
    }

    const result = search(obj, routes);
    return {
        grabValue: result?.value ?? navData.defaultValue,
        grabPath: result?.path ?? []
    };
}
