//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")

const app = express();

var items=["Buy Food", "Cook Food", "Eat Food"];
var workItem=[];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"));

app.get("/", function (req, res) {   

    let day= date();

    res.render("list", { ListTitle: day ,newListItem: items});

});

app.post("/", function(req,res){

    let item=req.body.newItem;

    console.log(res.body);

    if(req.body.list === "Work"){
        workItem.push(item);
        res.redirect("/work");
    }
    else{
        items.push(item);
        res.redirect("/")
    }
})


app.get("/work",function(req,res){
    res.render("list",{ListTitle: "Work List", newListItem: workItem});
});



app.listen(3000, function () {
    console.log("Server started on port 3000");
});