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

    function checkInput(i){
        if (!input){
            throw new Error("");
        }

        if (isNaN(input)){
            throw new Error("");
        }

        return 
    }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput};

}

module.exports = Util();