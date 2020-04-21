var bodyParser = require('body-parser');
var express = require("express");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));

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

app.post("/prediction", function (req, res) {
    var pos1 = req.body.input_origin;
    var pos2 = req.body.input_dest;
    // res.send(pos1);
    console.log(pos1, pos2);

})