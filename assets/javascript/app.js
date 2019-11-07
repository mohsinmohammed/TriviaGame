$(document).ready(function() {

    /// array of questions
var trivia = { question: ["question 1 ?","question 2 ?", "question 3 ?","question 4 ?",  "question 5 ?", "question 6 ?","question 7 ?", "question 8 ?" ], 
                    choices: [["ch1", "ch2", "ch3", "ch4"],["ch1", "ch2", "ch3", "ch4"], ["ch1", "ch2", "ch3", "ch4"],["ch1", "ch2", "ch3", "ch4"], ["ch1", "ch2", "ch3", "ch4"],["ch1", "ch2", "ch3", "ch4"], ["ch1", "ch2", "ch3", "ch4"],["ch1", "ch2", "ch3", "ch4"]], 
                      answer: ["a", "b", "c","d", "a", "b", "c","d"] 
    };
// declaring global variables
var number, intervalId;
var numQuestion = 0;

///  starts buttons calls the start game function
$("#start").on("click", startGame);
$('.cho').hover(
				
    function () {
       $(this).css({"background-color":"rgb(215, 228, 150)"});
    }, 
     
    function () {
       $(this).css({"background-color":"rgb(202, 204, 90)"});
    }
 );


function startGame(){

    $("#start").css("display","none");
    showQuestion();
}

function showQuestion(){
    startClock();
    $(".answer").css("display","none");
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
        $(".time").text("10");
          stopClock();
          displayAnswer();
      }
    }
}
function stopClock(){   
    clearInterval(intervalId);
}
    

function displayAnswer(){
    $(".display-time").css("display","none");
    $(".Q-A").css("display","none");
    $(".answer").css("display","block");
    $(".answer").text("Correct Answer: " + trivia.answer[numQuestion]);
    numQuestion++;

   if(numQuestion < 8)
   {
    console.log("display answer numQuestion: " + numQuestion);
    setTimeout(showQuestion,3000); 
    }
    else
       setTimeout(finalResult, 3000); 

}

function finalResult(){

}

});
