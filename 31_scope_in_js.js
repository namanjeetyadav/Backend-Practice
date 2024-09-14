// Scopes in javascript 

{
    let a = 8;
}
console.log(a);
// This will show an error because let is block scoped

{
    var b = 8;
}
console.log(b);

// This will run becasue var is global scoped

function f1(){
    let c = 8;
    console.log(c)
}
f1()
console.log(c) 
// This console.log will show the error because here a is function scoped