function Util() {
    function calculateTotalDistributedPassengers(distributedPassengers){
            let totalDistributedPassengers = 0;
            let value;

            for (value in distributedPassengers) {
                totalDistributedPassengers += distributedPassengers[value];
            }
        return totalDistributedPassengers;
    }

    function calculateTotalNumberOfPassengers(arrayNumbers){
        let passenger = 0, sum = 0;
        for (passenger in arrayNumbers){
            sum += arrayNumbers[passenger];
        }
        return sum
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};

}

module.exports = Util();