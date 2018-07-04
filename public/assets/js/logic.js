function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    var userInfo = {
        profile_pic: profile.getImageUrl(),
        user_name: profile.getName(),
        email: profile.getEmail(),
    }
    //console.log(googleUser);
    $(".welcome").css("display", "none");
    $(".booksBG").css("display", "none");
    $("#data").css("display", "block");

    $("#pic").attr('src', profile.getImageUrl());
    $("#name").text(profile.getName());
    $("#email").text(profile.getEmail());

    $.ajax({
        url: "/api/users", method: "POST", data: userInfo, success: function (result) {
            $(console.log(result));
        }
    });
    // The ID token you need to pass to your backend:
    var id_token = googleUser.getAuthResponse().id_token;
    // console.log("ID Token: " + id_token);

};


function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
        alert("You have been successfully signed out");

        $(".welcome").css("display", "block");
        $("#data").css("display", "none");
    });
}

function findBook() {
    var title = $("#title").val();
    var author = $("#author").val();
    var searchResults = {};

    $.get("/book?title=" + title + "&limit=10", function (data) {
        console.log("DAT YUNG DATA ====>", data)
        $("#book-search").empty();

        for (var i = 0; i < data.items.length; i++) {
            console.log("Title: " + data.items[i].volumeInfo.title);
            console.log("Author: " + data.items[i].volumeInfo.authors[0]);
            console.log("Genre: " + data.items[i].volumeInfo.categories[0]);
            console.log("Copyright Date: " + data.items[i].volumeInfo.publishedDate);
            console.log("ISBN: " + data.items[i].volumeInfo.industryIdentifiers[0].identifier);
            console.log("Cover Art: " + data.items[i].volumeInfo.imageLinks.thumbnail);
            console.log("Synopsis: " + data.items[i].volumeInfo.description);

            //Create a parent div
            var bookSearch = $('<div>');
            //Add a class to the div
            bookSearch.addClass("results");
            //Add an id for each of the items that will arrive on the list
            bookSearch.attr("id", "item-" + i);

            //Add all books to page

            // make the name an h2,
            bookSearch.append("<h2>" + data.items[i].volumeInfo.title + "</h2>");

            // the author an h3,
            bookSearch.append("<h3>Author: " + data.items[i].volumeInfo.authors[0] + "</h3>");

            //the cover art an img tag
            bookSearch.append("<img src=" + data.items[i].volumeInfo.imageLinks.thumbnail + " alt='cover art' height='200' width='200'>");

            // the genre an h3,
            bookSearch.append("<h4>Genre: " + data.items[i].volumeInfo.categories[0] + "</h4>");

            //the copyright date an h3
            bookSearch.append("<h4>Genre: " + data.items[i].volumeInfo.publishedDate + "</h4>");

            // the synopsis an h5,
            bookSearch.append("<h6>Synopsis: " + data.items[i].volumeInfo.description + "</h6>");

            //A recommend button
            bookSearch.append("<button type='button'>Recommend this title.</button>");

            //A shelf button
            bookSearch.append("<button type='button'>Shelf this title.</button>");

            //Append the search results to the search-results section
            $("#book-search").append(bookSearch)
        }


        /*console.log(' data new ===>', normalizedData)

        bookSearch.forEach(function(book){
            console.log(book)
            var searchResults = $('div');

            searchResults.addClass("suggestions");
            
            searchResults.attr("id", "item-")
            
            document.body.appendChild( search )
        })*/


    });
}

/*for (var i = 0; i < data.length; i++) {
    // create a parent div for the oncoming elements
    var wellSection = $("<div>");
    // add a class to this div: 'well'
    wellSection.addClass("well");
    // add an id to the well to mark which well it is
    wellSection.attr("id", "character-well-" + i);
    // append the well to the well section
    $("#well-section").append(wellSection);

    // Now add all of our character data to the well we just placed on the page

    // make the name an h2,
    $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
    // the role an h3,
    $("#character-well-" + i).append("<h3>Role: " + data[i].role + "</h4>");
    // the age an h3,
    $("#character-well-" + i).append("<h3>Age: " + data[i].age + "</h4>");
    // and the forcepoints an h3.
    $("#character-well-" + i).append("<h3>Force Points: " + data[i].forcePoints + "</h4>");
  }

  const normalizedData = data.items.map( item => {
    return {
        title: item.volumeInfo.title,
        author: item.volumeInfo.authors[0],
        genre: item.volumeInfo.categories,
        copyright_date: item.volumeInfo.publishedDate,
        ISBN: item.volumeInfo.industryIdentifiers[0].identifier,
        cover_art: item.volumeInfo.imageLinks.thumbnail,
        synopsis: item.volumeInfo.description
    }
})*/
