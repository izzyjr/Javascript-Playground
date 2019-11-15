// REST PARAMETERS ...carIds
function sendCars(day, ...carIds) {
    carIds.forEach( id => console.log(id));
}

sendCars('Monday', 1, 2, 3, 4, 5);


//Destructuring Arrays
let carIds = [100, 200, 300];
let car1, car2;
[car1, car2, ...theRest] = carIds;

console.log(car1, car2, theRest);


//Destructuring Objects
let car = {
    id: 5000,
    style: 'convertible'
};

let id, style;
({id, style} = car);

console.log(id, style);


//Spread Syntax
function startCars(car1, car2, car3, car4, ...rest) {
    console.log(car1, car2, rest);
};

let carIds2 = [1, 2, 3, 4, 5];
startCars(...carIds2);

//Common Type Conversions
x = "55";
y = "6.27";

console.log( Number.parseInt(x));
console.log( Number.parseFloat(y));


//logical Operator
if (5 === 5 && 6 === 7) {
    console.log(true);
}
else {
    console.log(false);
}

//logical Operator
if (5 === 3 || 6 === 7) {
    console.log(true);
}
else {
    console.log(false);
}

let userSettings = {name: 'Joe'};
let defaultSettings = { name: 'Default'};

console.log( userSettings || defaultSettings);

let whip = null;
if ( !whip ) {
    whip = {
        make: 'Subaru',
        color: 'Green'
    };
    console.log(whip);
}


//Relational Operators

let s1 = 'Zoo';
let s2 = 'alphabet';

if (s1.toUpperCase() < s2.toUpperCase()) {
    console.log(true);
}
else {
    console.log(false);
}


//Conditional Operator

console.log( 2 > 4 ? 'yes' : 'no' );


//Function Scope

function startCar(carId) {
    let message = 'Starting...';
}
startCar(123);
// console.log(message);

function startCar2(carId) {
    let message = 'Starting1...';
    let startFn = function turnKey() {
        console.log(message);
    };
    startFn();
}
startCar2(123);

function startCar3(carId) {
    let message = 'Starting...';
    let startFn = function turnKey() {
        let message = 'Override';
        console.log(message);
    };
    startFn();
    console.log(message);
}

startCar3(123);


//Block Scope

if (5 === 5) {
    var message1 = 'Equal';
}
console.log(message1);

let message2 = 'Outside';
if (5 === 5) {
    let message2 = 'Equal';
    console.log(message2);
}

console.log(message2);


//IIFE or Immediately Invoked Function Expression

let app = (function() {
    let carId = 123;
    console.log('in function');
    return {name: 'Igor'};
})();

console.log(app);


//Exacmple Closure

let app2 = (function() {
    let carId = 123;
    let getId = function() {
        return carId;
    };
    return {
        getId: getId
    };
})();

console.log(app2.getId());


//The this keyword

let o = {
    carId: 456,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};

console.log(o.getId());


//Call and Apply

let p = {
    carId: 456,
    getId: function() {
        console.log(this);
        return this.carId;
    }
};

let newCar = {carId: 629};

console.log(o.getId.call(newCar));

let z = {
    carId: 598,
    getId: function(prefix) {
        return prefix + this.carId;
    }
};

let newCar2 = { carId: 628 };

console.log(z.getId.apply(newCar2, ['ID: ']));


// Bind

let i = {
    carId: 598,
    getId: function() {
        return this.carId;
    }
};

let newCar3 = { carId: 923 };

let newFn = i.getId.bind(newCar3);

console.log(newFn());


//Arrow Functions

let getId = (prefix, suffix) => {
    return prefix + 123 + suffix;
};

console.log( getId('ID: ', '!'));

let forShow = () => "Iago";

console.log(forShow());


//Default Parameters

let trackCar = function(carId, city='NY') {
    console.log(`Tracking ${carId} in ${city}.`);
};

console.log( trackCar(123));
console.log( trackCar(123, 'Chicago'));


//Constructor Functions

function Car(id) {
    this.carId = id;
    this.start = function() {
        console.log('start: ' + this.carId);
    };
}

let vehicle = new Car(123);
vehicle.start();

// Prototypes

function Cars(id) {
    this.carId = id;
}

Cars.prototype.start = function() {
    console.log('start: ' + this.carId);
};

let car4 = new Cars(127);
car4.start();

//Expanding Objects Using Prototypes

String.prototype.hello = function() {
    return this.toString() + ' Hello';
};

console.log('foo' .hello());


// JSON - Stringify/Parse

let house = {
    id: 936,
    style: 'mansion'
};

console.log(JSON.stringify(house));

let jsonIn = `{"id":936,"style":"mansion"}`;

let house2 = JSON.parse(jsonIn);
console.log(house2);


// Array Iteration

let houseIds = [
    {houseId: 123, style: 'mansion'},
    {houseId: 123, style: 'apartment'},
];

houseIds.forEach( house => console.log(house));

houseIds.forEach( (house, index) => console.log(house, index));

// Array Filtering

let houseIds2 = [
    {houseId: 123, style: 'mansion'},
    {houseId: 124, style: 'apartment'},
    {houseId: 125, style: 'apartment'},
];

let apartments = houseIds2.filter(
    house => house.style === 'apartment'
);

console.log(apartments);

let result = houseIds2.every(
    house => house.houseId > 0
);

console.log(result);

let mansion = houseIds2.find(
    mansion => mansion.style === 'mansion'
);

console.log(mansion.houseId);











