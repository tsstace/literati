$(document).ready(function () {

    startPage();

    // load splash page    
    function startPage() {
        splashPage = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' role='button'>Start Quiz</a></p>";
        $(".mainArea").html(splashPage);
    }

    $("body").on("click", ".start-button", function (event) {
        sound.play();
        generateHTML();
    });

    $("body").on("click", ".answer", function (event) {
        //user has picked an answer
        selectedAnswer = $(this).text();
        wait();
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

function finalScreen() {
    quizHTML = "<p class='text-center'>Congratulations!  You are most similar to:" + "<img class='img-responsive img-done' src='assets/images/done.jpg'>"
        +
        `<a href="#" title="LinkedIn" class="btn btn-linkedin btn-lg"><i class="fa fa-linkedin fa-fw"></i> LinkedIn</a>`
        +
        "<a href='https://twitter.com/share?ref_src=twsrc%5Etfw' class='twitter-share-button' data-size='large' data-text='I just took the &quot;Literati&quot; quiz to find my summer reading list' data-url='https://github.com/panoptic1/literati' data-hashtags='literati' data-show-count='false'>Tweet</a><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>"
        +
         "<iframe src='https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fgithub.com%2Fpanoptic1%2Fliterati&layout=button_count&size=large&mobile_iframe=true&width=84&height=28&appId' width='84' height='28' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true' allow='encrypted-media'></iframe>"
         //
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


 var suggestedTitles = [
 ['<ahref="https://www.amazon.com/Tipping-Point-Little-Things-Difference/dp/0316346624/ref=sr_1_1?ie=UTF8&qid=1530832311&sr=8-1&keywords=the+tipping+point"<strong>The Tipping Point<strong> by Malcolm Gladwell', '"Walden" by Henry David Thoreau', '"Freakonomics" by Steven Levitt & Stephen Dubner', '"The Elegant Universe" by Brian Greene'],
 ['"Lies My Teacher Told Me" by James W. Loewen', '"Notorius RBG: The Life and Times of Ruth Bader Ginsburg" by Irin Carmon & Shana Knizhnik', '"Unsafe at Any Speed" by Ralph Nader', '"The Hate U Give" by Angie Thomas'],
 ['"The Secret Life of Bees" by Sue Monk Kidd', '"The Girl with the Dragon Tattoo" by Stieg Larsson', '"On the Road" by Jack Kerouac', '"The Hitchhiker`s Guide to the Galaxy" by Douglas Adams'],
 ['"The Old Man and the Sea" by Ernest Hemingway', '"Kon Tiki" by Thor Heyerdahl', '"A Cook`s Tour" by Anthony Bourdain', '"Deliverance" by James Dickey']
 ];

var questionCounter = 0;
var selectedAnswer;
var sound = new Audio("audio/spring.mp3");