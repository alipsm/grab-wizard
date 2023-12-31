const pathHelper = (() => {

    const isNumber = function() {
        return !isNaN(this.currentValue as number)
    }

    return {
        isNumber
    }
})()

export default pathHelper