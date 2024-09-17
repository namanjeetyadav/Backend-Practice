// Write a javascript program to print the following after two second of delay
//  Hello 
// World

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