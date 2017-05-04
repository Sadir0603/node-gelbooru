# node-gelbooru
A test nodeJS module to obtain images from Gelbooru. This is just a test for now, to see how easy it will be to interact with Gelbooru.

## Getting Started
This readme should give a basic understanding of how to use this module, and its functions. Each function will have a simple explanation, with an example of how it is used. The test file shows an example of how an implementation of this module would work.

### getImage
This function pulls the data of one or more images from Gelbooru, and makes them accessible via a callback function.
```
getImage(1, "blond_hair", function (data) {
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
```
The above example would obtain the data on one image with the tag 'blond hair', and then using the callback function with the variable 'data', the resultant XML from Gelbooru is parsed, making it possible to access the URL of the image (stored in the variable imageURL).

### getRandomImage
This function searches a user-defined number of images with the given tags on gelbooru, and then randomly returns the URL of one of the images.
```
gelbooru.getRandomImage(500, "blond_hair", function (data) {    
console.log(data);
});
```
The above example calls this function to search 500 images with the tag 'blond hair', and then prints the resulting URL to the console.
