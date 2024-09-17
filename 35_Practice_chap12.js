// Q1. Write a javascript program to print the following after two second of delay
//  Hello 
// Hello2

const a = (text)=>{
   return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(text);
    }, 2000);
   })
}

(async()=>{
       let text = await a("Hello");
        console.log(text);
        text = await a("Hello2")
        console.log(text);
    }
)
();


// Q2. Write the javascript program to find the average of numbers in the array

let ary = [2,3,4]
function sum(a1, b1, c1){
    return (a1 + b1 + c1)/ary.length 
}

console.log(sum(...ary));

//Q3. Write a javascript function which resolves a Promise after n seconds. The function 
// takes n as the parameter, Use IIFE to execute the function with diffrent values of n.

const ab = (text, n=2)=>{
    return new Promise((resolve, reject)=>{
     setTimeout(() => {
         resolve(text);
     }, 2000 * n);
    })
 }
 
 (async()=>{
        let text = await ab("I am resolving after 1sec", 1);
         console.log(text);
         text = await ab("I am resolving after 4sec", 4);
         console.log(text);
     }
 )
 ();


//  Q4 Simple Interest Calculator

function simpleInterest(p,r,t){
    return (p * r * t)/100;
}

console.log(simpleInterest(100,8,5))