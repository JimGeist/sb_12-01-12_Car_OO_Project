describe("PART ONE - Vehicle class tests", function () {

    it("passes when myFirstVehicle.honk() returns 'Beep.'", function () {
        expect(myFirstVehicle.honk()).toEqual("Beep.");
    });

    it("passes when myFirstVehicle.toString() returns 'The vehicle is a Honda Monster Truck from 1999.'", function () {
        expect(myFirstVehicle.toString()).toEqual("The vehicle is a Honda Monster Truck from 1999.");
    });

    it("passes when myPOS = new Vehicle('Ford', 'Pinto', '197o') throws an error", function () {
        expect(function () {
            const myPOS = new Vehicle("Ford", "Pinto", "197o")
        }).toThrowError();
    });

});


describe("PART TWO - Car class tests", function () {

    it("passes when myFirstCar.honk() returns 'Beep.'", function () {
        expect(myFirstCar.honk()).toEqual("Beep.");
    });

    it("passes when myFirstCar.toString() returns 'The vehicle is a Toyota Corolla from 2005.'", function () {
        expect(myFirstCar.toString()).toEqual("The vehicle is a Toyota Corolla from 2005.");
    });

    it("passes when myFirstCar.numWheels returns 4.", function () {
        expect(myFirstCar.numWheels).toEqual(4);
    });

    it("passes when myFirstPOSCar = new Car('AMC', 'Concord', '198o') throws an error", function () {
        expect(function () {
            const myFirstPOSCar = new Car('AMC', 'Concord', '198o')
        }).toThrowError();
    });

});


describe("PART THREE - Motorcycle class tests", function () {

    it("passes when myFirstCar.honk() returns 'Beep.'", function () {
        expect(myFirstMotorcycle.honk()).toEqual("Beep.");
    });

    it("passes when myFirstMotorcycle.toString() returns 'The vehicle is a Honda Nighthawk from 2000.'", function () {
        expect(myFirstMotorcycle.toString()).toEqual("The vehicle is a Honda Nighthawk from 2000.");
    });

    it("passes when myFirstMotorcycle.numWheels returns 2.", function () {
        expect(myFirstMotorcycle.numWheels).toEqual(2);
    });

    it("passes when myFirstBadMotorcycle = new Motorcycle('Harley-Davidson', 'Iron 883', '2o20') throws an error", function () {
        expect(function () {
            const myFirstBadMotorcycle = new Motorcycle('Harley-Davidson', 'Iron 883', '2o20')
        }).toThrowError();
    });

});


describe("PART FOUR - Garage class tests", function () {

    describe("Tests when garage is empty", function () {

        beforeEach(function () {
            garageEmpty = new Garage(2)
        });

        it("passes when garage.vehicles returns an empty array", function () {
            expect(JSON.stringify(garageEmpty.vehicles)).toEqual(JSON.stringify([]));
        });

    });

    it("passes when adding a car to garageFillTests returns 'Vehicle added!'", function () {
        expect(garageFillTests.add(new Car("Hyundai", "Elantra", 2015))).toEqual("Vehicle added!");
    });

    it("passes when adding a motorcycle to garageFillTests returns 'Vehicle added!'", function () {
        expect(garageFillTests.add(new Motorcycle('Harley-Davidson', 'Iron 883', 2020))).toEqual("Vehicle added!");
    });

    it("passes when adding a taco to garage returns 'Only vehicles are allowed in here!'", function () {
        expect(garage.add("Taco")).toEqual("Only vehicles are allowed in here!");
    });

    it("passes when garage.vehicles created with JavaScript returns [Car, Motorcycle]", function () {
        expect(JSON.stringify(garage.vehicles)).toEqual('[{"make":"Hyundai","model":"Elantra","year":2015,"numWheels":4},{"make":"Honda","model":"Nighthawk","year":2000,"numWheels":2}]');
    });

    it("passes when garage in JavaScript which is at capacity returns 'Sorry, we're full.' when attempting to add another vehicle", function () {
        expect(garage.add(new Motorcycle("Honda", "Nighthawk", 2001))).toEqual("Sorry, we're full.");
    });

    it("passes when garageBad = new Garage('three') throws an error", function () {
        expect(function () {
            const garageBad = new Garage('three');
        }).toThrowError();
    });

});

