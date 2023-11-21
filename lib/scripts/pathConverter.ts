import { NavigatorInterface } from "../types"

export function mapRoutesToStringPath(navigateList: NavigatorInterface["routes"]) {
    let stringRoutes = navigateList?.reduce((accumulator, currentValue) => (
        accumulator += setArrayOrObjectSynax(currentValue)
    ), "")
    return stringRoutes
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