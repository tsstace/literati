$(document).ready(function() {
    // Gets an optional query string from our url (i.e. ?comment_id=23)
    var url = window.location.search;
    var commentId;
    // Sets a flag for whether or not we're updating a comment to be false initially
    var updating = false;
  
    // If we have this section in our url, we pull out the comment id from the url
    // In localhost:3000/cms?comment_id=1, commentId is 1
    if (url.indexOf("?comment_id=") !== -1) {
      commentId = url.split("=")[1];
      getCommentData(commentId);
    }
  
    // Getting jQuery references to the comment body, title, form, and category select
    var bodyInput = $("#body");
    var titleInput = $("#title");
    var cmsForm = $("#cms");
    // var commentCategorySelect = $("#category");

    // Giving the commentCategorySelect a default value
    // commentCategorySelect.val("Personal");

    // Adding an event listener for when the form is submitted
    $(cmsForm).on("submit", function handleFormSubmit(event) {
      event.preventDefault();
      // Wont submit the comment if we are missing a body or a title
      if (!titleInput.val().trim() || !bodyInput.val().trim()) {
        return;
      }
      // Constructing a newComment object to hand to the database
      var newComment = {
        title: titleInput.val().trim(),
        body: bodyInput.val().trim(),
        // category: commentCategorySelect.val()
      };
  
      console.log(newComment);
  
      // If we're updating a comment run updateComment to update a comment
      // Otherwise run submitComment to create a whole new comment
      if (updating) {
        newComment.id = commentId;
        updateComment(newComment);
      }
      else {
        submitComment(newComment);
      }
    });
  
    // Submits a new comment and brings user to blog page upon completion
    function submitComment(Comment) {
      $.post("/api/comments/", Comment, function() {
        window.location.href = "/";
      });
    }
  
    // Gets comment data for a comment if we're editing
    function getCommentData(id) {
      $.get("/api/comments/" + id, function(data) {
        if (data) {
          // If this comment exists, prefill our cms forms with its data
          titleInput.val(data.title);
          bodyInput.val(data.body);
        //   commentCategorySelect.val(data.category);
          // If we have a comment with this id, set a flag for us to know to update the comment
          // when we hit submit
          updating = true;
        }
      });
    }
  
    // Update a given comment, bring user to the main page when done
    function updateComment(comment) {
      $.ajax({
        method: "PUT",
        url: "/api/comments",
        data: comment
      })
        .then(function() {
          window.location.href = "/";
        });
    }
  });
  