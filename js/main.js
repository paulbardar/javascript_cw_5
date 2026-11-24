console.log("Hello Lesson 5");

// class User {

//     #age;
//     #name;
//     #email;


//     country = "Ukraine";  // public
//     constructor(name, age, email) {
//         this.#name = this.#normalizeName(name);
//         this.#age = age;
//         this.#email = email;
//     }

//     greet() {
//         return `Hello , my name is ${this.name}`;
//     }

//     isAdult() {
//         return this.#age > 18;
//     }

//     haveBirthday() {
//         this.#age += 1;
//     }

//     #normalizeName(name) {
//         const trimmedName = name.trim();
//         const firstLetter = trimmedName[0].toUpperCase();
//         const copyName = trimmedName.slice(1).toLowerCase(); 
//         return firstLetter + copyName;
//     }

//     get name() {
//         return this.#name;
//     }

//     get email() {
//         return this.#email;
//     }

//     set email(newEmail) {

//         if(newEmail === "") {
//             console.log("Error email");
//         }
//         return (this.#email = newEmail);
//     }

//     static isValidAge(age) {
//         return Number.isInteger(age) && age >= 0 && age <= 110;
//      }

//     // get age() {
//     //     return this.#age;
//     // }
// }

// const firstUser = new User("    iGoR     ", 35, "igor@mail.com");
// const secondUser = new User("Anna", 24, "anna@mail.com");

// console.log(firstUser.greet());
// console.log(secondUser.greet());

// console.log(firstUser(#age)); // error

// console.log(firstUser.name); 
// console.log(firstUser.age);
// console.log(User.isValidAge(100));

// firstUser.email = "IgorNew@email.com";
// console.log(firstUser.email);


// Lesson 5 Practice
// Tasc CW 1
// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]

// Task CW 2

// class Product {
//     #name;
//     #price;
//     #stock;

//     constructor({ name, price, stock }) {
//         this.#name = this.#normalizeName(name);
//         this.#price = price;
//         this.#stock = stock;
//     }

//   #normalizeName(name) {
//     const trimmed = name.trim();
//     if (!trimmed) return "";
//     return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
//   }
  
//   get name() {
//     return this.#name;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (!Product.isValidPrice(newPrice)) {
//       console.error("Invalid price! The price must be a number between 1 and 1,000,000.");
//       return;
//     }
//     this.#price = newPrice;
//   }

//   get stock() {
//     return this.#stock;
//   }

//   describe() {
//     return `Product: ${this.#name}, price: ${this.#price} UAH`;
//   }

//   isInStock() {
//     return this.#stock > 0;
//   }

//   sell(quantity) {
//     if (quantity > this.#stock || quantity <= 0) {
//       return false;
//     }
//     this.#stock -= quantity;
//     return true;
//   }

//   restock(quantity) {
//     if (quantity > 0) {
//       this.#stock += quantity;
//     }
//   }

//   getPriceWithDiscount(percent) {
//     return this.#price * (1 - percent / 100);
//   }

//   static isValidPrice(price) {
//     return typeof price === "number" && !Number.isNaN(price) && price > 0 && price <= 1000000;
//   }
// }


// const laptop = new Product({
//   name: "   LaPTOP   ",
//   price: 25000,
//   stock: 5,
// });
 
// const phone = new Product({
//   name: "  sMarTfOn ",
//   price: 15000,
//   stock: 0,
// });
 
// console.log(laptop.name); // "Ноутбук"
// console.log(laptop.describe()); // "Товар: Ноутбук, ціна: 25000 грн"
// console.log(phone.isInStock()); // false
 
// console.log(laptop.sell(2)); // true
// console.log(laptop.stock); // 3
// console.log(laptop.sell(10)); // false
// console.log(laptop.stock); // 3
 
// phone.restock(10);
// console.log(phone.stock); // 10
 
// console.log(laptop.getPriceWithDiscount(20)); // 20000
// console.log(laptop.price); // 25000 (не змінилась)
 
// laptop.price = -100; // помилка в консолі
// console.log(laptop.price); // 25000
 
// laptop.price = 27000;
// console.log(laptop.price); // 27000
 
// console.log(Product.isValidPrice(500)); // true
// console.log(Product.isValidPrice("500")); // false
 
// // Розкоментуйте окремо, щоб побачити SyntaxError (приватне поле):
// // console.log(laptop.#price);

// Task CW 3

class Product {
    #name;
    #price;
    #stock;

    constructor({ name, price, stock }) {
        this.#name = this.#normalizeName(name);
        this.#price = price;
        this.#stock = stock;
    }

    #normalizeName(name) {
        const trimmed = name.trim();
        if (!trimmed) return "";
        return trimmed[0].toUpperCase() + trimmed.slice(1).toLowerCase();
    }

    get name() {
        return this.#name;
    }

    get price() {
        return this.#price;
    }

    set price(newPrice) {
        if (!Product.isValidPrice(newPrice)) {
            console.error("Unvalid Price!");
            return;
        }
        this.#price = newPrice;
    }

    get stock() {
        return this.#stock;
    }

    describe() {
        return `Product: ${this.#name}, price: ${this.#price} UAH`;
    }

    isInStock() {
        return this.#stock > 0;
    }

    sell(quantity) {
        if (quantity > this.#stock || quantity <= 0) {
            return false;
        }
        this.#stock -= quantity;
        return true;
    }

    restock(quantity) {
        if (quantity > 0) {
            this.#stock += quantity;
        }
    }

    getPriceWithDiscount(percent) {
        return this.#price * (1 - percent / 100);
    }



    static isValidPrice(price) {
        return typeof price === "number" && !Number.isNaN(price) && price > 0 && price <= 1000000;
    }
}

class Store {
    #products = [];

    get count() {
        return this.#products.length;
    }

    addProduct(product) {
        if (!(product instanceof Product)) {
            console.log("Only instances of the Product class can be added.");
            return false;
        }

        if (this.hasProduct(product.name)) {
            console.error(`The product "${product.name}" already exists in the store.`);
            return false;
        }

        this.#products.push(product);
        return true;
    }

    removeByName(name) {
        const normalized = name.trim().toLowerCase();
        const index = this.#products.findIndex(
            (product) => product.name.toLowerCase() === normalized
        );

        if (index === -1) {
            return false;
        }

        this.#products.splice(index, 1);
        return true;
    }

    getAll() {
        return [...this.#products];
    }
    findByName(name) {
        const normalized = name.trim().toLowerCase();
        return this.#products.find(
            (product) => product.name.toLowerCase() === normalized
        );
    }

    hasProduct(name) {
        const normalized = name.trim().toLowerCase();
        return this.#products.some(
            (product) => product.name.toLowerCase() === normalized
        );
    }

    getInStock() {
        return this.#products.filter((product) => product.isInStock());
    }

    isEverythingInStock() {
        return this.#products.every((product) => product.isInStock());
    }

    getNames() {
        return this.#products.map((product) => product.name);
    }

    getPriceList() {
        return this.#products.map((product) => `${product.name} — ${product.price} UAH`);
    }

    getTotalValue() {
        return this.#products.reduce(
            (total, product) => total + product.price * product.stock,
            0
        );
    }

    getCheapest() {
        if (this.#products.length === 0) {
            return null;
        }
        return this.#products.reduce((cheapest, current) => 
            current.price < cheapest.price ? current : cheapest
        );
    }

    sortByPrice(order = "asc") {
        return [...this.#products].sort((a, b) =>
            order === "desc" ? b.price - a.price : a.price - b.price
        );
    }

    getDiscountedPrices(percent) {
        return this.#products.map((product) => ({
            name: product.name,
            newPrice: product.getPriceWithDiscount(percent),
        }));
    }
}

const store = new Store();
const laptop = new Product({ name: "  LAPTOP ", price: 25000, stock: 5 });
const phone = new Product({ name: "smartFoN", price: 15000, stock: 0 });
const headphones = new Product({ name: "HEADPHONE", price: 3000, stock: 10 });
const mouse = new Product({ name: " mouse ", price: 800, stock: 20 });

console.log(store.addProduct(laptop));  // true
console.log(store.addProduct(phone)); // true
console.log(store.addProduct(headphones)); // true
console.log(store.addProduct(mouse)); // true
console.log(store.addProduct(mouse)); // false
console.log(store.addProduct({ name: "Підробка" })); // false
console.log(store.count); // 4

console.log(store.findByName("  LAPTOP").describe());
console.log(store.findByName("tablet"));
console.log(store.hasProduct("mouse"));
console.log(store.hasProduct("tablet"));

// filter / every
console.log(store.getInStock().map((p) => p.name));
console.log(store.isEverythingInStock());

// map
console.log(store.getNames());
console.log(store.getPriceList());

// reduce
console.log(store.getTotalValue());
console.log(store.getCheapest().name);

console.log(store.sortByPrice().map((p) => p.name));
console.log(store.sortByPrice("desc").map((p) => p.name));

console.log(store.getNames());

// map з новими об'єктами
console.log(store.getDiscountedPrices(10));

// Захист внутрішнього масиву
const all = store.getAll();
all.push("waste");
all.length = 0;
console.log(store.count);

// splice / findIndex
console.log(store.removeByName("smartfon"));
console.log(store.removeByName("smartfon"));
console.log(store.getNames());
console.log(store.isEverythingInStock());

// порожній магазин
const empty = new Store();
console.log(empty.getCheapest()); // null
console.log(empty.getTotalValue()); // 0
console.log(empty.isEverythingInStock()); // true (!) — так працює every
