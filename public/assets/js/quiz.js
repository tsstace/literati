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
        checkQuestion();
    });

    $("body").on("click", ".reset-button", function (event) {
        sound.play();
        resetQuiz();
    });

});

function generateHTML() {
    quizHTML = "<p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>1. " + answerArray[questionCounter][0] + "</p><p class='answer'>2. " + answerArray[questionCounter][1] + "</p><p class='answer'>3. " + answerArray[questionCounter][2] + "</p><p class='answer'>4. " + answerArray[questionCounter][3] + "</p>";
    $(".mainArea").html(quizHTML);
}

function checkQuestion() {
    if (questionCounter < 9) {
        questionCounter++;
        generateHTML();
    } else {
        finalScreen();
    }
}

function finalScreen() {
    quizHTML = "<img class='img-circle img-done' src='assets/images/done.jpg'>" + "<p class='text-center'>Congratulations!  You are most similar to: <br> the <strong>Scholar</strong> archetype, a natural student.<br> <br>  Your enthusiasm for learning and curiosity draw you to explore the world around you as well as your preconceived notions about humanity.</p>" 
         +
         "<p class='text-center'>Literati recommends the following titles as your perfect matches: </p>"
        +
        "<a href='https://www.amazon.com/Tipping-Point-Little-Things-Difference/dp/0316346624/ref=sr_1_1?ie=UTF8&qid=1530832311&sr=8-1&keywords=the+tipping+point' target='_blank'><strong>The Tipping Point</strong> by Malcolm Gladwell</a><br>"
        +
        "<a href='https://www.amazon.com/Freakonomics-Revised-Expanded-Economist-Everything/dp/0061234001/ref=sr_1_1?s=books&ie=UTF8&qid=1530928126&sr=1-1&keywords=Freakonomics' target='_blank'><strong>Freakonomics</strong> by Steven Levitt & Stephen Dubner</a><br>"
        +
        "<a href='https://www.amazon.com/Walden-Henry-David-Thoreau/dp/1505297729/ref=sr_1_3_sspa?s=books&ie=UTF8&qid=1530928263&sr=1-3-spons&keywords=Walden&psc=1' target='_blank'><strong>Walden</strong> by Henry David Thoreau</a><br>"
        +
        "<a href='https://www.amazon.com/Elegant-Universe-Superstrings-Dimensions-Ultimate/dp/039333810X/ref=sr_1_1?s=books&ie=UTF8&qid=1530928414&sr=1-1&keywords=The+Elegant+Universe' target='_blank'><strong>The Elegant Universe</strong> by Brian Greene</a><br>"
        +
        "<br>"
        +
        "<p class='text-justify'>Share your results on social media!</p>"
        +
        "<a href='https://twitter.com/share?ref_src=twsrc%5Etfw' class='twitter-share-button' data-size='large' data-text='I just took the &quot;Literati&quot; quiz to find my summer reading list' data-url='https://github.com/panoptic1/literati' data-hashtags='literati, getlit, bookhookup' data-show-count='false'>Tweet</a><script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>"
        +
         "<iframe src='https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fgithub.com%2Fpanoptic1%2Fliterati&layout=button_count&size=large&mobile_iframe=true&width=84&height=28&appId' width='84' height='28' style='border:none;overflow:hidden' scrolling='no' frameborder='0' allowTransparency='true' allow='encrypted-media'></iframe>"
        +
        `<a href="https://www.linkedin.com/shareArticle?mini=true&url=https://github.com/panoptic1/literati&title=Literati%20Quiz%20Results%20Summer%20Reading&summary=My%20Literati%20quiz%20results&source=LinkedIn' target='_blank'" 
        title="LinkedIn" class="btn btn-linkedin btn-lg"><i class="fa fa-linkedin fa-fw"></i> LinkedIn</a>`
        +
    "<p class='text-center reset-button-container'><a class='btn btn-primary btn-sm btn-block reset-button' href='#' role='button'>Take The Quiz Again!</a></p>";
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
 ['"The Tipping Point" by Malcolm Gladwell', '"Walden" by Henry David Thoreau', '"Freakonomics" by Steven Levitt & Stephen Dubner', '"The Elegant Universe" by Brian Greene'],
 ['"Lies My Teacher Told Me" by James W. Loewen', '"Notorius RBG: The Life and Times of Ruth Bader Ginsburg" by Irin Carmon & Shana Knizhnik', '"Unsafe at Any Speed" by Ralph Nader', '"The Hate U Give" by Angie Thomas'],
 ['"The Secret Life of Bees" by Sue Monk Kidd', '"The Girl with the Dragon Tattoo" by Stieg Larsson', '"On the Road" by Jack Kerouac', '"The Hitchhiker`s Guide to the Galaxy" by Douglas Adams'],
 ['"The Old Man and the Sea" by Ernest Hemingway', '"Kon Tiki" by Thor Heyerdahl', '"A Cook`s Tour" by Anthony Bourdain', '"Deliverance" by James Dickey']
 ];

var questionCounter = 0;
var selectedAnswer;
var sound = new Audio("audio/spring.mp3");