interface StorageInterface {
    initDirectory: () => void,
    read: () => string,
    write: (data: string) => void
}

export {
    StorageInterface
}

