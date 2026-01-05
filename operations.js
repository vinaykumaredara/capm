//ASIGNMENT OPERATORS
let a = 10;
let b = 20;

a += 4 //a = a + 4
a -= 4 //a = a - 4
a **= 4 //a = a ** 4
console.log(a)

//Comparsion operatores
console.log(a==b);     //Equal to == it will return False.
console.log(a!=b);     //Not equal to != it will return True.

//Logical Operatores
console.log("Logical Operatores start hear: ")
console.log(a <= b && b>=a)// Logical AND &&
console.log(a==b || a<=b)// logical OR ||
console.log(!(a<10))// logical NOT !(converts true into false).

//Conditional Statements
console.log("Conditional Statements");
let age = 21            
if (age >= 18){             // IF STATEMENT.
    console.log("Greater than 18");
}else if (age == String){   // ELSE IF STATEMENT.
    console.log("Enter valid input");
}else{                      // ELSE STATEMENT.
    console.log("Not Greater than 18");
}

//TERNARY OPERATORS CONDITION?TRUE OUTPUT : FALSE OUTPUT.
console.log(age > 18? "adult": "Not adult");   //(condation?if true:if false)
// let M = 10;
let M=30;
console.log(10==M? "mail": 20==M?"Femail":"others");

//Practice question:
// alert("hello");
// prompt("hello");
let num = 5;

if (num%5 ==0){
    console.log("div by 5");
}else{
    console.log("not div by 5");
}

console.log(num%5==0?"div by 5":"not div by 5");

let grade = 80;

if (grade >= 80 && grade <=100){
    console.log("A");
}else if(grade >= 70 && grade <= 89){
    console.log("B");
}else if(grade >= 60 && grade <=69){
    console.log("c");
}

