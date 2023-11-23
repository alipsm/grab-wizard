const navigateAndRetrieveHelpers = (() => {
    const isFinalItem = (obj: object, indexFound: number, key: string) => {
        return Object.keys(obj).at(-1) === key && indexFound !== 0 && typeof obj[key] !== 'object';
    };
    const isObject = (obj: object, key: string) => {
        return typeof obj[key] === 'object';
    };
    const isLastRoutesKey = (routes: (string | number)[], indexFound: number) => {
        return indexFound === routes.length;
    };
    const areSameKeys = (routes: (string | number)[], indexFound: number, key: string) => {
        return key === routes[indexFound];
    };
    return {
        isFinalItem,
        isObject,
        isLastRoutesKey,
        areSameKeys
    };
})();
export default navigateAndRetrieveHelpers;
