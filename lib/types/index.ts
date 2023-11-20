interface NavigatorInterface {
    obj: object,
    routes: routes[],
    defaultValue?:string
}

interface NavigateAndRetrieveInterface{ grabValue: unknown, grabPath: NavigatorInterface["routes"] }
interface SearchResultInterface{ path: NavigatorInterface["routes"], value: unknown | undefined }

type routes = (string | number)

export {
    NavigateAndRetrieveInterface,
    SearchResultInterface,
    NavigatorInterface
}

