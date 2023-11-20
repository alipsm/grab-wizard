export interface NavigatorInterface {
    obj: object,
    routes: routes[],
    defaultValue?:string
    options?: {
       
    }
}

type routes = (string | number)
type getPath = boolean | undefined

