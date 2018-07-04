$(document).ready(function () {

    startPage();

    // load splash page    
    function startPage() {
        splashPage = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(splashPage);
    }

    //button has been clicked
    $("body").on("click", ".start-button", function (event) {
        sound.play();
        generateHTML();
    });

    $("body").on("click", ".answer", function (event) {
        //user has picked an answer
        selectedAnswer = $(this).text();
        //    if(selectedAnswer === correctAnswers[questionCounter]) {
        //correct answer
        wait();
        //    }
        //    else {
        //wrong answer!
        //        generateError();
        //    }
    });

    $("body").on("click", ".reset-button", function (event) {
        sound.play();
        resetQuiz();
    });

});

function generateHTML() {
    quizHTML = "<p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. " + answerArray[questionCounter][1] + "</p><p class='answer'>C. " + answerArray[questionCounter][2] + "</p><p class='answer'>D. " + answerArray[questionCounter][3] + "</p>";
    $(".mainArea").html(quizHTML);
}

function wait() {
    if (questionCounter < 9) {
        questionCounter++;
        generateHTML();
    } else {
        finalScreen();
    }
}

function generateError() {
    quizHTML = "<p class='text-center'>Please make a selection </p>" + "<img class='center-block img-wrong' src='assets/images/Luda.jpg'>";
    $(".mainArea").html(quizHTML);
}

function finalScreen() {
    quizHTML = "<p class='text-center'>Congratulations!  You are most similar to:" +
        //  <p class="fb-share-button" data-href="https://github.com/panoptic1/literati" data-layout="button" data-size="large" data-mobile-iframe="true"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgithub.com%2Fpanoptic1%2Fliterati&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">Share</a></p>
        // +
        //
        //<section id="final">
        //<a href="https://twitter.com/share" class="twitter-share-button" data-lang="en">Tweet</a>
        // <
        // script > ! function (d, s, id) {
        //     
        // }(document, "script", "twitter-wjs"); < /script>
    //</section>
    "<p class='text-center reset-button-container'><a class='btn btn-primary btn-lg btn-block reset-button' href='#' role='button'>Take The Quiz Again!</a></p>";
    $(".mainArea").html(quizHTML);
}

function resetQuiz() {
    questionCounter = 0;
    generateHTML();
}

var splashPage;
var quizHTML;

var questionArray = ["If you could have one of these superpowers, which one would you choose?",
    "What was your favorite subject in school?",
    "What annoys you <strong>most</strong> in a book?",
    "When browsing at the bookstore, I am most likely to:",
    "You have been invited to a BBQ; which did you bring along?",
    "What is your idea of the perfect vacation?",
    "How do you prefer to store your books?",
    "When shopping for clothing, I usually:",
    "If you were stranded on a remote island, which of the following would you <strong>most</strong> want to have with you?",
    "Which of the following social situations is most appealing to you?"
];

var answerArray = [
    ["Reading minds", "The ability to move objects by thought", "Controlling the weather", "The ability to light objects on fire"],
    ["Recess", "Math", "English, duh?!", "Music"],
    ["Characters with grating personality traits", "Confusing or unnecessary plot twists", "Too much descriptive text around mood", "An ending that is unrealistic or vague"],
    ["A bookstore?  Why not browse online?", "Head directly to my favorite section", "Browse the displays and featured works", "Ask the staff for a recommendation"],
    ["Your favorite brand of potato chips", "A beverage to share", "A lawn game or sporting equipment", "A freshly baked dessert you prepared"],
    ["Exploring the villages of Indonesia", "Browsing the shops of London", "A secluded weekend at the spa", "Visiting family in a nearby state"],
    ["Arranged artfully on shelves and cases", "Real books? I store all of my titles online", "Helter skelter all over my living space", "I'm rocking the 'Dewey Decimal System'"],
    ["Go directly to my favorite store to browse", "Explore several web sites", "Ask a trusted friend for their advice", "Shop?!  I'll wait until I get a gift"],
    ["A machete", "A tweezers", "A copy of my favorite book", "A lighter with plenty of fuel"],
    ["A small gathering of intimate friends", "Just my snuggle bunny and me", "A large celebration with many guests", "A group of strangers united by a cause"]
];

// var imageArray = [
//     "<img class='center-block img-right' src='assets/images/ODB.jpg'>",
//     "<img class='center-block img-right' src='assets/images/Missy.jpg'>",
//     "<img class='center-block img-right' src='assets/images/HolidaeIn.jpg'>",
//     "<img class='center-block img-right' src='assets/images/YaKidK.jpg'>",
//     "<img class='center-block img-right' src='assets/images/WestCoast.jpg'>",
//     "<img class='center-block img-right' src='assets/images/BigE.jpg'>",
//     "<img class='center-block img-right' src='assets/images/Nicki.jpg'>",
//     "<img class='center-block img-right' src='assets/images/TCQ.jpg'>",
//     "<img class='center-block img-right' src='assets/images/Murder.jpg'>",
//     "<img class='center-block img-right' src='assets/images/DJKool.jpg'>"
// ];

// var suggestedTitles = [
// ['"The Tipping Point" by Malcolm Gladwell', '"Walden" by Henry David Thoreau', '"Freakonomics" by Steven Levitt & Stephen Dubner', '"The Elegant Universe" by Brian Greene'],
// ['""', '""', '""', '""'],
// ['"Lies My Teacher Told Me" by James W. Loewen', '"Notorius RBG: The Life and Times of Ruth Bader Ginsburg" by Irin Carmon & Shana Knizhnik', '"Unsafe at Any Speed" by Ralph Nader', '"The Hate U Give" by Angie Thomas'],
// ['"The Secret Life of Bees" by Sue Monk Kidd', '"The Girl with the Dragon Tattoo" by Stieg Larsson', '"On the Road" by Jack Kerouac', '"The Hitchhiker's Guide to the Galaxy" by Douglas Adams'],
// ['"The Old Man and the Sea" by Ernest Hemingway', '"Kon Tiki" by Thor Heyerdahl', '"A Cook's Tour" by Anthony Bourdain', '"Deliverance" by James Dickey']
// ];

var questionCounter = 0;
var selectedAnswer;
var sound = new Audio("audio/spring.mp3");