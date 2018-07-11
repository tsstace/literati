// //--------------------------- THIS IS FOR THE RECOMMENDATION FUNCTION---------------------------------//
// //PUSHES RECOMMENDATION AND SELECTED BOOK TO DATABASE 

// $(document).ready(function() {

//   function recommendBook() {

//     //Create an object variable for all of the info that we want to insert into the recommendation table
//     var email=$("#email").text();
//     var user=$("#name").text();
//     var rating = $("#rating input:checked").val();
//     var comment = $("#commentBody").val().trim();

//     var commentInfo = {
//       title: $(this).closest('.results').attr("data-title"),
//       author: $(this).closest('.results').attr("data-author"),
//       genre: $(this).closest('.results').attr("data-genre"),
//       cover_art_url: $(this).closest('.results').attr("data-cover"),
//       copyright_date: $(this).closest('.results').attr("data-copyright"),
//       ISBN: $(this).closest('.results').attr("data-ISBN"),
//       synopsis: $(this).closest('.results').attr("data-synopsis"),
//       email: email,
//       user: user,
//       rating: rating,
//       comment: comment
//     }
    
//     console.log(commentInfo);
//     $.ajax({url: "/api/comments", method: "POST", data: commentInfo, success: function(result){
//       $(console.log("Successful recommendation added!", result));
//       sum
//     }});
//   }

//   $('body').on('click', '.recommend-book', recommendBook);

// });

// //----------------------------------------------------------------------------------------//
//   // Submits a new post and brings user to blog page upon completion
//   function submitPost(Post) {
//     $.post("/api/posts/", Post, function() {
//       window.location.href = "/";
//     });
//   }
// //-------------------------FROM BLOG.JS---------------------------------------------------------------//

// $(document).ready(function() {
//   // blogContainer holds all of our posts
//   var blogContainer = $("#blog-container");
//   // var postCategorySelect = $("#category");
//   // Click events for the edit and delete buttons
//   // $(document).on("click", "button.delete", handlePostDelete);
//   // $(document).on("click", "button.edit", handlePostEdit);
//   // postCategorySelect.on("change", handleCategoryChange);
//   var posts;

//   // This function grabs posts from the database and updates the view
//   function getPosts(title) {
//     var categoryString = title || "";
//     // if (categoryString) {
//     //   categoryString = "/category/" + categoryString;
//     // }
//     $.get("/api/posts" + categoryString, function(data) {
//       console.log("Comments", data);
//       posts = data;
//       if (!posts || !posts.length) {
//         displayEmpty();
//       }
//       else {
//         initializeRows();
//       }
//     });
//   }

//     // Getting the initial list of posts
//     getPosts();

// // InitializeRows handles appending all of our constructed post HTML inside
//   // blogContainer
//   function initializeRows() {
//     blogContainer.empty();
//     var postsToAdd = [];
//     for (var i = 0; i < posts.length; i++) {
//       postsToAdd.push(createNewRow(posts[i]));
//     }
//     blogContainer.append(postsToAdd);
//   }

//   // This function constructs a post's HTML
//   function createNewRow(post) {
//     var newPostCard = $("<div>");
//     newPostCard.addClass("card");
//     var newPostCardHeading = $("<div>");
//     newPostCardHeading.addClass("card-header");
//     var deleteBtn = $("<button>");
//     deleteBtn.text("x");
//     deleteBtn.addClass("delete btn btn-danger");
//     var editBtn = $("<button>");
//     editBtn.text("EDIT");
//     editBtn.addClass("edit btn btn-default");
//     var newPostTitle = $("<h2>");
//     var newPostDate = $("<small>");
//     var newPostCategory = $("<h5>");
//     newPostCategory.text(recommendations.user);
//     newPostCategory.css({
//       float: "right",
//       "font-weight": "700",
//       "margin-top":
//       "-15px"
//     });
//     var newPostCardBody = $("<div>");
//     newPostCardBody.addClass("card-body");
//     var newPostBody = $("<p>");
//     newPostTitle.text(recommendations.title + " ");
//     newPostBody.text(recommendations.comment);
//     var formattedDate = new Date(recommendations.createdAt);
//     formattedDate = moment(formattedDate).format("MMMM Do YYYY, h:mm:ss a");
//     newPostDate.text(formattedDate);
//     newPostTitle.append(newPostDate);
//     newPostCardHeading.append(deleteBtn);
//     newPostCardHeading.append(editBtn);
//     newPostCardHeading.append(newPostTitle);
//     newPostCardHeading.append(newPostCategory);
//     newPostCardBody.append(newPostBody);
//     newPostCard.append(newPostCardHeading);
//     newPostCard.append(newPostCardBody);
//     newPostCard.data("post", post);
//     return newPostCard;
//   }

//   // This function displays a message when there are no posts
//   function displayEmpty() {
//     blogContainer.empty();
//     var messageH2 = $("<h2>");
//     messageH2.css({ "text-align": "center", "margin-top": "50px" });
//     messageH2.html("No posts yet for this category, navigate <a href='/cms'>here</a> in order to create a new post.");
//     blogContainer.append(messageH2);
//   }

// });