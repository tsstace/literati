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
//     }});
//   }

//   $('body').on('click', '.recommend-book', recommendBook);
// });

// //------------------------------------------//



// //-----------------------------------------//

// // $(document).ready(function() {

// //     // blogContainer holds all of our posts
// //     var blogContainer = $(".blog-container");
// //     var postCategorySelect = $("#category");
// //     // Click events for the edit and delete buttons
// //     $(document).on("click", "button.delete", handlePostDelete);
// //     $(document).on("click", "button.edit", handlePostEdit);
// //     postCategorySelect.on("change", handleCategoryChange);
// //     var posts;

