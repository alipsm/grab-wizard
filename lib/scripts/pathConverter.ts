import { NavigatorInterface } from "../types"

export function mapRoutesToStringPath(navigateList: NavigatorInterface["routes"]):string {
    let stringRoutes = navigateList?.reduce((accumulator, currentValue) => (
        accumulator += setArrayOrObjectSynax(currentValue)
    ), "")
    return stringRoutes as string
}

export function convertPathToArray(path:string) {
    const arrayPath = path.split(/[.\[\]]/).filter(Boolean);
    return arrayPath
}



const setArrayOrObjectSynax = function (currentValue:string|number) {
    if (isNumber.call({currentValue})) {
        return `[${currentValue}]`
    }
    return `.${currentValue}`
}

const isNumber = function () {
    return !isNaN(this.currentValue as number)
}