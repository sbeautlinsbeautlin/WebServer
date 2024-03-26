function myValues(data){
    console.log(`My value is ${data}`);
}
let myPromise=new Promise((resolve,reject)=>{
    //producing code
    let x=10;
    if(x==0){
       resolve("I Complete myPromise")
    }else{
        reject("I don't know who you are");
    }
});
//consuming code
myPromise.then((value)=>{myValues()},(error)=>{myValues(error)});
