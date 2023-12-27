const searchHelper = (() => {
    const isFinalItem = (obj: object, indexFound: number, key: string) => {
        return Object.keys(obj).at(-1) === key && indexFound !== 0 && typeof obj[key] !== 'object';
    };

    const isObject = (obj: object, key: string) => ((typeof obj[key] === 'object' && !Object.is(obj, null)))

    const isLastRoutesKey = (routes: (string | number)[], indexFound: number) => (indexFound === routes.length)

    const areSameKeys = (routes: (string | number)[], indexFound: number, key: string) => (key === routes[indexFound])

    const isExistKeyInCurrentObjectKeys = (obj: object, key: string | number) => (!Object.is(obj, null) ? Object.hasOwnProperty.bind(obj)(key) : false)


    return {
        isExistKeyInCurrentObjectKeys,
        isLastRoutesKey,
        isFinalItem,
        areSameKeys,
        isObject,
    };
})();
export default searchHelper;
