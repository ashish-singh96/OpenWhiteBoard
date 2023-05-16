const express=require("express");
const soket=require("soket.io");

const app=express();
let port=5000;
let server= app.listen(port,()=>{
    console.log("listing to port"+port); 
})