const gelbooru = require('./index');
const parseString = require('xml2js').parseString;

gelbooru.getImage(1, "forced_orgasm", function (data) {
    let cleanedString = data.text.replace("\ufeff", "");
    parseString(cleanedString, function (error, result) {
        if (error)
            console.log("Error", error);
        else {
            console.log(result.posts.post[0].$.file_url);
            var imageURL = result.posts.post[0].$.file_url;
        }
    });
});