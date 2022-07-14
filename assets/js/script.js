var questions = [
  {
    question: "Which program is used to add styling to a webpage?",
    options: {
      a: "a. html",
      b: "b. css",
      c: "c. javascript",
      d: "d. jquery",
    },
    answer: "b",
  },
  {
    question: "Which of the following are a data type?",
    options: {
      a: "a. string",
      b: "b. rope",
      c: "c. cord",
      d: "d. wire",
    },
    answer: "a",
  },
  {
    question: "in javascript, what is a block of code called that is used to perform a specific task?",
    options: {
      a: "a. declaration",
      b: "b. variable",
      c: "c. string",
      d: "d. function",
    },
    answer: "d",
  },
];

var currentQuestion = 0;

//when the start button is clicked
//-hide the start button
//-show the timer
//-start the timer
//-show the question container and populate with first question

var startButtton = document.getElementById("start-button");
var questionContainer = document.getElementById("question-container");
var timerEl = document.getElementById("timer");
var secondsRemaining = 5;
var userScore = 0;
var displayScore = document.getElementById("display-score");
var displayFeedback = document.getElementById("feedback");
var scoreForm = document.getElementById("highscore");
var submitButton = document.getElementById("submit-score");

startButtton.addEventListener("click", startGame);


function startGame() {
  startButtton.classList.add("hidden");
  timerEl.classList.remove("hidden");
  timerEl.textContent = secondsRemaining;
  displayScore.classList.remove("hidden");
  //trigger timer
  startTimer();
  renderQuestion();
}

function renderQuestion() {
  //show question container
  questionContainer.classList.remove("hidden");
  questionContainer.innerHTML = `
    <h2>${questions[currentQuestion].question}</h2>
    <ul>
        <li class="option" data-option='a'>${questions[currentQuestion].options["a"]}</li>
        <li class="option" data-option='b'>${questions[currentQuestion].options["b"]}</li>
        <li class="option" data-option='c'>${questions[currentQuestion].options["c"]}</li>
        <li class="option" data-option='d'>${questions[currentQuestion].options["d"]}</li>
    </ul>
    `;

  var optionsLi = document.querySelectorAll(".option");
  optionsLi.forEach(function (option) {
    option.addEventListener("click", evaluateAnswer);
  });
}

function evaluateAnswer(event) {
  console.log("selected answer " + event.target.dataset.option);
  //evaluate correct or incorect
  let correct = event.target.dataset.option === questions[currentQuestion].answer
  let feedbackText;
  if (correct) {
    feedbackText = "that's correct!";
  } else feedbackText = "... wrong 😔";

  //adjust their score accordingly
  if (correct) userScore += 5 
  else {userScore -= 5};
  
  displayScore.textContent = userScore

  currentQuestion++;
  renderQuestion();
  document.getElementById("feedback").classList.remove("hidden");
  document.getElementById("feedback").textContent = feedbackText;
}

function startTimer() {
  var timerId = setInterval(function () {
    //take 1 second off secondsRemaining
    secondsRemaining--;
    //change the text of timer div to reflect that
    timerEl.textContent = secondsRemaining;
    //if it hits 0, end the interval and endGame()

    if (secondsRemaining <= 0) {
      clearInterval(timerId);
      endGame();
    }
  }, 1000);
}

function endGame() {
    timerEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "./assets/gameover.png");
    imgEl.setAttribute("style", "display:block; margin-left:auto; margin-right:auto");
    questionContainer.replaceWith(imgEl); 
    endScores(); 
}

//this will gather the score and initials when game ends
function endScores() {
    // display the form
    scoreForm.classList.remove("hide-form");
    enterScore ();
}

// store info for particular user in localstorage
function enterScore() {
submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    var endResults = {
        initials: initials.value,
        score: score.value
    };

    localStorage.setItem("endResults", JSON.stringify(endResults));
    renderMessage();
});
}

// function renderMessage() {
//     var finalScore = JSON.parse(localStorage.getItem("endResult"));
//     if (finalScore !== null) {
//         document.querySelector(".message").textContent = "your final score is " + finalScore.initials
//     }
// }




timerEl.setAttribute("style", "font-size: 50px; font-weight: bold; color: rgb(7, 45, 27)");
displayScore.setAttribute("style", "font-size: 50px; font-weight: bold; color: rgb(7, 45, 27)")
displayFeedback.setAttribute("style", "font-size:50px; font-weight: bold; color: rgb(7, 45, 27); text-align: center")
