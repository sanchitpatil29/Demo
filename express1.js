///define express object
//load expressjs and create a object
var express=require("express");
var app=express();   ///create a object express

///configure setting
///define middleware
app.use(function(req,resp,next){
    console.log("middleware 1111");
    next();
})

app.use(function(req,resp,next){
    console.log("middleware 22222");
    next();
})


///define all routes

app.get("/",function(req,resp){
    resp.send("<h1>Hello world!!</h1>");
});
app.get("/aboutus",function(req,resp){
   resp.send("<h1>about us</h1>");
});

///create the server and start the server at port 3000

app.listen(3000,()=>{
    console.log("listenig at port 3000");
});
