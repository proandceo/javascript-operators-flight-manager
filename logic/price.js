function Prices() {
    function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType){

        let sum = basePrice - (-variationPassengerType/100) *
        basePrice - (-variationFlightType/100) * (basePrice - (-variationPassengerType/100) * basePrice);

        return sum;
    }

    function checkInput(i){
        if (i === ''){
            throw "The input should not be empty";
        }else if (Number.isInteger(i)){
            throw "The input should be a number"
        }

        return 
    }

    return {calculateFinalPrice, checkInput};
}
module.exports = Prices();
