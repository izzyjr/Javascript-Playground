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























