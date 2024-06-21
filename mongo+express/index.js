const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const port = 3000;
const Chat = require("./models/chat.js");
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
const methodoverride = require("method-override");
app.use(methodoverride("_method"));
app.listen(port,()=>{console.log("Sever started ",port);});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

async function main()
{
    await mongoose.connect('mongodb://127.0.0.1/whatsapp');
}
main().then((res)=>{console.log("MongoDB connected");}).catch((err)=>{console.log(err);})

app.get("/chat",(req,res)=>{
    Chat.find({})
    .then((result)=>
        {
            console.log(result);
            res.render("chat.ejs",{result})
        })
    .catch((err)=>
        {
            console.log(err);
        })
})


app.get("/chat/new",(req,res)=>{
    res.render("form.ejs");
})

app.post("/chat",(req,res)=>{
    Chat.create(req.body)
        .then((result)=>{res.redirect("/chat");})
        .catch((err)=>{console.log(err)});
})

app.delete("/post/:id",(req,res)=>{
    let {id} = req.params;
    Chat.findByIdAndDelete(`${id}`)
        .then((result)=>{res.redirect("/chat")})
        .catch((err)=>{console.log(err)});
})