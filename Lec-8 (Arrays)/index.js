

// arrays

let fruits = ["mango", "apple", "banana","pineapple", "kiwi", "guava"];
fruits.push("coconut");
// fruits.pop(); // pops the last element
fruits.unshift("garlic"); //pushes at the start
// fruits.shift(); //pops from the begining

// fruits.indexOf("apple");




// spread operator(...) - allows an iterable such as an array or string to be expanded into seperate elements
// it basically unpacks the elements.

let numbers = [1,2,3,4,5];
let maxi = Math.max(...numbers); // numbers alone would not work
console.log(maxi);

let username = "Kapil Raisinghani";

let letters = [...username].join("-");
console.log([letters]);

let vegies = ["carrot", "cauliflower", "cucumber"];

console.log(fruits, vegies);
let foods = [...fruits, ...vegies, "eggs", "milk"];
console.log(foods); //combines arrays


let x = foods.length;


    i = Math.floor(Math.random()*(x));
    console.log(foods[i]);

// rest parameters = (...rest) allow a function work with a variable number of args by bundling them into an array
//spread - expands
//rest - bundles seperate elements into an array

const food1 = "pizza";
const food2 = "burger";
const food3 = "hot dog";
const food4 = "sushi";

function openFridge(...junkfood){
    let arrayOfFoods = junkfood;
    console.log(...arrayOfFoods);
}

openFridge(food1, food2, food3, food4);


function sum(...numbers){
    let result = 0;
    
    for(let number of numbers){
        result+=number;
    }
    return result;
}
function average(...numbers){
    let result = 0;
    
    for(let number of numbers){
        result+=number;
    }
    return result/numbers.length;
}


console.log(`your sum is ${sum(1,2,1,45)}`)
console.log(`your average is ${average(1,2,3,4,1,2,1,100,111,1001,11,1,11,1,0,0,0,0,0,0,0,10,21111,32).toFixed(2)}`);



function conbineString(...words){
   
    return words.join(" ");
}

const fullname = conbineString("kapil", "raisinghani",",", "a","true", "idiot", ".");

console.log(fullname);