function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var userInfo = {
      profile_pic: profile.getImageUrl(),
      user_name: profile.getName(),
      email: profile.getEmail(),
  }
  console.log(googleUser);
  $(".welcome").css("display", "none");
  $(".booksBG").css("display", "none");
  $("#data").css("display", "block");

  $("#pic").attr('src', profile.getImageUrl());
  $("#name").text(profile.getName());
  $("#email").text(profile.getEmail());

  $.ajax({url: "/api/users", method: "POST", data: userInfo, success: function(result){
  $(console.log(result));
}});
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
            bookSearch.append($recommendation);

            //A shelf button
            bookSearch.append($shelfBook);

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

var $recommendation = `<!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Recommend This Book
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                
                            <label for="body">Write your review:</label>
                            <textarea class="form-control" rows="10" id="body"></textarea>
                            <p>
                            <div class="rating">
                            <label for="body">Rate the book:</label>
                            <i>Radio buttons will be changed to stars</I>
                            <form id="q1">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="starRating" option value="1">
                                    <label class="form-check-label" for="inlineRadio1">1</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="starRating" option value="2">
                                    <label class="form-check-label" for="inlineRadio2">2 </label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="starRating" option value="3">
                                    <label class="form-check-label" for="inlineRadio2">3</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="starRating" option value="4">
                                    <label class="form-check-label" for="inlineRadio2">4</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="starRating" option value="5">
                                    <label class="form-check-label" for="inlineRadio2">5</label>
                                </div>
                            </form>
                            </div>
                            </p>
  
              
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>`;

var $shelfBook = `<!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#shelfbookModal">
         Shelf This Book
        </button>
        
        <!-- Modal -->
        <div class="modal fade" id="shelfbookModal" tabindex="-1" role="dialog" aria-labelledby="shelfbookModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">

              <div class="modal-body">
                
                            <p> <label for="body">Change the status of the book</label>
                            <form id="q1">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="bookStatus" option value="1">
                                    <label class="form-check-label" for="inlineRadio1">To Read</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="bookStatus" option value="2">
                                    <label class="form-check-label" for="inlineRadio2">Currently Reading</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="bookStatus" option value="3">
                                    <label class="form-check-label" for="inlineRadio2">Previously Read</label>
                                </div>
                            </form>
                            </p>
              
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>`;

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

//----------- THIS IS FOR COMMENT BOX -----------//

$(document).ready(function() {
  // blogContainer holds all of our comments
  var blogContainer = $(".blog-container");
  // var postCategorySelect = $("#category");
  // Click events for the edit and delete buttons
  $(document).on("click", "button.delete", handleCommentDelete);
  $(document).on("click", "button.edit", handleCommentEdit);
  // postCategorySelect.on("change", handleCategoryChange);
  var comment;

  // This function grabs comments from the database and updates the view
  function getComment(category) {
    var categoryString = category || "";
    if (categoryString) {
      categoryString = "/category/" + categoryString;
    }
    $.get("/api/comment" + categoryString, function(data) {
      console.log("Comments", data);
      comments = data;
      if (!comments || !comments.length) {
        displayEmpty();
      }
      else {
        initializeRows();
      }
    });
  }

  // This function does an API call to delete comments
  function deleteComment(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/comments/" + id
    })
      .then(function() {
        getComments(postTitleSelect.val());
      });
  }

  // Getting the initial list of comments
  getComments();
  // InitializeRows handles appending all of our constructed comment HTML inside
  // blogContainer
  function initializeRows() {
    blogContainer.empty();
    var commentsToAdd = [];
    for (var i = 0; i < comments.length; i++) {
      commentsToAdd.push(createNewRow(comments[i]));
    }
    blogContainer.append(commentsToAdd);
  }

  // This function constructs a comment's HTML
  function createNewRow(comment) {
    var newCommentCard = $("<div>");
    newCommentCard.addClass("card");
    var newCommentCardHeading = $("<div>");
    newCommentCardHeading.addClass("card-header");
    var deleteBtn = $("<button>");
    deleteBtn.text("x");
    deleteBtn.addClass("delete btn btn-danger");
    var editBtn = $("<button>");
    editBtn.text("EDIT");
    editBtn.addClass("edit btn btn-default");
    var newCommentTitle = $("<h2>");
    var newCommentDate = $("<small>");
  //   var newPostCategory = $("<h5>");
  //   newPostCategory.text(post.category);
  //   newPostCategory.css({
  //     float: "right",
  //     "font-weight": "700",
  //     "margin-top":
  //     "-15px"
  //   });
    var newCommentCardBody = $("<div>");
    newCommentCardBody.addClass("card-body");
    var newCommentBody = $("<p>");
    newCommentTitle.text(comment.title + " ");
    newCommentBody.text(comment.body);
    var formattedDate = new Date(comment.createdAt);
    formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
    newCommentDate.text(formattedDate);
    newCommentTitle.append(newCommentDate);
    newCommentCardHeading.append(deleteBtn);
    newCommentCardHeading.append(editBtn);
    newCommentCardHeading.append(newCommentTitle);
    newCommentCardHeading.append(newCommentCategory);
    newCommentCardBody.append(newCommentBody);
    newCommentCard.append(newCommentCardHeading);
    newCommentCard.append(newCommentCardBody);
    newCommentCard.data("comment", comment);
    return newCommentCard;
  }

  // This function figures out which comment we want to delete and then calls
  // deleteComment
  function handleCommentDelete() {
    var currentComment = $(this)
      .parent()
      .parent()
      .data("comment");
    deleteComment(currentComment.id);
  }

  // This function figures out which comment we want to edit and takes it to the
  // Appropriate url
  function handleCommentEdit() {
    var currentComment = $(this)
      .parent()
      .parent()
      .data("comment");
    window.location.href = "/cms?comment_id=" + currentComment.id;
  }

  // This function displays a message when there are no comments
  function displayEmpty() {
    blogContainer.empty();
    var messageH2 = $("<h2>");
    messageH2.css({ "text-align": "center", "margin-top": "50px" });
    messageH2.html("No comments yet for this category, navigate <a href='/cms'>here</a> in order to create a new comment.");
    blogContainer.append(messageH2);
  }

  // This function handles reloading new posts when the category changes
  // function handleCategoryChange() {
  //   var newPostCategory = $(this).val();
  //   getPosts(newPostCategory);
  // }

});

