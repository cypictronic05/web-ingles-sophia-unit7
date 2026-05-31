const questions = [
  {
    question: 'What is the opposite of "huge"?',
    options: ["tiny", "noisy", "dangerous", "lazy"],
    answer: "tiny",
    topic: "Adjectives",
  },
  {
    question: "Complete: The elephant ___ huge.",
    options: ["were", "was", "are", "be"],
    answer: "was",
    topic: "Was / Were",
  },
  {
    question: "Complete: The parrots ___ noisy.",
    options: ["was", "is", "were", "am"],
    answer: "were",
    topic: "Was / Were",
  },
  {
    question: "Complete: ___ a tiger in the zoo.",
    options: ["There were", "There was", "They was", "It were"],
    answer: "There was",
    topic: "There was / There were",
  },
  {
    question: "Complete: ___ three monkeys in the tree.",
    options: ["There was", "There were", "It was", "He were"],
    answer: "There were",
    topic: "There was / There were",
  },
  {
    question: 'What is the past of "go"?',
    options: ["goed", "went", "goes", "going"],
    answer: "went",
    topic: "Past Simple",
  },
  {
    question: 'What is the past of "watch"?',
    options: ["watched", "watch", "went", "saw"],
    answer: "watched",
    topic: "Past Simple",
  },
  {
    question: 'What animal is a "parrot"?',
    options: ["loro", "perro", "caballo", "rana"],
    answer: "loro",
    topic: "Animals",
  },
  {
    question: 'What is the opposite of "quiet"?',
    options: ["tiny", "cute", "noisy", "safe"],
    answer: "noisy",
    topic: "Adjectives",
  },
  {
    question: "Complete: They ___ dangerous.",
    options: ["was", "were", "is", "am"],
    answer: "were",
    topic: "Was / Were",
  },
  {
    question: 'What animal is a "giraffe"?',
    options: ["jirafa", "serpiente", "pez", "oso"],
    answer: "jirafa",
    topic: "Animals",
  },
  {
    question: 'What animal is a "rabbit"?',
    options: ["conejo", "gato", "tigre", "pájaro"],
    answer: "conejo",
    topic: "Animals",
  },
  {
    question: 'What is the opposite of "safe"?',
    options: ["dangerous", "large", "cute", "quiet"],
    answer: "dangerous",
    topic: "Adjectives",
  },
  {
    question: 'What is the opposite of "lazy"?',
    options: ["hard-working", "tiny", "ugly", "heavy"],
    answer: "hard-working",
    topic: "Adjectives",
  },
  {
    question: "Complete: She ___ at the zoo yesterday.",
    options: ["were", "was", "are", "be"],
    answer: "was",
    topic: "Was / Were",
  },
  {
    question: "Complete: We ___ happy to see the lion.",
    options: ["was", "were", "is", "am"],
    answer: "were",
    topic: "Was / Were",
  },
  {
    question: "Complete: I ___ scared of the snake.",
    options: ["was", "were", "are", "be"],
    answer: "was",
    topic: "Was / Were",
  },
  {
    question: "Complete: You ___ very clever.",
    options: ["was", "were", "is", "am"],
    answer: "were",
    topic: "Was / Were",
  },
  {
    question: "Complete: ___ a cute rabbit in the garden.",
    options: ["There was", "There were", "Were there", "They were"],
    answer: "There was",
    topic: "There was / There were",
  },
  {
    question: "Complete: ___ two fish in the pond.",
    options: ["There was", "There were", "It was", "He was"],
    answer: "There were",
    topic: "There was / There were",
  },
  {
    question: 'What is the past of "eat"?',
    options: ["eated", "ate", "eats", "eating"],
    answer: "ate",
    topic: "Past Simple",
  },
  {
    question: 'What is the past of "see"?',
    options: ["saw", "seed", "seen", "seeing"],
    answer: "saw",
    topic: "Past Simple",
  },
  {
    question: 'What is the past of "play"?',
    options: ["played", "playd", "plays", "playing"],
    answer: "played",
    topic: "Past Simple",
  },
  {
    question: 'What is the past of "run"?',
    options: ["runned", "ran", "runs", "running"],
    answer: "ran",
    topic: "Past Simple",
  },
  {
    question: 'What animal is a "snake"?',
    options: ["serpiente", "rana", "perro", "caballo"],
    answer: "serpiente",
    topic: "Animals",
  },
  {
    question: 'What animal is a "horse"?',
    options: ["caballo", "mono", "pez", "león"],
    answer: "caballo",
    topic: "Animals",
  },
  {
    question: 'What is the opposite of "cute"?',
    options: ["ugly", "quiet", "safe", "large"],
    answer: "ugly",
    topic: "Adjectives",
  },
  {
    question: 'What is the past of "take"?',
    options: ["taked", "took", "takes", "taking"],
    answer: "took",
    topic: "Past Simple",
  },
  {
    question: 'What animal is a "frog"?',
    options: ["rana", "oso", "pájaro", "gato"],
    answer: "rana",
    topic: "Animals",
  },
  {
    question: 'What is the opposite of "light"?',
    options: ["heavy", "tiny", "cute", "quiet"],
    answer: "heavy",
    topic: "Adjectives",
  },
  {
    question: 'What animal is a "dog"?',
    options: ["perro", "gato", "pez", "mono"],
    answer: "perro",
    topic: "Animals",
  },
  {
    question: 'What animal is a "cat"?',
    options: ["gato", "caballo", "oso", "rana"],
    answer: "gato",
    topic: "Animals",
  },
  {
    question: 'What animal is an "elephant"?',
    options: ["elefante", "tigre", "loro", "serpiente"],
    answer: "elefante",
    topic: "Animals",
  },
  {
    question: 'What animal is a "lion"?',
    options: ["león", "conejo", "pez", "perro"],
    answer: "león",
    topic: "Animals",
  },
  {
    question: 'What animal is a "tiger"?',
    options: ["tigre", "gato", "pájaro", "caballo"],
    answer: "tigre",
    topic: "Animals",
  },
  {
    question: 'What animal is a "monkey"?',
    options: ["mono", "oso", "rana", "elefante"],
    answer: "mono",
    topic: "Animals",
  },
  {
    question: 'What animal is a "fish"?',
    options: ["pez", "loro", "león", "gato"],
    answer: "pez",
    topic: "Animals",
  },
  {
    question: 'What animal is a "bird"?',
    options: ["pájaro", "serpiente", "caballo", "tigre"],
    answer: "pájaro",
    topic: "Animals",
  },
  {
    question: 'What animal is a "bear"?',
    options: ["oso", "mono", "conejo", "pez"],
    answer: "oso",
    topic: "Animals",
  },
  {
    question: 'What is the opposite of "large"?',
    options: ["small", "noisy", "dangerous", "active"],
    answer: "small",
    topic: "Adjectives",
  },
  {
    question: 'What is the opposite of "clever"?',
    options: ["stupid", "cute", "safe", "large"],
    answer: "stupid",
    topic: "Adjectives",
  },
  {
    question: 'What is the past of "walk"?',
    options: ["walked", "walk", "went", "walking"],
    answer: "walked",
    topic: "Past Simple",
  },
  {
    question: 'What is the past of "jump"?',
    options: ["jumped", "jumpt", "jump", "ran"],
    answer: "jumped",
    topic: "Past Simple",
  },
  {
    question: 'What is the past of "look"?',
    options: ["looked", "look", "saw", "looking"],
    answer: "looked",
    topic: "Past Simple",
  },
  {
    question: 'What is the past of "visit"?',
    options: ["visited", "visit", "visitted", "came"],
    answer: "visited",
    topic: "Past Simple",
  },
  {
    question: 'What is the past of "have"?',
    options: ["had", "haved", "has", "having"],
    answer: "had",
    topic: "Past Simple",
  },
  {
    question: 'What is the past of "make"?',
    options: ["made", "maked", "makes", "making"],
    answer: "made",
    topic: "Past Simple",
  },
  {
    question: 'What is the past of "come"?',
    options: ["came", "comed", "comes", "coming"],
    answer: "came",
    topic: "Past Simple",
  },
];

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartQuizBtn = document.getElementById("restart-quiz-btn");
const tryAgainBtn = document.getElementById("try-again-btn");
const topicLabel = document.getElementById("topic-label");
const questionCounter = document.getElementById("question-counter");
const progressFill = document.getElementById("progress-fill");
const questionText = document.getElementById("question-text");
const optionsGrid = document.getElementById("options-grid");
const feedback = document.getElementById("feedback");
const correctCount = document.getElementById("correct-count");
const incorrectCount = document.getElementById("incorrect-count");
const percentageScore = document.getElementById("percentage-score");
const motivationMessage = document.getElementById("motivation-message");
const reviewList = document.getElementById("review-list");
const bestScoreStart = document.getElementById("best-score-start");
const bestScoreQuiz = document.getElementById("best-score-quiz");
const bestScoreResult = document.getElementById("best-score-result");

let currentQuestionIndex = 0;
let selectedAnswers = [];
let hasAnswered = false;

function getBestScore() {
  return Number(localStorage.getItem("amazingAnimalsBestScore")) || 0;
}

function updateBestScoreLabels() {
  const bestScore = getBestScore();
  const label = `Best score: ${bestScore}%`;
  bestScoreStart.textContent = label;
  bestScoreQuiz.textContent = label;
  bestScoreResult.textContent = label;
}

function showScreen(screen) {
  [startScreen, quizScreen, resultScreen].forEach((item) => item.classList.remove("active"));
  screen.classList.add("active");
}

function shuffleOptions(options) {
  const shuffled = [...options];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function startQuiz() {
  currentQuestionIndex = 0;
  selectedAnswers = [];
  hasAnswered = false;
  showScreen(quizScreen);
  renderQuestion();
}

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  hasAnswered = false;
  topicLabel.textContent = currentQuestion.topic;
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  progressFill.style.width = `${progress}%`;
  questionText.textContent = currentQuestion.question;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.disabled = true;
  nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
  optionsGrid.innerHTML = "";

  shuffleOptions(currentQuestion.options).forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(option, button));
    optionsGrid.appendChild(button);
  });
}

function selectAnswer(selectedOption, selectedButton) {
  if (hasAnswered) return;

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedOption === currentQuestion.answer;
  hasAnswered = true;
  selectedAnswers[currentQuestionIndex] = selectedOption;

  Array.from(optionsGrid.children).forEach((button) => {
    button.disabled = true;

    if (button.textContent === currentQuestion.answer) {
      button.classList.add("correct");
    }
  });

  if (!isCorrect) {
    selectedButton.classList.add("incorrect");
  }

  feedback.textContent = isCorrect
    ? "Correct! Great job!"
    : `Almost! The correct answer is "${currentQuestion.answer}".`;
  feedback.classList.add(isCorrect ? "good" : "bad");
  nextBtn.disabled = false;
  nextBtn.focus();
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  showResults();
}

function calculateResult() {
  const correct = questions.reduce((total, question, index) => {
    return total + (selectedAnswers[index] === question.answer ? 1 : 0);
  }, 0);
  const incorrect = questions.length - correct;
  const percentage = Math.round((correct / questions.length) * 100);

  return { correct, incorrect, percentage };
}

function getMotivationMessage(percentage) {
  if (percentage >= 90) return "Excellent! You are ready for the exam!";
  if (percentage >= 70) return "Very good! Keep practicing a little more.";
  if (percentage >= 50) return "Good effort! Review the difficult topics.";
  return "Don't worry! Try again and keep learning.";
}

function saveBestScore(percentage) {
  const bestScore = getBestScore();
  if (percentage > bestScore) {
    localStorage.setItem("amazingAnimalsBestScore", String(percentage));
  }
  updateBestScoreLabels();
}

function showResults() {
  const result = calculateResult();
  correctCount.textContent = result.correct;
  incorrectCount.textContent = result.incorrect;
  percentageScore.textContent = `${result.percentage}%`;
  motivationMessage.textContent = getMotivationMessage(result.percentage);

  saveBestScore(result.percentage);
  renderReviewList();
  showScreen(resultScreen);
}

function renderReviewList() {
  reviewList.innerHTML = "";

  questions.forEach((question, index) => {
    const userAnswer = selectedAnswers[index] || "No answer";
    const isCorrect = userAnswer === question.answer;
    const item = document.createElement("article");
    item.className = `review-item ${isCorrect ? "correct-review" : "incorrect-review"}`;

    item.innerHTML = `
      <p><strong>${index + 1}. ${question.question}</strong></p>
      <p>Your answer: ${userAnswer}</p>
      <p>Correct answer: ${question.answer}</p>
    `;

    reviewList.appendChild(item);
  });
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartQuizBtn.addEventListener("click", startQuiz);
tryAgainBtn.addEventListener("click", startQuiz);

updateBestScoreLabels();
