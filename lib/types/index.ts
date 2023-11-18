export interface NavigatorInterface {
    obj: object,
    routes: (string | number)[],
    options?: {
        getPath?: boolean | undefined,
    }
}

