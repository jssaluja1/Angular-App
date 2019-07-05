var express = require("express");
var app = express();

var HTTP_PORT = process.env.PORT || 8080;

var path = require("path");

// setup the static folder 

app.use(express.static("public")); 
// Start the server


app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(HTTP_PORT, function(){

    console.log("Server listening on port: " + HTTP_PORT);

});

