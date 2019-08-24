var express = require("express"),
	app 	= express();

app.get("/", function(req , res){
	res.send("It works.");
});

var server = app.listen(3000, process.env.IP, function() {
    var host = server.address().address
    var port = 3000
    console.log("October app is being served at http://localhost:%s/", port);
});