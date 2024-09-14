// Scopes in javascript 

{
    let a = 8;
}
console.log(a);
// This will show an error because let is block scoped

{
    var a = 8;
}
console.log(a);

// This will run becasue var is global scoped

function f1(){
    let a = 8;
    console.log(a)
}
f1()
console.log(a) 
// This console.log will show the error because here a is function scoped