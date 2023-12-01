import pathHelper from "../helpers"

const pathOperation = (() => {
    function getObjectValueWithStringPath(obj: object, path: string) {
        const getArrayPath = convertPathToArray(path)
        const data = getArrayPath.reduce((prev, current) => { return prev?.[current] }, obj)
        return data
    }

    function mapRoutesToStringPath(path:(string | number)[]): string {
        let stringRoutes = path?.reduce((accumulator, currentValue) => (
            accumulator += setArrayOrObjectSynax(currentValue)
        ), "")
        return stringRoutes as string
    }


    const setArrayOrObjectSynax = function (currentValue: string | number) {
        if (pathHelper.isNumber.call({ currentValue })) {
            return `[${currentValue}]`
        }
        return `.${currentValue}`
    }

    function convertPathToArray(path: string) {
        const arrayPath = path.split(/[.\[\]]/).filter(Boolean);
        return arrayPath
    }

    return {
        getObjectValueWithStringPath,
        setArrayOrObjectSynax,
        mapRoutesToStringPath,
        convertPathToArray
    }
})()

export default pathOperation