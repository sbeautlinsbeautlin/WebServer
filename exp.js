const express=require('express');
const app=express();

app.get("/product",(req,res,next)=>{
    res.send("This is simple get request for product");

})
//for get request
app.get("/product/:id",(req,res,next)=>{
    // res.send("This is simple get request for product");
    res.send({id:11,name:"Laptop",price:"40000"});

})
app.delete("/product",(req,res,next)=>{
    res.send("This is simple delete request for product");
    
})
app.post("/product",(req,res,next)=>{
    res.send("This is simple post request for product");
    
})
app.put("/product",(req,res,next)=>{
    res.send("This is simple put request for product");
    
})
app.listen(8888,()=>{
    console.log("my server get started");
})