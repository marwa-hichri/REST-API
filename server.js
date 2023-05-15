const express=require('express');
require('dotenv').config();
const connectDB =require("./config/connectDB");
const userroute= require("./router/contact")
const app = express();
const PORT =process.env.PORT || 4545;
connectDB();
app.use(express.json());
app.use("/api/user",userroute);
// app.get("/",(req,res)=>{res.status(200).send("hello from server")})

app.listen(PORT,(err)=>{
    err? console.log(err)
    :console.log("server is run on port",PORT)
})