$(document).ready(function() {

    /// trivia object with questions, choices, and answers
var trivia = { question: ["In which sport would a pommel horse be used?","To which type of leisure activity does the term 'cruciverbalism' refer?", "What city has been dubbed the Chocolate Capital of the United States?","What planet, known as the Morning or Evening Star, is one of only two that don't have any moons?",  "What was the name of the first manned spacecraft to land on the moon?", "In the saying of eighteenth century literature. What is it specifically 'in time' that 'saves nine'?","Who established Pennsylvania?", "What fruit appears on the first screen in the original 'Pac-Man' arcade game?" ], 
                    choices: [["Fencing", "Horse racing", "Gymnastics", "Horse Polo"],["Creative writing", "Traveling on a ship", "Blogging", "Crosswords"], ["Carmel, CA", "Hershey, PA", "Cocoa, FL", "Ding Dong, TX"],["Venus", "Jupiter", "Saturn", "Uranus"], ["Apollo", "Columbia", "Eagle", "Enterprise"],["A twitch", "A stitch", "A catch", "A good line"], ["Benjamin Franklin", "William Penn", "John Hancock", "Thomas Jefferson"],["Bananas", "Grapes", "Oranges", "Cherry"]], 
                      answer: ["Gymnastics", "Crosswords", "Hershey, PA","Venus", "Eagle", "A stitch", "William Penn","Cherry"],
                       userAnswer: []
    };
// declaring global variables
var number, intervalId, message = "";
var numQuestion = 0, correctAnswer = 0, incorrectAnswer = 0, unanswered = 0;

///  start button calls the start game function
$("#start").on("click", startGame);

//This function reset the variable and allows the user to play multiple times
function startGame(){
    $("#start").css("display","none");  
    $(".final-result").css("display","none");
    numQuestion = 0, correctAnswer = 0, incorrectAnswer = 0, unanswered = 0;

    for(var j=0; j<8; j++)
      trivia.userAnswer[j] = -1;
    
      //Here showQuestion is called which starts the game
    showQuestion();
}

//In showQuestion function we start the clock and display the questions
function showQuestion(){
    startClock();
    //Before displaying any question we change the css property of display-answer class
    $(".display-answer").css("display","none");
    //then we make the Q-A class that contain the question and multiple choices become visible to the user
    $(".Q-A").css("display","block");
    // text is added to html tags using the tags
    $(".question").text(trivia.question[numQuestion]);
    $(".ch-a").text(trivia.choices[numQuestion][0]);
    $(".ch-b").text(trivia.choices[numQuestion][1]);
    $(".ch-c").text(trivia.choices[numQuestion][2]);
    $(".ch-d").text(trivia.choices[numQuestion][3]);
}

// StartClock function start a count down clock beginning at 10
// when clock runs out and the number counter goes to 0, the clock stops, and the correct answer is displayed
function startClock(){   
    $(".display-time").css("display","block");
      number = 10;
      // The setInterval decreases the number which is initialized to 10 after every 1 second with call to 'decrement' function
      intervalId = setInterval(decrement, 1000);
    function decrement() {
      number--;
      $(".time").text(number);
      if (number === 0) {
           //As the number goes to 0 the clock is stopped and correct answer is displayed
          stopClock();
          displayAnswer();
      }
    }
}

// stopClock clears the intervalId variable 
// this method get calls when user click on any of the multiple choices or counter in the startClock method goes to zero
function stopClock(){   
    clearInterval(intervalId); 
    $(".time").text("10");
}

$('.cho').hover(
    function () {
       $(this).css({"background-color":"rgb(215, 228, 150)"});
    },    
    function () {
       $(this).css({"background-color":"rgb(202, 204, 90)"});
    }
 );

// on click calls a specific function and sets the user answer in the object which is then evaluted in evaluateUserChoice function
 $(".ch-a").on("click", userChoiceA);
 $(".ch-b").on("click", userChoiceB);
 $(".ch-c").on("click", userChoiceC);
 $(".ch-d").on("click", userChoiceD);


function userChoiceA() {
    trivia.userAnswer[numQuestion] = 0;
    stopClock();
    evaluateUserChoice();
    displayAnswer();
}

function userChoiceB() {
  trivia.userAnswer[numQuestion] = 1;
  stopClock();
  evaluateUserChoice();
  displayAnswer();
}

function userChoiceC() {
  trivia.userAnswer[numQuestion] = 2;
  stopClock();
  evaluateUserChoice();
  displayAnswer();
}

function userChoiceD() {
  trivia.userAnswer[numQuestion] = 3;
  stopClock();
  evaluateUserChoice();
  displayAnswer();
}

var userChoice;
function evaluateUserChoice(){  
  // here we compare the user choices with the correct answer and if it matches the correctAnswer counter is incremented
  // if it do not match incorrectAnswer is incremented
   if(trivia.choices[numQuestion][trivia.userAnswer[numQuestion]] === trivia.answer[numQuestion])
   {
     correctAnswer++;
     message = "Congratulations!! Correct Answer"
   }
   else
   {
       incorrectAnswer++;
       message = "That's Incorrect"
   }
}
    

function displayAnswer(){
    // function shows the the choice selected by user and the correct answer of questions

    $(".display-time").css("display","none");
    $(".Q-A").css("display","none");
    $(".display-answer").empty();
    $(".display-answer").css("display","block");
    if(trivia.userAnswer[numQuestion] == -1)
    {
      $(".display-answer").append("<p> Time's up <\p>");
      $(".display-answer").append("Correct Answer: " + trivia.answer[numQuestion]);
    }
    

    if(trivia.choices[numQuestion][trivia.userAnswer[numQuestion]] === trivia.answer[numQuestion])
   {
    $(".display-answer").append("<p>You Answered: " + trivia.choices[numQuestion][trivia.userAnswer[numQuestion]] +"<\p>");
    $(".display-answer").append("<p>" + message + "<\p>");
   }
    else
    {
      $(".display-answer").append("<p>You Answered: " + trivia.choices[numQuestion][trivia.userAnswer[numQuestion]] +"<\p>");
      $(".display-answer").append("<p>" + message + "<\p>");
      $(".display-answer").append("Correct Answer: " + trivia.answer[numQuestion]);
    }
    
    
    // to show the next question the variable numQuestion is incremented
    numQuestion++;
  //check if the numQuestion variable if it is less than 8 we show the next question after 3 sec 
  //if numQuestion is equal to 8 final results are displayed in finalResult function
   if(numQuestion < 8)
   {
    setTimeout(showQuestion,3000); 
    message = "";
    }
    else
    {
      setTimeout(finalResult, 3000); 
      message = "";
    }
}

function finalResult(){

  unanswered = 8 - correctAnswer - incorrectAnswer; 
  $(".display-answer").css("display","none");
  $(".final-result").css("display","block");

    $(".final-result").empty();

    var corrAnsHolder = document.createElement("p");
    $(".final-result").append(corrAnsHolder);
    $(corrAnsHolder).text("Total Correct Answers: " + correctAnswer);

    var inCorrAnsHolder = document.createElement("p");
    $(".final-result").append(inCorrAnsHolder);
    $(inCorrAnsHolder).text("Total Incorrect Answers: " + incorrectAnswer);

    var unAnsHolder = document.createElement("p");
    $(".final-result").append(unAnsHolder);
    $(unAnsHolder).text("Total Unanswered: " + unanswered);

    // Restart button is created and appended to final result tag 
    // The game restarts when the button is clicked 
    var restartBttn = document.createElement("button");
    $(".final-result").append(restartBttn);
    $(restartBttn).css("background-color", "rgb(196, 223, 171");
    $(restartBttn).css("font-size", "25px");
    $(restartBttn).text(" Restart ");

    $(restartBttn).on("click", startGame);

}

});
