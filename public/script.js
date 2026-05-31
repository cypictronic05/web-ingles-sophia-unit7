let questions = [];
let currentQuestionIndex = 0;
let selectedResponses = [];
let hasAnswered = false;

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

async function requestJson(url, options = {}) {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

async function loadQuestions() {
  questions = await requestJson("/api/questions");
}

async function startQuiz() {
  startBtn.disabled = true;
  startBtn.textContent = "Loading...";

  try {
    await loadQuestions();
    currentQuestionIndex = 0;
    selectedResponses = [];
    hasAnswered = false;
    showScreen(quizScreen);
    renderQuestion();
  } catch (error) {
    feedback.textContent = "";
    alert("We could not load the quiz. Please try again.");
  } finally {
    startBtn.disabled = false;
    startBtn.textContent = "Start Quiz";
  }
}

function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  hasAnswered = false;
  topicLabel.textContent = currentQuestion.topic || "Practice";
  questionCounter.textContent = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
  progressFill.style.width = `${progress}%`;
  questionText.textContent = currentQuestion.question;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextBtn.disabled = true;
  nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
  optionsGrid.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.className = "option-btn";
    button.type = "button";
    button.textContent = option;
    button.addEventListener("click", () => selectAnswer(option, button));
    optionsGrid.appendChild(button);
  });
}

async function selectAnswer(selectedOption, selectedButton) {
  if (hasAnswered) return;

  const currentQuestion = questions[currentQuestionIndex];
  hasAnswered = true;
  setOptionsDisabled(true);

  try {
    const result = await requestJson("/api/answer", {
      method: "POST",
      body: JSON.stringify({
        questionId: currentQuestion.id,
        selectedAnswer: selectedOption,
      }),
    });

    selectedResponses[currentQuestionIndex] = {
      questionId: currentQuestion.id,
      question: currentQuestion.question,
      selectedAnswer: selectedOption,
      correct: result.correct,
    };

    selectedButton.classList.add(result.correct ? "correct" : "incorrect");
    feedback.textContent = result.correct ? "Correct! Great job!" : "Almost! Keep practicing.";
    feedback.classList.add(result.correct ? "good" : "bad");
    nextBtn.disabled = false;
    nextBtn.focus();
  } catch (error) {
    hasAnswered = false;
    setOptionsDisabled(false);
    feedback.textContent = "We could not check that answer. Please try again.";
    feedback.className = "feedback bad";
  }
}

function setOptionsDisabled(disabled) {
  Array.from(optionsGrid.children).forEach((button) => {
    button.disabled = disabled;
  });
}

async function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex += 1;
    renderQuestion();
    return;
  }

  await showResults();
}

function saveBestScore(percentage) {
  const bestScore = getBestScore();
  if (percentage > bestScore) {
    localStorage.setItem("amazingAnimalsBestScore", String(percentage));
  }
  updateBestScoreLabels();
}

async function showResults() {
  nextBtn.disabled = true;
  nextBtn.textContent = "Checking...";

  try {
    const result = await requestJson("/api/finish", {
      method: "POST",
      body: JSON.stringify({
        answers: selectedResponses.map((response) => ({
          questionId: response.questionId,
          selectedAnswer: response.selectedAnswer,
        })),
      }),
    });

    const incorrect = result.totalQuestions - result.correctAnswers;
    correctCount.textContent = result.correctAnswers;
    incorrectCount.textContent = incorrect;
    percentageScore.textContent = `${result.percentage}%`;
    motivationMessage.textContent = result.message;

    saveBestScore(result.percentage);
    renderReviewList();
    showScreen(resultScreen);
  } catch (error) {
    feedback.textContent = "We could not finish the quiz. Please try again.";
    feedback.className = "feedback bad";
    nextBtn.disabled = false;
    nextBtn.textContent = "Finish";
  }
}

function renderReviewList() {
  reviewList.innerHTML = "";

  selectedResponses.forEach((response, index) => {
    const item = document.createElement("article");
    item.className = `review-item ${response.correct ? "correct-review" : "incorrect-review"}`;

    item.innerHTML = `
      <p><strong>${index + 1}. ${response.question}</strong></p>
      <p>Your answer: ${response.selectedAnswer}</p>
      <p>Result: ${response.correct ? "Correct" : "Needs practice"}</p>
    `;

    reviewList.appendChild(item);
  });
}

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartQuizBtn.addEventListener("click", startQuiz);
tryAgainBtn.addEventListener("click", startQuiz);

updateBestScoreLabels();
