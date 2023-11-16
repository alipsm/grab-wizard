export function convertArrayRoutesToString(navigateList: string[]) {
    let stringRoutes: string = navigateList.reduce((accumulator, currentValue) => (
        accumulator += typeof currentValue === "number" ? `[${currentValue}]` : `.${currentValue}`
    ), "")
    return stringRoutes
}