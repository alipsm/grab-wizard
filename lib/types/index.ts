export interface NavigatorInterface {
    obj: object,
    routes: routes[],
    options?: {
        getPath?: getPath,
    }
}

type routes = (string | number)
type getPath = boolean | undefined

