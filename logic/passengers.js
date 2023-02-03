function Passengers() {
    function checkFlightCapacity(flightCapacity, arrayOfPassengersNumbers){
        let sumOfPassengersNumbers = 0
        for (let i = 0; i < arrayOfPassengersNumbers.length; i++){
            sumOfPassengersNumbers += arrayOfPassengersNumbers[i];
        }
        
        if (sumOfPassengersNumbers < flightCapacity ){
            return sumOfPassengersNumbers;
        } else {
            throw new Error("The capacity of the flight is exceeded");
        }
    }

    function distributeAllSeatsToAllPassengers(vip, 
                                            regular, 
                                            numberOfFlights,
                                            numberOfBusinessSeatsPerFlight, 
                                            numberOfEconomySeatsPerFlight){
        
        distributeAllSeatsToAllPassengers.vipPassengersWithBusinessSeats = 0;
        distributeAllSeatsToAllPassengers.vipPassengersWithEconomySeats = 0;
        distributeAllSeatsToAllPassengers.regularPassengersWithBusinessSeats = 0;
        distributeAllSeatsToAllPassengers.regularPassengersWithEconomySeats = 0;

        if ( vip - numberOfFlights * numberOfBusinessSeatsPerFlight > 0){
            distributeAllSeatsToAllPassengers.vipPassengersWithBusinessSeats = numberOfFlights * numberOfBusinessSeatsPerFlight;
            distributeAllSeatsToAllPassengers.vipPassengersWithEconomySeats = vip - distributeAllSeatsToAllPassengers.vipPassengersWithBusinessSeats;  
        }else {
            distributeAllSeatsToAllPassengers.vipPassengersWithBusinessSeats = vip;
            distributeAllSeatsToAllPassengers.vipPassengersWithBusinessSeats += numberOfFlights * numberOfBusinessSeatsPerFlight - vip;
        }

        if (numberOfFlights * numberOfEconomySeatsPerFlight - distributeAllSeatsToAllPassengers.vipPassengersWithEconomySeats > 0){
            distributeAllSeatsToAllPassengers.regularPassengersWithEconomySeats = regular - 
        }
        

        
        // distributeAllSeatsToAllPassengers.vipPassengersWithBusinessSeats = vip;
        // if (numberOfFlights * numberOfBusinessSeatsPerFlight - vip > 0){
        //     distributeAllSeatsToAllPassengers.regularPassengersWithEconomySeats -= numberOfFlights * numberOfBusinessSeatsPerFlight - vip;
        // }

        // if ( vip > numberOfFlights * numberOfBusinessSeatsPerFlight){
        //     distributeAllSeatsToAllPassengers.vipPassengersWithEconomySeats = (numberOfEconomySeatsPerFlight * numberOfFlights) - (numberOfFlights * numberOfBusinessSeatsPerFlight);
        //     if (numberOfFlights * numberOfBusinessSeatsPerFlight - vip != 0){}
        // }else {
        //     distributeAllSeatsToAllPassengers.vipPassengersWithEconomySeats = 0;
        // }
        
        // if(numberOfBusinessSeatsPerFlight * numberOfFlights - vip > 0){
        //     distributeAllSeatsToAllPassengers.regularPassengersWithBusinessSeats = numberOfBusinessSeatsPerFlight*numberOfFlights - vip;
        // } else {
        //     distributeAllSeatsToAllPassengers.regularPassengersWithBusinessSeats = 0;
        // }
        // console.log("distributeAllSeatsToAllPassengers.regularPassengersWithEconomySeats " + distributeAllSeatsToAllPassengers.regularPassengersWithEconomySeats);


        // console.log("numberOfEconomySeatsPerFlight * numberOfFlights " + numberOfEconomySeatsPerFlight * numberOfFlights);
        // console.log("distributeAllSeatsToAllPassengers.vipPassengersWithEconomySeats " + distributeAllSeatsToAllPassengers.vipPassengersWithEconomySeats);
        // console.log("distributeAllSeatsToAllPassengers.regularPassengersWithBusinessSeats " + distributeAllSeatsToAllPassengers.regularPassengersWithBusinessSeats);
        // distributeAllSeatsToAllPassengers.regularPassengersWithEconomySeats = numberOfEconomySeatsPerFlight * numberOfFlights - (distributeAllSeatsToAllPassengers.vipPassengersWithEconomySeats + distributeAllSeatsToAllPassengers.regularPassengersWithBusinessSeats);


        return distributeAllSeatsToAllPassengers;
    }
    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}
module.exports = Passengers();