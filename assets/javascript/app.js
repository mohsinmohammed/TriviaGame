$(document).ready(function() {

    /// trivia object with questions, choices, and answers
var trivia = { question: ["In which sport would a pommel horse be used?","To which type of leisure activity does the term 'cruciverbalism' refer?", "What city has been dubbed the Chocolate Capital of the United States?","What planet, known as the Morning or Evening Star, is one of only two that don't have any moons?",  "What was the name of the first manned spacecraft to land on the moon?", "In the saying of eighteenth century literature. What is it specifically 'in time' that 'saves nine'?","Who established Pennsylvania?", "What fruit appears on the first screen in the original 'Pac-Man' arcade game?" ], 
                    choices: [["Fencing", "Horse racing", "Gymnastics", "Horse Polo"],["Creative writing", "Traveling on a ship", "Blogging", "Crosswords"], ["Carmel, CA", "Hershey, PA", "Cocoa, FL", "Ding Dong, TX"],["Venus", "Jupiter", "Saturn", "Uranus"], ["Apollo", "Columbia", "Eagle", "Enterprise"],["A twitch", "A stitch", "A catch", "A good line"], ["Benjamin Franklin", "William Penn", "John Hancock", "Thomas Jefferson"],["Bananas", "Grapes", "Oranges", "Cherry"]], 
                      answer: ["Gymnastics", "Crosswords", "Hershey, PA","Venus", "A stitch", "Eagle", "William Penn","Cherry"],
                       userAnswer: [-1, -1, -1, -1 , -1 , -1, -1, -1]
    };
// declaring global variables
var number, intervalId;
var numQuestion = 0, correctAnswer = 0, incorrectAnswer = 0, unanswered = 8 - correctAnswer - incorrectAnswer;

///  start button calls the start game function


$("#start").on("click", startGame);

function startGame(){
    $("#start").css("display","none");  

    showQuestion();
}

function showQuestion(){
    startClock();
    $(".display-answer").css("display","none");
    $(".Q-A").css("display","block");
    $(".question").text(trivia.question[numQuestion]);
    $(".ch-a").text(trivia.choices[numQuestion][0]);
    $(".ch-b").text(trivia.choices[numQuestion][1]);
    $(".ch-c").text(trivia.choices[numQuestion][2]);
    $(".ch-d").text(trivia.choices[numQuestion][3]);
}


function startClock(){   
    $(".display-time").css("display","block");
      number = 10;
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    function decrement() {
      number--;
      $(".time").text(number);
      if (number === 0) {
        
          stopClock();
          displayAnswer();
      }
    }
}
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


 $(".ch-a").on("click", userChoiceA);
 $(".ch-b").on("click", userChoiceB);
 $(".ch-c").on("click", userChoiceC);
 $(".ch-d").on("click", userChoiceD);


function userChoiceA() {
    questionAnswered = true;
    trivia.userAnswer[numQuestion] = 0;
    stopClock();
    evaluateUserChoice();
    displayAnswer();
}

function userChoiceB() {
  questionAnswered = true;
  trivia.userAnswer[numQuestion] = 1;
  stopClock();
  evaluateUserChoice();
  displayAnswer();
}

function userChoiceC() {
  questionAnswered = true;
  trivia.userAnswer[numQuestion] = 2;
  stopClock();
  evaluateUserChoice();
  displayAnswer();
}

function userChoiceD() {
  questionAnswered = true;
  trivia.userAnswer[numQuestion] = 3;
  stopClock();
  evaluateUserChoice();
  displayAnswer();
}

var userChoice;
function evaluateUserChoice(){  
   if(trivia.choices[numQuestion][trivia.userAnswer[numQuestion]] === trivia.answer[numQuestion])
        correctAnswer++;
   else
      incorrectAnswer++;
}
    

function displayAnswer(){

    $(".display-time").css("display","none");
    $(".Q-A").css("display","none");
    $(".display-answer").css("display","block");
    if(trivia.userAnswer[numQuestion] == -1)
    $(".player-answer").text("Out of time");
    else
    $(".player-answer").text("Your Answer: " + trivia.choices[numQuestion][trivia.userAnswer[numQuestion]]);
    $(".correct-answer").text("Correct Answer: " + trivia.answer[numQuestion]);
    numQuestion++;

   if(numQuestion < 8)
   {
    setTimeout(showQuestion,3000); 
    }
    else
    {
      var unanswered = 8 - correctAnswer - incorrectAnswer; 
      console.log("Total correct answers: " + correctAnswer);
      console.log("Total incorrect answers: " + incorrectAnswer);
      console.log("Total unanswered: " +  unanswered);
      setTimeout(finalResult, 3000); 
    }
}

function finalResult(){

}

});
