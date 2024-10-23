const listquestions =[
    {
        question: "Do the Cowboys Suck",
        options: ["Yes", "No", "Maybe", "Yes definitly"],
        answer: "Yes",
      },
      {
        question: "How many Languages Does Jose Know?",
        options: ["1", "2", "3", "4"],
        answer: "2",
      },
      {
        question: "Is Cset Fun",
        options: ["mahhhh", "It ok", "Yes", "No"],
        answer: "It ok",
      },

      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
      },
      {
        question: "Who wrote the play Romeo and Juliet?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling"],
        answer: "William Shakespeare",
      },
      {
        question: "What is the capital city of Japan?",
        options: ["Beijing", "Seoul", "Tokyo", " Bangkok"],
        answer: " Tokyo",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
      },
      {
        question: "In what year did the Titanic sink?",
        options: ["1912", "1905", " 1923", "1918"],
        answer: "1912",
      },
      {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "AU"],
        answer: "H2O",
      },
      {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", " Leonardo da Vinci", " Michelangelo"],
        answer: "Leonardo da Vinci",
      },
      
]
let currentQuestionIndex = 0;
let score = 0;

const questionEl = document.querySelector(".question");
const optionsEl = document.querySelector(".questions");
const submitBtn = document.getElementById("submit");
const resultContainer = document.querySelector(".result");
const restartBtn = document.getElementById("restart");
const numPerTotalEl = document.getElementById("num-per-total");

function loadQuestion() {
  const currentQuestion = listquestions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;

  optionsEl.innerHTML = ""
  currentQuestion.options.forEach((option, index) => {
    const input = document.createElement("input")
    input.type = "radio"
    input.id = `answer-${index}`
    input.name = "answer"
    input.value = index

    const label = document.createElement("label")
    label.setAttribute("for", `answer-${index}`)
    label.textContent = option

    optionsEl.appendChild(input)
    optionsEl.appendChild(label)
    optionsEl.appendChild(document.createElement("br"))
  })

  numPerTotalEl.textContent = `${currentQuestionIndex + 1} / ${listquestions.length}`
}

function getSelectedAnswer() {
  const answers = document.querySelectorAll('input[name="answer"]')
  let selectedAnswer = null

  answers.forEach((answer) => {
    if (answer.checked) {
      selectedAnswer = parseInt(answer.value)
    }
  })

  return selectedAnswer;
}

submitBtn.addEventListener("click", () => {
    const selectedAnswer = getSelectedAnswer();
  
    if (selectedAnswer === null) {
      alert("Please select an answer.");
      return;
    }
  
    
    const correctAnswer = listquestions[currentQuestionIndex].answer
    const selectedOptionText = listquestions[currentQuestionIndex].options[selectedAnswer]
  
    if (selectedOptionText === correctAnswer) {
      score++
    }
  
    currentQuestionIndex++
  
    if (currentQuestionIndex < listquestions.length) {
      loadQuestion()
    } else {
      showResult()
    }
  })

function showResult() {
  document.querySelector(".quiz-container").style.display = "none"
  resultContainer.parentElement.style.display = "block"
  resultContainer.querySelector("h3").textContent = `You got ${score} / ${listquestions.length} questions correct!`
}

restartBtn.addEventListener("click", () => {
  score = 0
  currentQuestionIndex = 0
  resultContainer.parentElement.style.display = "none"
  document.querySelector(".quiz-container").style.display = "block"
  loadQuestion()
})

loadQuestion()