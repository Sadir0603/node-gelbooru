// Need the main index.
const gelbooru = require('./index');

// Function call to search 500 images that are tagged with 'blond hair', and then log the URL of one of them.
gelbooru.getRandomImage(500, "blond_hair", function (data) {

    console.log(data);
});