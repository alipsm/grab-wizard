interface navigatorInterface {
    obj: object,
    routes: string[],
    options?: {
        getPath?: boolean | undefined,
    }
}


// Callback function for find nested value
function findValueByNavigateKey(navData: navigatorInterface) {

    // Local states for inner function
    var indexFound = 0; // => Controls the index number of found routes
    var routesMonitoring = [] // => Monitores object routes 

    // handle callback search function (find nested value)
    function search(searchNavData: navigatorInterface) {
        for (const key in searchNavData.obj) {
            if (key === searchNavData.routes[indexFound]) {
                routesMonitoring.push(key)
                indexFound++
                if (indexFound === searchNavData.routes.length) {
                    return view(searchNavData.obj[key])
                } else {
                    searchNavData.obj = searchNavData.obj[key];
                    const result = search({ obj: searchNavData.obj, routes: searchNavData.routes, options: searchNavData.options });
                    if (result !== undefined) {
                        return result;
                    }
                    return undefined
                }
            } else if (Object.keys(searchNavData.obj).at(-1) === key && indexFound !== 0 && typeof searchNavData.obj[key] !== 'object') {
                return undefined
            } else if (typeof searchNavData.obj[key] === 'object') {
                routesMonitoring.push(key)
                const result = search({ obj: searchNavData.obj[key], routes: searchNavData.routes, options: searchNavData.options });
                if (result !== undefined) {
                    return result;
                }
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


    return search(navData)
}

export {
    findValueByNavigateKey
}