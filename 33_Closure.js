// function init() {
//     var name = "Naman"  
//     // name is a local variable created by init
//   function displayName(){
//     console.log(name);
//   }

//   displayName();
// }
// init()

// Inner function can access the variable of outter function



function returnFunc(){
    const x = () =>{
        let a = 1;
        console.log(a)
        const y = () =>{
            console.log(a)
            const z = () =>{
                console.log(a)
            }
            z()
        }
        a = 999;
        y()
    }
    return x
}
let a = returnFunc()
a()

