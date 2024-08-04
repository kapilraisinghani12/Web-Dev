// callbacks - a function that is passed as an argument to another function;

// used to handle asynchronous operations:
// 1. reading a file
// 2. Network requests
// 3. Interaction with databases

// "Hey when you're done, call this next"

// hello(goodbye);

// function hello(callback){
// setTimeout(function(){
//     console.log("hello");
//     callback();
// }, 3000);
// }
// function goodbye(){
//     console.log("goodbye");
// }

//forEach() method -
// array.forEach(callback)
// element, index, array are provided

// let nums = [1, 2, 3, 4, 5];
// console.log(nums)
// nums.forEach(triple);
// console.log(nums)
// nums.forEach(double);
// console.log(nums)
// nums.forEach(display);

// function display(e) {
//   console.log(e);
// }
// function double(element, index, array) {
//   array[index] = element * 2;
// }
// function triple(element, index, array) {
//   array[index] = array[index] * 3;
// }

// function findMax(element, index, array){
//     let max = 0;
//     if(array[index] > max){
//         max = array[index];
//     }
//     return max;
// }

let fruits = ['apple', 'orange', 'banana', 'pineapple'];

// fruits.forEach(upperCase)
fruits.forEach(capFirstLetter);
fruits.forEach(display);
function display(e) {
  console.log(e);
}
function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}
function capFirstLetter(element, index, array) {
  array[index] =
    element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}
// key point - forEach makes changes in the same array

// .map() - accepts a callback and applies that function to each
//          element of the array, then returns a new array.

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(square);
console.log(numbers);
console.log(squares);
const upperFruit = fruits.map(toUpperCase);
console.log(upperFruit);
console.log(fruits);
function toUpperCase(element) {
  return element.toUpperCase();
}

function square(element) {
  return element ** 2;
}

const dates = ['11-12-2003', '07-19-2030', '12-28-2012'];

const formattedDates = dates.map(formatDates);
console.log(dates);
console.log(formattedDates);

function formatDates(element) {
  const parts = element.split('-');
  return `${parts[1]}/${parts[0]}/${parts[2]}`;
}

// .filter() = creates a new array by filtering out elements;)

const ages = [13, 14, 18, 23, 12, 76, 23, 11, 54, 36, 26, 43, 75, 21, 18, 10];

//objective - to filter out ages<18
const eligibleAges = ages.filter(isEligible);
console.log(eligibleAges);
function isEligible(element) {
  return element >= 18;
}

//.reduce() = reduce the elements of an array to a single value

const prices = [20, 30, 12, 20, 220, 650, 783, 65, 33, 445, 76];

const total = prices.reduce(sum);

console.log(total);

function sum(accumulator, element) {
  return accumulator + element;
}

const maximum = prices.reduce(max);
console.log(maximum);

function max(prev, next) {
  if (prev < next) {
    prev = next;
  }
  return prev;
}
function min(prev, next) {
  if (prev > next) {
    prev = next;
  }
  return prev;
}

//function declaration and expressions

// declaration - define a reusable block of code that performs a specific task.

// function hello(){
//     console.log(`Hello`);
// }

// hello();
// expression - a way to define functions as values or variables

setTimeout(function () {
  console.log(`Hello`);
}, 3000);

const nums = [1, 2, 3, 4, 5, 6];

const cubed = nums.map(function (e) {
  return Math.pow(e, 2);
});
console.log(cubed);

// timeline - function declaration first and then function expression

const filteredEven = cubed.filter(function (e) {
  return e % 2 == 0;
});
console.log(filteredEven);

const totale = filteredEven.reduce(function (prev, next) {
  return prev + next;
});
console.log(totale);

// Arrow Functions

const hi = (name, age) => {
  console.log(`Hello ${name}`);
  console.log(`You are ${age} years old`);
};
hi(`kapil`, 18);


const n = numbers.map((element) => Math.pow(element, 4));
console.log(n);

const mulThree = n.filter((e)=>e%3==0);
console.log(mulThree);