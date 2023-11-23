const navigateAndRetrieveHelpers = (() => {
    const isFinalItem = (obj, indexFound, key) => {
        return Object.keys(obj).at(-1) === key && indexFound !== 0 && typeof obj[key] !== 'object';
    };
    const isObject = (obj, key) => {
        return typeof obj[key] === 'object';
    };
    const isLastRoutesKey = (routes, indexFound) => {
        return indexFound === routes.length;
    };
    const areSameKeys = (routes, indexFound, key) => {
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
