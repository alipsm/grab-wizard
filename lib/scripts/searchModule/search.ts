import { NavigatorInterface } from "../../types"


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
function findValueByNavigateKey(navData: NavigatorInterface) {

    const { obj, routes, options } = navData;

    var indexFound = 0; // => Controls the index number of found routes
    var routesMonitoring = [] // => Monitores object routes 

    // handle callback search function (find nested value & path)
    function search(obj: object, routes: (string | number)[], options: object) {
        for (const key in obj) {
            if (areSameKeys(routes, indexFound, key)) {
                routesMonitoring.push(key)
                indexFound++
                if (isLastRoutesKey(routes, indexFound))
                    return view(obj[key])
                const nextObj = obj[key];
                const result = search(nextObj, routes, options);
                return result ?? undefined
            } else if (isFinalItem(obj, indexFound, key)) {
                return undefined
            } else if (isObject(obj, key)) {
                routesMonitoring.push(key)
                const result = search(obj[key], routes, options);
                if (result)
                    return result;
            }
        }
        routesMonitoring.pop()
        return undefined;
    }

    // Manage output data settings
    function view(data: unknown) {
        if (navData.options?.getPath) {
            return routesMonitoring
        }
        return data
    }
    return search(obj, routes, options)
}

export { findValueByNavigateKey }