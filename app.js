//jshint esversion:6
const express = require("express");
const app = express();
const date = require(__dirname + "/date.js");
app.set("view engine", "ejs");
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let items = ["Buy Food", "Cook Food", "Eat Food"];
let worksItem = [];

app.get("/", function (req, res) {

    day = date.getDay();

    res.render("list", {
        listTitle: day,
        newListItems: items
    });
});

app.post("/", (req,res)=>{
    let item = req.body.newItem;
    
    if (req.body.list==="Work"){
        worksItem.push(item);
        res.redirect("/work")
    }else{
        items.push(item);
        res.redirect("/");
    }

    
});


app.get("/work",function(req,res){
    res.render("list", {
        listTitle: "Work List",
        newListItems: worksItem
    })
});

app.get("/about",function(req,res){
    res.render("about");

});

// app.post("/", function(req,res){
//     let worklist = req.body.newItem;
//     console.log(worklist);

// });


app.listen(3000, function () {
    console.log("Server are running on port 3000");
});