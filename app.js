const express = require("express");
const postRoute = require("./Routes/postsRoute");
const userRoute = require("./Routes/UsersRoute");
const app = express();
const port =3001;




//it will parse all request body into json format
app.use(express.json());
 
//may use for login
app.use((req,res,next)=>{
    console.log("common middleware");
    next();
  });

app.use("/posts",postRoute);
app.use('/users',userRoute);




/*
//req - request,res-response,next-to call next middleware
app.use("/posts",(req,res,next)=>{
    console.log("posts middleware called");
    next();
});

app.use("/users",(req,res,next)=>{
    console.log(" users middleware  called");
    next();
});

app.use((req,res,next)=>{
  console.log("common middleware");
  next();
});
*/




/*
//below are the routes in express js
//read
app.get("/posts",(req,res)=>{
    console.log("get posts");
    //find() query
    res.send(posts);//sending response
})


//create
app.post("/posts",(req,res)=>{
    console.log("post posts");
    console.log(req.body);
    //insertOne query
    res.send({...req.body ,id:101});//sending response
})


//update
app.put("/posts/:id",(req,res)=>{
    console.log("put posts");
    console.log(req.params);
    console.log(req.body);
    //findOneandUpdate query
    res.send({...req.body ,id:req.params.id});//sending response
})


//delete
app.delete("/posts/:id",(req,res)=>{
    console.log("delete posts");
    console.log(req.params);
    //remove() query
    res.end();
})

//users get
app.get("/users",(req,res)=>{
    console.log("users get");
    res.send(users);
})*/
//to give a port to server
app.listen(port,()=>{console.log(`server starts at ${port}`);});