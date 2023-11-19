import { NavigatorInterface } from "../types"

export function mapRoutesToStringPath(navigateList: NavigatorInterface["routes"]) {
    console.log('navigateList', navigateList)
    let stringRoutes = navigateList?.reduce((accumulator, currentValue) => (
        accumulator += isNumber.call({currentValue}) ? `[${currentValue}]` : `.${currentValue}`
    ), "")
    return stringRoutes
}

const isNumber = function () {
    return !isNaN(this.currentValue as number)
}