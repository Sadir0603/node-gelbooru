const agent = require("superagent");
const request = require("request");
const parseString = require('xml2js').parseString;

exports.getImage = function(limit, tags, callback){

    var results;

    var address = `http://gelbooru.com/index.php?page=dapi&s=post&q=index&limit=${limit}&tags=${tags}`;
    agent.post(address).end(function (err, res) {

        let cleanedString = res.text.replace("\ufeff", "");
        parseString(cleanedString, function (err, result) {
            if (err)
                console.log("Error", err);
            else {
                console.log(result.posts.post[0].$.file_url);
                var output = result.posts.post[0].$.file_url;
                callback("http:" + output);
            }
        });

        if (err) {
            console.log(err);
            callback(res);
        }
    });
};