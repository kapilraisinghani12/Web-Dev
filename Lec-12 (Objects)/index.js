//object = A collection of related properties and/or methods
//         Can represent real world objects (people, products, places)
//         object = {key:value,
//                   function()}

const person = {
  firstName: `Kapil`,
  lastName: `SquarePansts`,
  age: 30,
  isEmployed: true,

  sayHello: () => {
    console.log(`Hello! I am Kapil`);
  },
};
console.log(person.age);
console.log(person.lastName);
console.log(person.firstName);
person.sayHello();

// This = reference to the object where THIS is used
//  (the object depends on the immidiate context)
//  person.name = this.name
const person1 = {
  name: 'Spongebob',
  favFood: 'Hamburgurs',
  sayHello: function () {
    console.log(`Hi! there ${this.name}`);
  },
};
person1.sayHello();

//Constructors - a special method for defining the properties and methods of objects.

function Car(make, model, year, color) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.color = color),
    (this.drive = function () {
      console.log(
        `You drive a ${make} ${model}. This is a model from the year ${year}. Your car is ${color} in color.`
      );
    });
}

const car1 = new Car('Ford', 'Mustang', 2024, 'red');
const car2 = new Car('Nissan', 'GT', 2017, 'black');
const car3 = new Car('Dodge', 'Charger', 2022, 'purple');

console.log(car1.make);
console.log(car1.model);
console.log(car3.model);
car1.drive();
car3.drive();

function Commodity(name, price) {
  this.name = name;
  this.price = price;

  this.display = () => {
    console.log(`Product : ${name}`);
    console.log(`Price : $${price}`);
  };
}

const c1 = new Commodity('Guitar', 12);
c1.display();
// Class - provides a more structured and cleaner way to work with objects compared to traditional constructor functions eg. static keyword, encapsulation, inheritance

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  display() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: $${this.price}`);
  }
}

const p1 = new Product('Drum', 23);
p1.display();

// static = keyword that defines properties or methods that belong to a class itself rather than th eobjects created from the class (class owns anything static, not the object)

class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }

  static getCircumference(radius) {
    return (2 * this.PI * radius).toFixed(3);
  }

  static getArea(radius) {
    return (this.PI * radius ** 2).toFixed(3);
  }
}

const MU1 = new MathUtil();
console.log(MathUtil.getArea(3));

//Mix of regular and static properties and methods

class User {
  static allUsernames = [];

  static n = 0;
  constructor(name) {
    this.name = name;
    User.allUsernames.push(name);
    User.n++;
  }

  static getAllUsernames() {
    console.log(User.allUsernames);
    console.log(`total users - ${User.n}`);
  }

  static removeUser(rem) {
    if (User.allUsernames.includes(rem)) {
      const e = User.allUsernames.indexOf(rem);
      User.allUsernames.splice(e, 1);
      console.log(`removed user ${rem}`);
      console.log(`users left - ${User.allUsernames}`);
      User.n--;
    } else {
      console.log('name does not exist');
    }
  }
}

const u1 = new User('kapil');
const u2 = new User('Jatin');
const u3 = new User('hemesh');
const u4 = new User('rakhi');
const u5 = new User('rakhi');

User.getAllUsernames();
User.removeUser('kapil');
User.removeUser('Jatin');
User.removeUser('Jatin');

User.getAllUsernames();

//-------------------------------------------------------------

class Intern {
  static internDB = [];
  constructor(id, name, location) {
    (this.id = id), (this.name = name), (this.location = location);
    const internInfo = {
      id: id,
      name: name,
      location: location,
    };
    // console.log(internInfo)
    Intern.internDB.push(internInfo);
  }
  static showDB() {
    for (let i = 0; i < Intern.internDB.length; i++) {
      console.log(
        `ID: ${Intern.internDB[i].id}, NAME: ${Intern.internDB[i].name}, LOCATION: ${Intern.internDB[i].location}`
      );
    }
  }
}



const i2 = new Intern(2, 'jatin', 'kanpur');
const i3 = new Intern(3, 'namish', 'jaunpur');
const i4 = new Intern(4, 'kurgesh', 'jaipur');
const i5 = new Intern(5, 'kurgesh', 'jaipur');
const i6 = new Intern(6, 'puttan', 'banglore');
Intern.showDB();