//LOOPS IN JS.

for(let count =1; count<=2; count++) {        
    console.log("hello");
}
let sum = 0
for(let n= 1; n<=5;n++){
    sum+=n;
}
console.log(sum);  //for loop for(initilize;stop cond;updation)

let i = 1;
while(i<=1){
    console.log("hi ");
    i++;
}            //While loop while(condition)

let j = 1;
do{
    console.log(j)
    j++;
}while(j<=5);   //do while loop

let str = "vinay"
let len = 0;
for(let i of str){//iterator
    console.log(i);
    len++
}                //for-of loop-> it will help to iterat in string and arrays.                   
console.log(len) //It will go through every char in str.
console.log(str.length) // to get the length of a string we use str.length.
console.log(str[4]) //it will print particular char of the string.

let student ={
    name: "vinay",
    age: 22,
    cgpa: 7.5,
    ispass: true
}         
for(let key in student){
    console.log(student[key])
}    //for-in loop-> it is used for objects and arrays.

//Template Literals: A Way to have embedded experssions in string.
//syntax: `string text ${expression} string text`
let obj={
    item: "pen",
    price: "20"
};
console.log("The cost of", obj.item, "is", obj.price, "rupees") //normal way
console.log(`The cost of the ${obj.item} is ${obj.price} rupees`) // Template literals
// "/n" for next line.
// "/T" for tab space.

//String Methods.
console.log(str.toUpperCase()) //it will convert the char to upper case.
console.log(str.toLowerCase()) //it will convert the char to lower case.
//str.trim() will remove white spacess. 
//Practice
console.log("EVEN NUMBERS FROM 0 TO 100")
for(let num=0;num<=10;num++){
       if (num%2==0){
        console.log(num )
       }
}

