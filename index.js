// Modules required to handle the request, and parse the resultant XML.
const agent = require("superagent");
const request = require("request");
const parseString = require('xml2js').parseString;

// Function to get the image XML from the Gelbooru server.
exports.getImage = function (limit, tags, callback) {

    var address = `http://gelbooru.com/index.php?page=dapi&s=post&q=index&limit=${limit}&tags=${tags}`;

    agent.post(address).end(function (err, res) {

        callback(res);

        if (err) {
            console.log(err);
            callback(res);
        }

    });
};

// Function to search a user-defined number of images from Gelbooru, and then pick one randomly, and pass the URL on using a callback function.
exports.getRandomImage = function (limit, tags, callback) {

    var address = `http://gelbooru.com/index.php?page=dapi&s=post&q=index&limit=${limit}&tags=${tags}`;

    agent.post(address).end(function (err, res) {

        let cleanedString = res.text.replace("\ufeff", "");
        parseString(cleanedString, function (error, result) {
            if (error)
                console.log("Error", error);
            else {

                if (typeof(result.posts.post) != "undefined") {
                    let randomImagePicker = Math.floor(Math.random() * (result.posts.post.length - 1)) + 1;

                    var imageURL = result.posts.post[randomImagePicker].$.file_url;

                    callback(imageURL);
                } else {
                    console.log("Error: Number of images is undefined!");
                }
            }
        });


    })

}
