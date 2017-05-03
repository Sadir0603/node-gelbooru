// Need the main index, as well as the ability to parse XML.
const gelbooru = require('./index');
const parseString = require('xml2js').parseString;

// Function call to get 1 image with the tag blond hair, using the callback function to parse the xml.
gelbooru.getImage(1, "blond_hair", function (data) {
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
