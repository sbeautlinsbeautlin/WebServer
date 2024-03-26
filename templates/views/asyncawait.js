async function myDisplay(){
    let myPromise=new Promise((resolve,reject)=>{
        resolve("Use of async await");
    });
    let result=await myPromise;
    console.log(result);
}
myDisplay();