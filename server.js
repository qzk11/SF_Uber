var express = require("express");
var app = express(); 

app.use(express.static('public'));
app.get("/", function(req,res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/visualization", function(req,res) {
    res.sendFile(__dirname + "/public/src/index.html");
});
app.get("/contact", function(req,res) {
    res.sendFile(__dirname + "/public/src/contact.html");
});
app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});