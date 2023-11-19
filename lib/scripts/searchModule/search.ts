import { NavigatorInterface } from "../../types"
import { mapRoutesToStringPath } from "../pathConverter"


const isFinalItem = (obj: object, indexFound: number, key: string) => {
    return Object.keys(obj).at(-1) === key && indexFound !== 0 && typeof obj[key] !== 'object'
}

const isObject = (obj: object, key: string) => {
    return typeof obj[key] === 'object'
}

const isLastRoutesKey = (routes: (string | number)[], indexFound: number) => {
    return indexFound === routes.length
}

const areSameKeys = (routes: (string | number)[], indexFound: number, key: string) => {
    return key === routes[indexFound]
}


// Callback function for find nested value
function navigateAndRetrieve(navData: NavigatorInterface): { grabValue: unknown, grabPath: NavigatorInterface["routes"] } {

    const { obj, routes, options } = navData;

    var indexFound = 0; // => Controls the index number of found routes
    var routesMonitoring = [] // => Monitores object routes 

    // handle callback search function (find nested value & path)
    function search(obj: object, routes: (string | number)[], options: object): { path: NavigatorInterface["routes"], value: unknown } {
        for (const key in obj) {
            const nextObj = obj[key];

            if (areSameKeys(routes, indexFound, key)) {
                routesMonitoring.push(key)
                indexFound++
                if (isLastRoutesKey(routes, indexFound))
                    return { path: routesMonitoring, value: nextObj }
                const result = search(nextObj, routes, options);
                return result ?? undefined
            } else if (isFinalItem(obj, indexFound, key)) {
                return undefined
            } else if (isObject(obj, key)) {
                routesMonitoring.push(key)
                const result = search(nextObj, routes, options);
                if (result)
                    return result;
            }
        }
        routesMonitoring.pop()
        return undefined;
    }

    const result= search(obj, routes, options)

    return {
        grabValue: result?.value ?? navData.defaultValue,
        grabPath: result?.path
    }
}

const grabValue = (navData: NavigatorInterface): unknown => {
    const { grabValue } = navigateAndRetrieve(navData)
    return grabValue
}

const grabPath = (navData: NavigatorInterface): unknown => {
    const { grabPath } = navigateAndRetrieve(navData)
    let getObjStringSyntax = mapRoutesToStringPath(grabPath)
    return getObjStringSyntax
}

export { grabValue,grabPath }