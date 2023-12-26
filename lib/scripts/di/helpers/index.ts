const diHelper = (() => {

    const isEmpityData=(data:any)=>{
        return data === undefined || data === null
    }
    return {
        isEmpityData
    };
})();
export default diHelper;
