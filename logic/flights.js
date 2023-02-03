function Flights() {
    function calculateNumberOfFlights(numberOfPassengers, flightCapacity){
        if(numberOfPassengers <= 0 || !Number.isInteger(numberOfPassengers)){
            throw new Error("The number of passengers must be a positive integer value");
        }

        if(flightCapacity <= 0 || !Number.isInteger(flightCapacity)){
            throw new Error("The capacity of the flight must be a positive integer value");
        }

        let calculateNumberOfFlights = numberOfPassengers/flightCapacity;

        if ( numberOfPassengers%flightCapacity != 0){
            calculateNumberOfFlights++;
        }
        return Math.floor(calculateNumberOfFlights);
    }

    function checkAircraftRevision(distanceLimit, distancesArray){
        let distanceSum = 0;
        for (let i = 0; i < distancesArray.length; i++){
            distanceSum += distancesArray[i];
        }

        if (distanceSum <= distanceLimit/2){
            return "The revision needs to be done within the next 3 months";
        } else if ( distanceSum <= distanceLimit/4*3) {
            return "The revision needs to be done within the next 2 months";
        } else if (distanceSum <= distanceLimit){
            return "The revision needs to be done within the next month";
        } else {
            throw new Error("Error");
        } 
    }
    return {calculateNumberOfFlights, checkAircraftRevision}; 
}
module.exports = Flights();