require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
 
 
let port = process.env.PORT;
let host = process.env.HOST;
 
app.use(express.static(__dirname+"/public"));
let viewPath = path.join(__dirname+'/templates/views');
let partialPath = path.join(__dirname+'/templates/partials');
 
app.set("view engine","hbs");
app.set("views",viewPath);
 
hbs.registerPartials(partialPath);
 
 
app.get("/",(req,res,next)=>{
    // res.send("this is home page");
    res.render("index",{
        title:"Home",
        auther:"marymerlin"
 
    })
 
   
})
app.get("/index",(req,res,next)=>{
    // res.send("this is home page");
    res.render("index",{
        title:"Home",
        auther:"marymerlin"
 
    })
   
   
})
app.get("/about",(req,res,next)=>{
    // res.send("this is about page");
    res.render("about",{
        title:"about",
        auther:"Smirthi"
    })
})
app.get("/service",(req,res,next)=>{
    // res.send("this is service page");
    res.render("service",{
        title:"service",
        auther:"ranjith"
    })
})
app.get("/contact",(req,res,next)=>{
    // res.send("this is contact page");
    res.render("contact",{
        title:"contact",
        auther:"akaasj"
    })
})
app.get("/help",(req,res,next)=>{
    // res.send("this is help page");
    res.render("help",{
        title:"help",
        auther:"swarnim"
    })
})
app.get("*",(req,res,next)=>{
    // res.send("404....page not found");
    res.render("404",{
        title:"404...not found",
        auther:"kowsalaya"
    })
})
 
 
app.listen(port,()=>{
    console.log(`server get started on ${host}:${port}`);
});
 