import { StorageInterface } from '../interface';

const storage = (()=>{
    try {
        return localStorage
    } catch{
        return undefined
    }
})()

const localServices:StorageInterface = (() => {
    const initDirectory = () => {
        if (storage?.getItem("gw"))
            return;
        write("{}")
    }

    const read = (): string => {
        return storage?.getItem("gw")
    }

    const write = (data: string): void => {
        storage?.setItem("gw", data)
    }

    return {
        initDirectory,
        read,
        write
    };
})();
module.exports= localServices;