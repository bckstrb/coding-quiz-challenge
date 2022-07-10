var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

function buildQuiz () {
    var output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
        var answers = [];
        for(letter in currentQuestion.answers){
            answers.push(
                
            )
        }
        }
    )
}

function showResults () {}

buildQuiz ()

submitButton.addEventListener('click', showResults);

var myQuestions = [
    {
        question: "Which program is used to add styling to a webpage?",
        answers: {
            a: "HTML",
            b: "CSS",
            c: "Javascript",
            d: "jQuery"
        },
            correctAnswer: "b"
    },

    {
        question: "Which of the following are a date type?",
        answers: {
            a: "string",
            b: "rope",
            c: "cord",
            d: "wire"
        },
                correctAnswer: "a"
    },

    {
        question: "In JavaScript, what is a block of code called that is used to perform a specific task?",
        answers: {
            a: "declaration",
            b:  "variable",
            c:  "string",
            d:  "function"

        },
                correctAnswer: "d"
    }
]