const agent = require("superagent");
const request = require("request");
const parseString = require('xml2js').parseString;

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