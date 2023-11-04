interface navigatorInterface {
    obj: object,
    routes: string[],
    options?: {
        getPath?: boolean|undefined,
    }
}


// Global states for search function (findValueByNavigateKey)
var indexFound = 0; // => Controls the index number of found routes
var routesMonitoring =[] // => Monitores object routes 


// Callback function for find nested value
function findValueByNavigateKey(navData: navigatorInterface) {
        for (const key in navData.obj) {
            if (key === navData.routes[indexFound]) {
                routesMonitoring.push(key)
                indexFound++
                if (indexFound===navData.routes.length) {
                    return handleResultView(navData,navData.obj[key])
                }else{
                    navData.obj = navData.obj[key];
                    const result= findValueByNavigateKey({ obj: navData.obj, routes: navData.routes, options: navData.options });
                    if (result !== undefined) {
                        return result;
                    }
                }
            }else if (typeof navData.obj[key] === 'object') {
                routesMonitoring.push(key)
                const result = findValueByNavigateKey({ obj: navData.obj[key], routes: navData.routes, options: navData.options });
                if (result !== undefined) {
                    return result;
                }
            }
    }
    routesMonitoring.pop()
    return undefined;
}

// Handles options
function handleResultView({options}:navigatorInterface,data:unknown) {
    if(options?.getPath){
        return routesMonitoring
    }
    return data
}

export {
    findValueByNavigateKey
}