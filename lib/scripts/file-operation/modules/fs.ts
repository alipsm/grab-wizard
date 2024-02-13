import { PATHS_JSON_FILE } from '../../../constant';
import helper from '../helpers';
import { StorageInterface } from '../interface';

const storage = (()=>{
    try {
        return require('fs');
    } catch{
        return undefined
    }
})()

const fsServices:StorageInterface = (() => {
    const initDirectory = () => {
        if (storage?.existsSync(PATHS_JSON_FILE))
            return;

        const parentDirectory = helper.extractParentDirectory(PATHS_JSON_FILE)
        try {
            !helper.isExistPath(parentDirectory) && storage?.mkdirSync(parentDirectory);
            write("{}")
        } catch (error) {
            console.error(error)
        }
    }

    const read = (): string => {
        return storage?.readFileSync(PATHS_JSON_FILE, 'utf8');
    }

    const write = (data: string): void => {
        storage?.writeFileSync(PATHS_JSON_FILE, data, 'utf8');
    }

    return {
        initDirectory,
        read,
        write
    };
})();

module.exports=fsServices