// 1. Fruit
function fruitPrice(typeFruit, weight, pricePerKg) {
    let money = ((weight/1000) * pricePerKg).toFixed(2);
    console.log(`I need $${money} to buy ${(weight/1000).toFixed(2)} kilograms ${typeFruit}.`);
}
//fruitPrice('apple', 1563, 2.35);

// 2. Greatest Common Divisor - GCD
function gcd(a, b) {
    if (b == 0)
      return a;
    else
      return gcd(b, (a % b));
}
//gcd(15,5);

// 3. Same Numbers
function sameNumbers(input) {
    let newInput = input.toString();
    let sum = 0;
    let comparingNumber = 0;
    let boolean = true;
    for (let i = 0; i < newInput.length; i++) {
        comparingNumber = newInput[0];
        if ( newInput[i] !== comparingNumber ) {
            boolean = false;
        }
        sum += +newInput[i];
    }
    console.log(boolean);
    console.log(sum);
}
//sameNumbers(2222222);

// 4. Time to Walk
function timeToWalk(numberSteps, footprintLength, studentSpeed) {
    let distance = numberSteps * footprintLength;
    let distanceKM = distance / 1000;
    let breakTime = Math.floor(distanceKM/0.5);
    let time = distanceKM/studentSpeed;
    let timeM = time * 60 + breakTime;
    let hours = Math.floor(timeM / 60);
    let minutes = Math.floor(timeM);
    let seconds = Math.ceil((timeM - minutes) * 60);
    if ( hours < 10 ) {
        hours = hours.toString().padStart(2,'0');
    }
    if ( minutes < 10 ) {
        minutes = minutes.toString().padStart(2,'0');
    }
    console.log(`${hours}:${minutes}:${seconds}`);
}
//timeToWalk(2564, 0.70, 5.5);

// 5. Calorie Object
function calorieObject(input) {
    let newObj = {};
    let string = '';
    for ( let i = 0; i < input.length; i ++ ) {
        if ( i % 2 === 0 ) {
            if ( !newObj.hasOwnProperty(i) ) {
                newObj[input[i]] = +input[i+1];
            }
        }
    }
    console.log(newObj);
}
//calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);

// 6. Road Radar
function roadRadar(input) {
    let [speed, area] = input;
    let allowedSpeed = 0;
    switch(area) {
        case "city": allowedSpeed = 50;
        break;
        case "residential": allowedSpeed = 20;
        break;
        case "interstate": allowedSpeed = 90;
        break;
        case "motorway": allowedSpeed = 130;
        break;
    }
    let limitBreak = speed - allowedSpeed;
    if ( limitBreak <= 20 && limitBreak > 0 ) {
        console.log("speeding")
    } else if ( limitBreak <= 40 && limitBreak > 20 ) {
        console.log("excessive speeding");
    } else if ( limitBreak > 40 ) {
        console.log("reckless driving");
    }
}
//roadRadar([40, 'city']);

// 7. Cooking By Number
function cookingByNumber(input) {
    let number = Number(input.shift());
    for ( let i = 0; i < input.length; i ++ ) {
        switch ( input[i] ) {
            case "chop": number = number/2;
            break;
            case "dice": number = Math.sqrt(number);
            break;
            case "spice": number += 1;
            break;
            case "bake": number = number * 3;
            break;
            case "fillet": number -= 0.2 * number;
            break;
        }
        console.log(number);
    }
}
//cookingByNumber(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);

// 8. Validity Checker
function validityChecker(input) {
    let [xOne, yOne, xTwo, yTwo] = input;
    let a = xOne - xTwo;
    let b = yOne - yTwo;
    if ( Number.isInteger(Math.sqrt( xOne - 0 ) * ( xOne - 0 ) + ( yOne - 0) * ( yOne - 0))) {
        console.log(`{${xOne}, ${yOne}} to {0, 0} is valid`)
    } else {
        console.log(`{${xOne}, ${yOne}} to {0, 0} is invalid`)
    }
    if ( Number.isInteger(Math.sqrt( ( xTwo - 0 ) * ( xTwo - 0 ) + ( yTwo - 0) * ( yTwo - 0) ))) {
        console.log(`{${xTwo}, ${yTwo}} to {0, 0} is valid`)
    } else {
        console.log(`{${xTwo}, ${yTwo}} to {0, 0} is invalid`)
    }
    if ( Number.isInteger(Math.sqrt(b*b + a*a))) {
        console.log(`{${xOne}, ${yOne}} to {${xTwo}, ${yTwo}} is valid`)
    } else {
        console.log(`{${xOne}, ${yOne}} to {${xTwo}, ${yTwo}} is invalid`)
    }
}
//validityChecker([2, 1, 1, 1]);

// 9. Coffee Machine

function coffeeMachine(input) {
    let coffeeCaffeinePrice = 0.80;
    let coffeeDecafPrice = 0.90;
    let teaPrice = 0.80;
    let sugarPrice = 0;
    let totalSum = 0;
    for ( let i = 0; i < input.length; i ++ ) {
        let totalOrderPrice = 0;
        let orderArr = input[i].split(', ');
        let budget = orderArr.shift();
        let order = orderArr.shift();
        if ( order === 'coffee' ) {
            let coffeeType = orderArr.shift();
            if ( coffeeType === 'caffeine' ) {
                totalOrderPrice = coffeeCaffeinePrice;
            } else if ( coffeeType === 'decaf' ) {
                totalOrderPrice = coffeeDecafPrice;
            }
        } else if ( order === 'tea' ) {
            totalOrderPrice = teaPrice;
        }
        let sugar = Number(orderArr.pop());
        if ( sugar !== 0 ) {
            sugarPrice = 0.10;
        } else {
            sugarPrice = 0;
        }
        if ( orderArr.length > 0 ) {
            totalOrderPrice += Math.round((0.1 * totalOrderPrice)*10)/10;
        }
        totalOrderPrice += sugarPrice;
        totalOrderPrice = totalOrderPrice.toFixed(2);
        if ( budget - totalOrderPrice >= 0 ) {
            let change = (budget - totalOrderPrice).toFixed(2);
            console.log(`You ordered ${order}. Price: $${totalOrderPrice} Change: $${change}`)
            totalSum += Number(totalOrderPrice);
        } else {
            let change = (totalOrderPrice - budget).toFixed(2);
            console.log(`Not enough money for ${order}. Need $${change} more.`)
        }
    }
    console.log(`Income Report: $${totalSum.toFixed(2)}`);
}
coffeeMachine(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
