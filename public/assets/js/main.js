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
    $.get("/book?title=" + title, function(data){
        console.log("Title: " + data.items[0].volumeInfo.title);
        console.log("Author: " + data.items[0].volumeInfo.authors[0]);
        console.log("Genre: " + data.items[0].volumeInfo.categories[0]);
        console.log("Copyright Date: " + data.items[0].volumeInfo.publishedDate);
        console.log("ISBN: " + data.items[0].volumeInfo.industryIdentifiers[0].identifier);
        console.log("Cover Art: " + data.items[0].volumeInfo.imageLinks.thumbnail);
        console.log("Synopsis: " + data.items[0].volumeInfo.description);
    });
}

// function onSignIn(googleUser) {
// Useful data for your client-side scripts:
// var profile = googleUser.getBasicProfile();
// console.log("ID: " + profile.getId()); // Don't send this directly to your server!
// console.log('Full Name: ' + profile.getName());
// console.log('Given Name: ' + profile.getGivenName());
// console.log('Family Name: ' + profile.getFamilyName());
// console.log("Image URL: " + profile.getImageUrl());
// console.log("Email: " + profile.getEmail());

// The ID token you need to pass to your backend:
// var id_token = googleUser.getAuthResponse().id_token;
// console.log("ID Token: " + id_token);
// };

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
  
