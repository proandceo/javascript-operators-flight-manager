function Prices() {
    function calculateFinalPrice(basePrice, variationPassengerType, variationFlightType){

        let sum = basePrice - (-variationPassengerType/100) *
        basePrice - (-variationFlightType/100) * (basePrice - (-variationPassengerType/100) * basePrice);

        return sum;
    }

    function calculateDefaultFinalPrice(basePrice, passengerType, flightType){
        let finalPrice = basePrice;

        switch(passengerType.toUpperCase()) {
            case 'REGULAR': finalPrice *=  0.95;
               break;
            case 'VIP': finalPrice *= 1.05;
               break;
        }

        switch(flightType.toUpperCase()) {
            case 'ECONOMY': finalPrice *= 0.97;
               break;
            case 'BUSINESS': finalPrice *= 1.1;
               break;
        }

        return finalPrice.toFixed(2);

    }

    return {calculateFinalPrice, calculateDefaultFinalPrice};
}
module.exports = Prices();
