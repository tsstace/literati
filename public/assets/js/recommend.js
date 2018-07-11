<<<<<<< HEAD
// $(document).ready(function() {
//     // blogContainer holds all of our comments
//     var blogContainer = $(".blog-container");
//     // var postCategorySelect = $("#category");
//     // Click events for the edit and delete buttons
//     $(document).on("click", "button.delete", handleCommentDelete);
//     $(document).on("click", "button.edit", handleCommentEdit);
//     var comment;
  
//     // This function grabs comments from the database and updates the view
//     function getComment(title) {
//       var titleString = title || "";
//       if (titleString) {
//         titleString = "/book/" + titleString;
//       }
//       $.get("/api/comment" + titleString, function(data) {
//         console.log("Comments", data);
//         comments = data;
//         if (!comments || !comments.length) {
//           displayEmpty();
//         }
//         else {
//           initializeRows();
//         }
//       });
//     }
  
//     // This function does an API call to delete comments
//     function deleteComment(id) {
//       $.ajax({
//         method: "DELETE",
//         url: "/api/comments/" + id
//       })
//         .then(function() {
//           getComments(bookTitleSelect.val());
//         });
//     }
  
//     // Getting the initial list of comments
//     getComments();
//     // InitializeRows handles appending all of our constructed comment HTML inside
//     // blogContainer
//     function initializeRows() {
//       blogContainer.empty();
//       var commentsToAdd = [];
//       for (var i = 0; i < comments.length; i++) {
//         commentsToAdd.push(createNewRow(comments[i]));
//       }
//       blogContainer.append(commentsToAdd);
//     }
  
//     // This function constructs a comment's HTML
//     function createNewRow(comment) {
//       var newCommentCard = $("<div>");
      
//       newCommentCard.addClass("card");
//       var newCommentCardHeading = $("<div>");
//       newCommentCardHeading.addClass("card-header");
//       var deleteBtn = $("<button>");
//       deleteBtn.text("x");
//       deleteBtn.addClass("delete btn btn-danger");
//       var editBtn = $("<button>");
//       editBtn.text("EDIT");
//       editBtn.addClass("edit btn btn-default");
//       var newCommentTitle = $("<h2>");
//       var newCommentDate = $("<small>");
//       var newCommentUser = $("<h5>");
//       newCommentUser.text(recommendations.user);
//       newCommentUser.css({
//         float: "right",
//         "font-weight": "700",
//         "margin-top":
//         "-15px"
//       });

//       var newCommentCardBody = $("<div>");
//       newCommentCardBody.addClass("card-body");
//       var newCommentBody = $("<p>");
//       newCommentTitle.text(recommendations.title + " ");
//       newCommentBody.text(recommendations.comment);
//       var formattedDate = new Date(recommendations.createdAt);
//       formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
//       newCommentDate.text(formattedDate);

//       newCommentTitle.append(newCommentDate);
//       newCommentCardHeading.append(deleteBtn);
//       newCommentCardHeading.append(editBtn);
//       newCommentCardHeading.append(newCommentTitle);
//       newCommentCardHeading.append(newCommentUser);
//       newCommentCardBody.append(newCommentBody);
//       newCommentCard.append(newCommentCardHeading);
//       newCommentCard.append(newCommentCardBody);
//       newCommentCard.data("comment", comment);
//       return newCommentCard;
//     }
  
//     // This function figures out which comment we want to delete and then calls
//     // deleteComment
//     function handleCommentDelete() {
//       var currentComment = $(this)
//         .parent()
//         .parent()
//         .data("comment");
//       deleteComment(currentComment.id);
//     }
  
//     // This function figures out which comment we want to edit and takes it to the
//     // Appropriate url
//     function handleCommentEdit() {
//       var currentComment = $(this)
//         .parent()
//         .parent()
//         .data("comment");
//       window.location.href = "/cms?comment_id=" + currentComment.id;
//     }
  
//     // This function displays a message when there are no comments
//     function displayEmpty() {
//       blogContainer.empty();
//       var messageH2 = $("<h2>");
//       messageH2.css({ "text-align": "center", "margin-top": "50px" });
//       messageH2.html("No comments yet for this category, navigate <a href='/cms'>here</a> in order to create a new comment.");
//       blogContainer.append(messageH2);
//     }
  
//   });
=======
$(document).ready(function() {
    // blogContainer holds all of our comments
    var blogContainer = $(".blog-container");
    // var postCategorySelect = $("#category");
    // Click events for the edit and delete buttons
    $(document).on("click", "button.delete", handleCommentDelete);
    $(document).on("click", "button.edit", handleCommentEdit);
    var comment;
  
    // This function grabs comments from the database and updates the view
    function getComment(title) {
      var titleString = title || "";
      if (titleString) {
        titleString = "/book/" + titleString;
      }
      $.get("/api/comment" + titleString, function(data) {
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
          getComments(bookTitleSelect.val());
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
      var newCommentUser = $("<h5>");
      newCommentUser.text(recommendations.user);
      newCommentUser.css({
        float: "right",
        "font-weight": "700",
        "margin-top":
        "-15px"
      });

      var newCommentCardBody = $("<div>");
      newCommentCardBody.addClass("card-body");
      var newCommentBody = $("<p>");
      newCommentTitle.text(recommendations.title + " ");
      newCommentBody.text(recommendations.comment);
      var formattedDate = new Date(recommendations.createdAt);
      formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
      newCommentDate.text(formattedDate);

      newCommentTitle.append(newCommentDate);
      newCommentCardHeading.append(deleteBtn);
      newCommentCardHeading.append(editBtn);
      newCommentCardHeading.append(newCommentTitle);
      newCommentCardHeading.append(newCommentUser);
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
  
  });
>>>>>>> a9bebc211cb6b181bf51fd4c0e18acf2177dd450
  