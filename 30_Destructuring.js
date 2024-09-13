// let arr = [3,5]
// let [a,b] = arr
// console.log(a,b)

// using rest

// let arr = [3,5,8,2,0,7,6]
// let [a,b,c,d, ...rest] = arr
// console.log(a,b,c,d,rest)

// let arr = [3,5,8,2,0,7,6]
// let [a, , , ...rest] = arr
// console.log(a, rest)

// 
// let {a, b} = {a:1, b:5}
// console.log(a,b)

// Spread operator syntax (Array to object)

let arr1 = [3,5,9]
let obj1 = {...arr1}
console.log(obj1)

// Giving the all value to function which is in the array

function sum (v1,v2,v3){
    return v1+v2+v3
}

console.log(sum(...arr1))


// Overwrite things in object

let obj2 = {
    name: "Naman",
    company: "taxbrick",
    address: "kanpur"
    }
    console.log({...obj2, name:"John"})
    console.log(obj2)