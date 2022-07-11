var questions = [
  {
    question: "What is the air speed velocity of an unladen swallow?",
    options: {
      a: "120 km/h",
      b: "100 km/h",
      c: "80 km/h",
      d: "50 km/h",
    },
    answer: "a",
  },
  {
    question: "What is the most iconic album cover?",
    options: {
      a: "Elvis",
      b: "Sgt. Peppers Lonely Hearts Club Band",
      c: "The Clash",
      d: "AC/DC",
    },
    answer: "c",
  },
  {
    question: "Which contitent is France located?",
    options: {
      a: "Asia",
      b: "Antarctica",
      c: "Europe",
      d: "South America",
    },
    answer: "c",
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
startButtton.addEventListener("click", startGame);

function startGame() {
  startButtton.classList.add("hidden");
  timerEl.classList.remove("hidden");
  timerEl.textContent = secondsRemaining;
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
    feedbackText = "you got it right";
  } else feedbackText = "you got it wrong";

  //adjust their score accordingly

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

function endGame() {}

//-start function for timer

//-

// Which program is used to add styling to a webpage?
// a.HTML
// b.CSS
// c.Javascript
// d.jQuery

// Which of the following are a date type?
// a.String
// b.Rope
// c.Cord
// d.Wire

// In JavaScript, what is a block of code called that is used to perform a specific task?
// a.declaration
// b.variable
// c.string
// d.function

//-need event clicker to start quiz

//set of questions with options for answers
//-4-5 questions with muliple choice answers-array
//-does it need a score associated with the answer?
//-need event clicker
//-prompts if wrong
//-a way to calculate score
//--data attributes?
//--local storage

//submit high scores
//-submit button

//local storage-highscores
