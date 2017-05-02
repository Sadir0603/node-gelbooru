const gelbooru = require('./index');
const parseString = require('xml2js').parseString;

gelbooru.getImage(1, "forced_orgasm", function (data) {
    //let cleanedString = data.text.replace("\ufeff", "");
    //parseString(cleanedString, function (err, result) {
    //    if (err)
    //        console.log("Error", err);
    //    else {
    //        console.log(result.posts);
    //        var output = result.posts.post[0].$.file_url;//.replace("//","");
    //        // callback("http://"+output);	
    //        callback("http:" + output);
    //    }
    //});
});