//ARRAYS IN JS IS COLLECTION OF ITEMS.

const { log } = require("@sap/cds");
const cdsLog = require("@sap/cds/lib/log/cds-log");

let marks = [100, 200, 300] //array
marks[0] = 99; //update the value in array.
console.log(marks);

//looping over an array

let heroes = ["rahul", "revanth", "hari", "anusha", "sreelekha"];
for(let i=0; i<heroes.length; i++){ //for loop
    console.log(heroes[i]);
}

//for-of looop is prefred.
for(let hero of heroes){
    console.log(hero)
}

// 1  PRACTICE: FIND THE AVERAGE MARKS OF THE ENTIRE CLASS:
let student =[85,97,44,37,76,60];
sum = 0
for(let val of student){
    sum += val;
}   
avg=sum/student.length;
console.log(`Avg marks of the class ${avg}`);

//2 FOR A GIVEN ARRAY WITH PRICES OF 5ITEMS ->[250, 645, 300, 900, 50]
// ALL ITEMS HAVE AN OFFER OF 10% OFF ON THEM.CHANGE THE ARRAY TO STORE FINAL PRICE OFTER APPLYING THE OFFER.

let prices = [250, 645, 300, 900, 50];
let i = 0
for(let val of prices){
    offer= val/10;
    prices[i] = prices[i] - offer;
    i++;
}
    console.log(`The offer prices are [${prices}]`);


//ARRAY METHODS:

let food = ["apple", "tomato", "banana"];
console.log(food)       //PUSH(): ADD A VALUE TO THE END OF ARRAY. 
food.push("chips")      
console.log(food)       

//POP(): DELETE FROM END OF ARRAY AND RETURN THE DELETED VALUE.
food.pop();
console.log(food);

//TOSTRING(): CONVERT ARRAY TO STRING 
console.log(food.toString()); //it will return string, without makeing any changes in orginal array.

//CONCAT(): JOINS MULTIPLE ARRAYS & RETURNS RESULT.
let marvel=["thor", "spiderman", "ironman"];
let dc=["batman", "superman"];
console.log(marvel.concat(dc)); //it will add both the arraye and gives single array.

//UNSHIFT(): ADD TO START IT WILL WORK LIKE PUSH BUT IT ADDS VALUE AT STARTING OF AN ARRAY.

marvel.unshift("antman");
console.log(marvel);

//SHIFT: delete from start & return WILL DELETE THE FIRST ELEMENT IN THE ARRAY:
console.log(marvel.shift());

//SLICE(): RETURNS A PIECE OF ARRAY. 
console.log(marvel.slice(1, 3));

//SPLICE(): CHANGES ORIGINAL ARRAY(ADD, REMOVE, REPLACE): WE CAN ADD REMOVE REPLACE IN THE ORGINAL ARRAY
//SYNTAX: SPLICE(start index, delete index, new element).

let num =[1,2,3,4,5,6,7]
num.splice(2,2,33);
console.log(num);

//3 practice: Create an array to store companies 
// and remove the first company from the array
// remove uber & add ola in its place
// add amazon at the end.

let company = ["Bloomberg", "Microsoft", "uber", "google", "IBM", "Netflix"];

company.shift() //it will remove 1st thing in the array.
console.log(company)

company.splice(2,1,"ola");
console.log(company);

company.push("Amazon")
console.log(company)