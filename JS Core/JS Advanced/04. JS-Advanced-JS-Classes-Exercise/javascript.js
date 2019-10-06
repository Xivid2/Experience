// 1. Basic Class
class Methods {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

// 2. Tickets
function tickets(inputArray, inputString) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    let ticketArr = [];
    let sortedObj = {};
    for ( let ticket of inputArray ) {
        let [destination, price, status] = ticket.split("|");
        ticketArr.push(new Ticket(destination,+price,status));
    }
    switch(inputString) {
        case "destination":
            sortedObj = ticketArr.sort((a,b) => {
                return a.destination.localeCompare(b.destination);
            });
        break;
        case "price":
            sortedObj = ticketArr.sort((a,b) => {
                return a.price - b.price;
            });
        break;
        case "status":
            sortedObj = ticketArr.sort((a,b) => {
                return a.status.localeCompare(b.status);
            });
        break;
    }
    return sortedObj;
}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination'
);

// 3. Unity
class Rat {
    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }
    unite(newRat) {
        if ( newRat instanceof Rat ) {
            this.unitedRats.push(newRat);
        }
        return this.unitedRats;
    };
    getRats() {
        return this.unitedRats;
    };
    toString() {
        let output = `${this.name}\n`;

        for ( let rat of this.unitedRats) {
            output += `##${rat}\n`;
        }
        return output;
    };
}

// 4. Lenght Limit
class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }
    toString() {
        let newStr = this.innerString;

        if ( this.innerString.length > this.innerLength ) {
            let cut = this.innerString.slice( 0, this.innerLength);
            newStr = cut;
            newStr += "...";
        } else if ( this.innerLength === 0 ) {
            newStr = "...";
        }
        return newStr;
    };
    increase(length) {
        this.innerLength += length;
    };
    decrease(length) {
        this.innerLength -= length;
        if ( this.innerLength < 0 ) {
            this.innerLength = 0;
        }
    };
}

// 5. Extensible Class


// 6. Sorted List
class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }
    add(element) {
        this.collection.push(element);
        this.size ++;
        
        this.collection.sort((a,b) => {
            return a - b;
        });
    };
    remove(index) {
        if ( index >= 0 && index < this.size ) {
            this.collection.splice(index,1);
            this.size --;
        }
    };
    get(index) {
        if ( index >= 0 && index < this.size ) {
            return this.collection[index];
        }
    };
}

// 7. Instance Validation
class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    set clientId (value) {
        if (!/^\d{6}$/.test(value)) {
          throw new TypeError('Client ID must be a 6-digit number')
        }
      }
    
    set email (value) {
        if (!/^\w+@[A-Za-z.]+$/.test(value)) {
            throw new TypeError('Invalid e-mail')
        }
    }

    set firstName (value) {
        if (!/^.{3,20}$/.test(value)) {
            throw new TypeError('First name must be between 3 and 20 characters long')
        } else if (!/^[A-Za-z]{3,20}$/.test(value)) {
            throw new TypeError('First name must contain only Latin characters')
        }
    }

    set lastName (value) {
        if (!/^.{3,20}$/.test(value)) {
            throw new TypeError('Last name must be between 3 and 20 characters long')
        } else if (!/^[A-Za-z]{3,20}$/.test(value)) {
            throw new TypeError('Last name must contain only Latin characters')
        }
    }
}
let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')

// 8. Kitchen
class Kitchen {
    constructor (budget) {
      this.budget = budget
      this.menu = {}
      this.productsInStock = {}
      this.actionsHistory = []
    }
  
    loadProducts (products) {
      products.forEach(p => {
        let [productName, productQuantity, productPrice] = p
          .split(' ')
          .map(x => +x || x)
  
        if (this.budget >= productPrice) {
          this.budget -= productPrice
  
          !this.productsInStock.hasOwnProperty(productName)
            ? (this.productsInStock[productName] = productQuantity)
            : (this.productsInStock[productName] += productQuantity)
  
          this.actionsHistory.push(
            `Successfully loaded ${productQuantity} ${productName}`
          )
        } else {
          this.actionsHistory.push(
            `There was not enough money to load ${productQuantity} ${productName}`
          )
        }
      })
  
      return this.actionsHistory.join('\n')
    }
  
    addToMenu (meal, products, price) {
      if (this.menu.hasOwnProperty(meal)) {
        return `The ${meal} is already in our menu, try something different.`
      }
  
      this.menu[meal] = {
        meal,
        products,
        price
      }
  
      return (
        `Great idea! Now with the ${meal} we have ` +
        `${Object.keys(this.menu).length} ` +
        'meals in the menu, other ideas?'
      )
    }
  
    showTheMenu () {
      let meals = Object.keys(this.menu)
  
      return meals.length === 0
        ? 'Our menu is not ready yet, please come later...'
        : meals
          .map(meal => `${meal} - $ ${this.menu[meal].price}`)
          .join('\n') + '\n'
    }
  
    makeTheOrder (meal) {
      if (!this.menu.hasOwnProperty(meal)) {
        return (
          `There is not ${meal} yet in our menu, ` +
          'do you want to order something else?'
        )
      }
  
      let products = this.menu[meal].products
  
      if (
        products.some(p => {
          let [productName, productQuantity] = p.split(' ')
          return (
            !this.productsInStock.hasOwnProperty(productName) ||
            this.productsInStock[productName] < productQuantity
          )
        })
      ) {
        return (
          'For the time being, we cannot complete your order ' +
          `(${meal}), we are very sorry...`
        )
      }
  
      products.forEach(product => {
        let [productName, productQuantity] = product.split(' ')
        this.productsInStock[productName] -= productQuantity
      })
  
      let price = this.menu[meal].price
      this.budget += price
  
      return (
        `Your order (${meal}) will be completed ` +
        `in the next 30 minutes and will cost you ${price}.`
      )
    }
  }
// Warehouse - Unit Testing
describe('revision() method test', function () {
    let warehouse
    beforeEach(function () {
      warehouse = new Warehouse(5)
    })
  
    it('should give correct message for empty warehouse', function () {
      expect(warehouse.revision()).to.be.equal('The warehouse is empty')
    })
  })
  describe('Warehouse', () => {
    describe('constructor', () => {
      it('should throw string if givenSpace <= 0 or non-number argument',
        () => {
          assert.throws(() => new Warehouse(-1))
          assert.throws(() => new Warehouse(0))
          assert.throws(() => new Warehouse('not number'))
        })
  
      it('should set Warehouse capacty for valid givenSpace', () => {
        let warehouse = new Warehouse(5)
        assert.equal(warehouse.capacity, 5)
        assert.equal(JSON.stringify(warehouse.availableProducts), '{"Food":{},"Drink":{}}')
      })
    })
  
    describe('addProduct', () => {
      it('should throw string no free space is available', () => {
        let warehouse = new Warehouse(1)
        assert.throws(() => warehouse.addProduct('Food', 'bread', 2))
      })
  
      it('should add products if has enough free space', () => {
        let warehouse = new Warehouse(4)
        warehouse.addProduct('Food', 'bread', 1)
        warehouse.addProduct('Food', 'potatoes', 1)
        warehouse.addProduct('Drink', 'water', 1)
        warehouse.addProduct('Drink', 'cola', 1)
  
        assert.hasAllKeys(warehouse.availableProducts.Food, ['bread', 'potatoes'])
        assert.hasAllKeys(warehouse.availableProducts.Drink, ['water', 'cola'])
      })
  
      it('should return object when adding product successfully', () => {
        let warehouse = new Warehouse(2)
        assert.isObject(warehouse.addProduct('Food', 'bread', 1))
        assert.isObject(warehouse.addProduct('Drink', 'water', 1))
      })
    })
  
    describe('orderProducts', () => {
      it('should sort foods in descending order by quantity', () => {
        let warehouse = new Warehouse(12)
        warehouse.addProduct('Food', 'bread', 1)
        warehouse.addProduct('Food', 'potatoes', 2)
        warehouse.addProduct('Food', 'mushrooms', 3)
        warehouse.orderProducts('Food')
        let foods = JSON.stringify(warehouse.availableProducts.Food)
        assert.equal(foods, '{"mushrooms":3,"potatoes":2,"bread":1}')
      })
  
      it('should sort drinks in descending order by quantity', () => {
        let warehouse = new Warehouse(12)
        warehouse.addProduct('Drink', 'water', 1)
        warehouse.addProduct('Drink', 'cola', 2)
        warehouse.addProduct('Drink', 'lemonade', 3)
        warehouse.orderProducts('Drink')
        let drinks = JSON.stringify(warehouse.availableProducts.Drink)
        assert.equal(drinks, '{"lemonade":3,"cola":2,"water":1}')
      })
    })
  
    describe('occupiedCapacity', () => {
      it('should return a number, which represents the occupied place in the warehouse', () => {
        let warehouse = new Warehouse(10)
        warehouse.addProduct('Food', 'bread', 4)
        assert.equal(warehouse.occupiedCapacity(), 4)
      })
    })
  
    describe('revision', () => {
      it('should return string "The warehouse is empty" for 0 products', () => {
        let warehouse = new Warehouse(4)
        assert.equal(warehouse.revision(), 'The warehouse is empty')
      })
  
      it('should return string with all listed products', () => {
        let warehouse = new Warehouse(4)
        warehouse.addProduct('Food', 'bread', 1)
        warehouse.addProduct('Food', 'potatoes', 1)
        warehouse.addProduct('Drink', 'water', 1)
        warehouse.addProduct('Drink', 'cola', 1)
  
        assert.equal(warehouse.revision(),
          'Product type - [Food]' +
          '\n- bread 1' +
          '\n- potatoes 1' +
          '\nProduct type - [Drink]' +
          '\n- water 1' +
          '\n- cola 1')
      })
    })
  
    describe('scrapeAProduct', () => {
      it('throw error for non existing type', function () {
        expect(() => {
          let warehouse = new Warehouse(5)
          warehouse.addProduct('Food', 'banana', 4)
          warehouse.addProduct('Food', 'apple', 1)
          warehouse.scrapeAProduct('tomato', 1)
        }).to.throw('tomato do not exists')
      })
  
      it('should reduce product quantity', () => {
        let warehouse = new Warehouse(10)
        warehouse.addProduct('Food', 'bread', 10)
        warehouse.scrapeAProduct('bread', 9)
        assert.equal(warehouse.availableProducts.Food.bread, 1)
      })
  
      it('should reduce product quantity', () => {
        let warehouse = new Warehouse(10)
        warehouse.addProduct('Food', 'bread', 10)
        warehouse.scrapeAProduct('bread', 9)
        assert.equal(warehouse.availableProducts.Food.bread, 1)
      })
  
      it('should reset product quantity if goes below 0', () => {
        let warehouse = new Warehouse(10)
        warehouse.addProduct('Food', 'bread', 10)
        warehouse.scrapeAProduct('bread', 11)
        assert.equal(warehouse.availableProducts.Food.bread, 0)
      })
    })
  })