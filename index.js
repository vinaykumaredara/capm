const srvMethods = require("@sap/cds/lib/srv/srv-methods");

// const { log } = require("csap/cds");
const students = [
  { name: "Amit", marks: [80, 75, 90] },
  { name: "Neha", marks: [60, 70, 65] },
  { name: "Ravi", marks: [95, 85, 92] }
];
const sAmit = students[0].marks.reduce((total, current) => total + current, 0);
const sNeha = students[1].marks.reduce((total, current) => total + current, 0);
const sRavi = students[2].marks.reduce((total, current) => total + current, 0)



if (sAmit >= sNeha){
    console.log("Amit is topper with marks of" + sAmit)
}else if (sNeha >= sRavi){
    console.log("Neha is topper with marks of " + sNeha);
}else if (sRavi >= sAmit){
    console.log("Ravi is topper with marks of " + sRavi);
}else{
    console.log("undefined");
}


let top = [sAmit, sNeha, sRavi]
console.log(Math.max(...top));

// console.log(Math.min(...smark));
