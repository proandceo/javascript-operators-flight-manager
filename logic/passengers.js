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

    function distributeAllSeatsToAllPassengers(vipPassengers, regularPassengers, nrOfFlights, 
        businessSeatsPerFlight, economySeatsPerFlight) {

        let vipPassengersWithBusinessSeats=0, vipPassengersWithEconomySeats=0, 
        regularPassengersWithBusinessSeats=0, regularPassengersWithEconomySeats=0;
        let availableBusinessSeats = nrOfFlights * businessSeatsPerFlight;
        let availableEconomySeats = nrOfFlights * economySeatsPerFlight;

        let vipBusinessConfiguration = {passengers:vipPassengers, seats:availableBusinessSeats};
        vipPassengersWithBusinessSeats = updateConfiguration(vipBusinessConfiguration, businessSeatsPerFlight);

        let vipEconomyConfiguration = {passengers:vipBusinessConfiguration.passengers, seats:availableEconomySeats};
        vipPassengersWithEconomySeats = updateConfiguration(vipEconomyConfiguration, economySeatsPerFlight);

        let regularBusinessConfiguration = {passengers:regularPassengers, seats:vipBusinessConfiguration.seats};
        regularPassengersWithBusinessSeats = updateConfiguration(regularBusinessConfiguration, businessSeatsPerFlight);

        let regularEconomyConfiguration = {passengers:regularBusinessConfiguration.passengers, seats:vipEconomyConfiguration.seats};
        regularPassengersWithEconomySeats = updateConfiguration(regularEconomyConfiguration, economySeatsPerFlight);

        return {vipPassengersWithBusinessSeats:vipPassengersWithBusinessSeats,
                vipPassengersWithEconomySeats:vipPassengersWithEconomySeats, regularPassengersWithBusinessSeats:regularPassengersWithBusinessSeats,
                regularPassengersWithEconomySeats:regularPassengersWithEconomySeats};
    }

    function updateConfiguration(configuration, seatsPerFlight) {
        let passengersWithSeats = 0;
        while (configuration.passengers > 0) {
            if (configuration.seats > 0) {
               if (configuration.passengers >= configuration.seats) {

                    if (configuration.seats > configuration.seatsPerFlight) {
                        configuration.passengers -= seatsPerFlight;
                        configuration.seats -= seatsPerFlight;
                        passengersWithSeats += seatsPerFlight;
                    } else {
                        configuration.passengers -= configuration.seats;
                        passengersWithSeats += configuration.seats;
                        configuration.seats = 0;
                    }
               } else {
                    passengersWithSeats += configuration.passengers;
                    configuration.seats -= configuration.passengers;
                    configuration.passengers = 0;
               }
            } else {
               break;
            }
        }
        return passengersWithSeats;
    }
    return {checkFlightCapacity, distributeAllSeatsToAllPassengers};
}
module.exports = Passengers();