const functions = require('firebase-functions');

var express = require('express');
var bodyParser  = require("body-parser");

var app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.render("home.ejs");
});

app.post("/getfacts", function(req,res){
    input= req.body.form;
    res.render("results.ejs", {input: input});
});

app.listen(3000, function(req,res){
    console.log("fact4me backend up!");
});

exports.app = functions.https.onRequest(app);