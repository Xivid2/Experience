// 1. Sort Array
function sortArray(array, sort){
    if(sort === "asc"){
        return array.sort((a,b)=>a-b);
    }else if(sort==="desc"){
        return array.sort((a,b)=>b-a);
    }
}
//sortArray([14, 7, 17, 6, 8], 'asc')

// 2. Argument info
function argumentInfo(){
    let finalObj = {};
    for(let argument of arguments) {
        let type = typeof(argument);

        if ( type === "object" ) {
            console.log(`${type}: `);
        } else {
            console.log(`${type}: ${argument}`);
        }
        
        if(finalObj[type]){
            finalObj[type]++;
        }else{
            finalObj[type] = 1;
        }
    }
    let asd = Object.entries(finalObj).sort((a,b) => b[1]-a[1])
        .forEach((x) => console.log(`${x[0]} = ${x[1]}`));
}
//argumentInfo('cat', 42, function () { console.log('Hello world!'); })

// 3. Functional Sum
function add(num) {
    let sum = num;
    function calc(num2) {
        sum += num2;
        return calc;
    }
    calc.toString = function() { return sum };
    return calc;
}

// 4. Personal BMI
function BMIFUNCTION(name, age, weight, height) {
    let person = {
        name,
        personalInfo: {
            age,
            weight,
            height
        },
        BMI: Math.round(weight/Math.pow(height/100,2)),
        status: ""
    }

    if ( person.BMI < 18.5 ) {
        person.status = "underweight";
    } else if ( person.BMI < 25 ) {
        person.status = "normal";
    } else if ( person.BMI < 30 ) {
        person.status = "overweight";
    } else {
        person.status = "obese";
        person.recommendation = "admission required";
    }
    return person;
}
//BMIFUNCTION("Peter", 29, 75, 182);

// 6. Robot
function robot (params) {
    return (function () {
        const storage = { 
            protein: 0,
            carbohydrate: 0, 
            fat: 0, 
            flavour: 0
        };
        const recipes = {
            apple: { carbohydrate: 1, flavour: 2 },
            lemonade: { carbohydrate: 10, flavour: 20 },
            burger: { carbohydrate: 5, fat: 7, flavour: 3 },
            eggs: { protein: 5, fat: 1, flavour: 1 },
            turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
        };  
        return input => {
            let [command, ...args] = input.split(' ');
            let message = '';
  
            if (command === 'restock') {
                let [microelement, quantity] = [args[0], +args[1]];
                storage[microelement] += quantity;
                message = 'Success';
            } else if (command === 'prepare') {
                let [recipe, quantity] = [args[0], +args[1]];
                let missingIngredient = Object.entries(recipes[recipe]).find(
                    ([name, requiredQuantity]) =>
                    storage[name] < requiredQuantity * quantity
                );
    
                if (missingIngredient) {
                    message = `Error: not enough ${missingIngredient[0]} in stock`;
                } else {
                    for (let ingredient in recipes[recipe]) {
                        storage[ingredient] -= recipes[recipe][ingredient] * quantity;
                    }
    
                    message = 'Success'
                }
            } else if (command === 'report') {
            message =
                `protein=${storage.protein} carbohydrate=${storage.carbohydrate}` +
                ` fat=${storage.fat} flavour=${storage.flavour}`
            }
    
            console.log(message)
            return message
        }
    })();
}
// robot(  ["prepare turkey 1",
//                 "restock protein 10",
//                 "prepare turkey 1",
//                 "restock carbohydrate 10",
//                 "prepare turkey 1",
//                 "restock fat 10",
//                 "prepare turkey 1",
//                 "restock flavour 10",
//                 "prepare turkey 1",
//                 "report"]);
  // 7. Monkey Patcher
function solve (commandName) {
    let balance = this.upvotes - this.downvotes
    let totalVotes = this.upvotes + this.downvotes

    let commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
        let up = this.upvotes
        let down = this.downvotes

        if (totalVotes > 50) {
            let valueToAdd =
            totalVotes > 50 ? Math.ceil(Math.max(up, down) * 0.25) : 0

            up += valueToAdd
            down += valueToAdd
        }

        return [up, down, balance, getRating.call(this)]

        function getRating () {
            if (totalVotes < 10) {
            return 'new'
            }
            if (this.upvotes > (this.upvotes + this.downvotes) * 0.66) {
            return 'hot'
            } else if (
            balance >= 0 &&
            (this.upvotes > 100 || this.downvotes > 100)
            ) {
            return 'controversial'
            } else if (this.upvotes < this.downvotes) {
            return 'unpopular'
            } else {
            return 'new'
            }
        }
        }
    }

    return commands[commandName]()
}
  