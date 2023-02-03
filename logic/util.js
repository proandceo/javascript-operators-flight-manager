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

    function calculateTotalDistance(arrayDistance){
        let totalDistance = 0, distance = 0;

        for (distance of arrayDistance){
            if (distance < 0){
                continue;
            }
            totalDistance += distance;
        }

        return totalDistance;
    }

    function calculateBonusPoints(businessDistancesArray, economyDistancesArray, businessBonus, economyBonus) {
        let totalBusinessDistance = calculateTotalDistance(businessDistancesArray);
        let totalEconomyDistance = calculateTotalDistance(economyDistancesArray);
        let points = (businessBonus * totalBusinessDistance)/100 + (economyBonus * totalEconomyDistance)/100;
        return points;
     }

    return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput, calculateTotalDistance, calculateBonusPoints};

}

module.exports = Util();