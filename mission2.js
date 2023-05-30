// quiz data
const quizData = [
  {
    question: "1. Which of the following paper items can be recycled?",
    a: "Greasy pizza boxes",
    b: "Cardboard packaging",
    c: "Facial tissues",
    d: "Carbon paper",
    e: "Wax-coated paper",
    correct: "b",
  },
  {
    question: "2. Which of the following plastics can be recycled?",
    a: "Plastic wrap (cling film)",
    b: "Styrofoam",
    c: "Plastic bottles",
    d: "Plastic toys",
    e: "Mixed material plastic items",
    correct: "c",
  },
  {
    question: "3. Which of the following metal items can be recycled?",
    a: "Steel cans",
    b: "Paint cans",
    c: "Aerosol cans",
    d: "Cans with hazardous substances",
    e: "Aluminum cans",
    correct: "a",
  },
  {
    question: "4. Which of the following items can be recycled?",
    a: "Broken glass",
    b: "Window glass",
    c: "Drinking glasses",
    d: "Glass bottles and jars",
    e: "Ceramics",
    correct: "d",
  },
  {
    question: "5. Which of the following items cannot be recycled?",
    a: "Coffee grounds",
    b: "Eggshells",
    c: "Fruit and vegetable peels",
    d: "Plastic utensils",
    e: "Leftover food scraps",
    correct: "e",
  },
];

// get elements
const questions = document.getElementById("question");
const answers = document.querySelectorAll(".answer");
const a_option = document.getElementById("a_text");
const b_option = document.getElementById("b_text");
const c_option = document.getElementById("c_text");
const d_option = document.getElementById("d_text");
const e_option = document.getElementById("e_text");

//load quizs
let currentQuiz = 0;
function loadQuiz() {
  deselect();
  const currentQuizLoaded = quizData[currentQuiz];
  questions.innerText = currentQuizLoaded.question;
  a_option.innerText = currentQuizLoaded.a;
  b_option.innerText = currentQuizLoaded.b;
  c_option.innerText = currentQuizLoaded.c;
  d_option.innerText = currentQuizLoaded.d;
  e_option.innerText = currentQuizLoaded.e;
}

// first question
loadQuiz();

// deselect - radio button reset
function deselect() {
  answers.forEach((answerEl) => (answerEl.checked = false));
}

//get answer
function answered() {
  let checkedAnswer;
  answers.forEach((answerEl) => {
    if (answerEl.checked) {
      checkedAnswer = answerEl.id;
    }
  });
  return checkedAnswer;
}


const submit = document.getElementById("submitbtn");
let final = document.getElementById("final");
let score = 0;

//submit eventListener
submit.addEventListener("click", submitted);

//submit
function submitted() {
  let getAnswer = answered();
  if (getAnswer) {
    if (getAnswer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      final.textContent= `Your score is ${score}/5`;
      if (score > 0) {
        submit.innerText = `Well Done`;
      } else submit.innerText = `Better luck next time`;
    }
  }
}
