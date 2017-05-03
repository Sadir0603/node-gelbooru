// Modules required to handle the request, and parse the resultant XML.
const agent = require("superagent");
const request = require("request");
const parseString = require('xml2js').parseString;

// Function to get the image XML from the Gelbooru server.
exports.getImage = function(limit, tags, callback){

    var address = `http://gelbooru.com/index.php?page=dapi&s=post&q=index&limit=${limit}&tags=${tags}`;
    agent.post(address).end(function (err, res) {

        callback(res);

        if (err) {
            console.log(err);
            callback(res);
        }

    });
};
