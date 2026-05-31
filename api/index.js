const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const questions = [
  {
    id: 1,
    question: 'What is the opposite of "huge"?',
    options: ["tiny", "noisy", "dangerous", "lazy"],
    answer: "tiny",
    topic: "Adjectives",
  },
  {
    id: 2,
    question: "Complete: The elephant ___ huge.",
    options: ["were", "was", "are", "be"],
    answer: "was",
    topic: "Was / Were",
  },
  {
    id: 3,
    question: "Complete: The parrots ___ noisy.",
    options: ["was", "is", "were", "am"],
    answer: "were",
    topic: "Was / Were",
  },
  {
    id: 4,
    question: "Complete: ___ a tiger in the zoo.",
    options: ["There were", "There was", "They was", "It were"],
    answer: "There was",
    topic: "There was / There were",
  },
  {
    id: 5,
    question: "Complete: ___ three monkeys in the tree.",
    options: ["There was", "There were", "It was", "He were"],
    answer: "There were",
    topic: "There was / There were",
  },
  {
    id: 6,
    question: 'What is the past of "go"?',
    options: ["goed", "went", "goes", "going"],
    answer: "went",
    topic: "Past Simple",
  },
  {
    id: 7,
    question: 'What is the past of "watch"?',
    options: ["watched", "watch", "went", "saw"],
    answer: "watched",
    topic: "Past Simple",
  },
  {
    id: 8,
    question: 'What animal is a "parrot"?',
    options: ["loro", "perro", "caballo", "rana"],
    answer: "loro",
    topic: "Animals",
  },
  {
    id: 9,
    question: 'What is the opposite of "quiet"?',
    options: ["tiny", "cute", "noisy", "safe"],
    answer: "noisy",
    topic: "Adjectives",
  },
  {
    id: 10,
    question: "Complete: They ___ dangerous.",
    options: ["was", "were", "is", "am"],
    answer: "were",
    topic: "Was / Were",
  },
  {
    id: 11,
    question: 'What animal is a "giraffe"?',
    options: ["jirafa", "serpiente", "pez", "oso"],
    answer: "jirafa",
    topic: "Animals",
  },
  {
    id: 12,
    question: 'What animal is a "rabbit"?',
    options: ["conejo", "gato", "tigre", "pajaro"],
    answer: "conejo",
    topic: "Animals",
  },
  {
    id: 13,
    question: 'What is the opposite of "safe"?',
    options: ["dangerous", "large", "cute", "quiet"],
    answer: "dangerous",
    topic: "Adjectives",
  },
  {
    id: 14,
    question: 'What is the opposite of "lazy"?',
    options: ["hard-working", "tiny", "ugly", "heavy"],
    answer: "hard-working",
    topic: "Adjectives",
  },
  {
    id: 15,
    question: "Complete: She ___ at the zoo yesterday.",
    options: ["were", "was", "are", "be"],
    answer: "was",
    topic: "Was / Were",
  },
  {
    id: 16,
    question: "Complete: We ___ happy to see the lion.",
    options: ["was", "were", "is", "am"],
    answer: "were",
    topic: "Was / Were",
  },
  {
    id: 17,
    question: "Complete: I ___ scared of the snake.",
    options: ["was", "were", "are", "be"],
    answer: "was",
    topic: "Was / Were",
  },
  {
    id: 18,
    question: "Complete: You ___ very clever.",
    options: ["was", "were", "is", "am"],
    answer: "were",
    topic: "Was / Were",
  },
  {
    id: 19,
    question: "Complete: ___ a cute rabbit in the garden.",
    options: ["There was", "There were", "Were there", "They were"],
    answer: "There was",
    topic: "There was / There were",
  },
  {
    id: 20,
    question: "Complete: ___ two fish in the pond.",
    options: ["There was", "There were", "It was", "He was"],
    answer: "There were",
    topic: "There was / There were",
  },
  {
    id: 21,
    question: 'What is the past of "eat"?',
    options: ["eated", "ate", "eats", "eating"],
    answer: "ate",
    topic: "Past Simple",
  },
  {
    id: 22,
    question: 'What is the past of "see"?',
    options: ["saw", "seed", "seen", "seeing"],
    answer: "saw",
    topic: "Past Simple",
  },
  {
    id: 23,
    question: 'What is the past of "play"?',
    options: ["played", "playd", "plays", "playing"],
    answer: "played",
    topic: "Past Simple",
  },
  {
    id: 24,
    question: 'What is the past of "run"?',
    options: ["runned", "ran", "runs", "running"],
    answer: "ran",
    topic: "Past Simple",
  },
  {
    id: 25,
    question: 'What animal is a "snake"?',
    options: ["serpiente", "rana", "perro", "caballo"],
    answer: "serpiente",
    topic: "Animals",
  },
  {
    id: 26,
    question: 'What animal is a "horse"?',
    options: ["caballo", "mono", "pez", "leon"],
    answer: "caballo",
    topic: "Animals",
  },
  {
    id: 27,
    question: 'What is the opposite of "cute"?',
    options: ["ugly", "quiet", "safe", "large"],
    answer: "ugly",
    topic: "Adjectives",
  },
  {
    id: 28,
    question: 'What is the past of "take"?',
    options: ["taked", "took", "takes", "taking"],
    answer: "took",
    topic: "Past Simple",
  },
  {
    id: 29,
    question: 'What animal is a "frog"?',
    options: ["rana", "oso", "pajaro", "gato"],
    answer: "rana",
    topic: "Animals",
  },
  {
    id: 30,
    question: 'What is the opposite of "light"?',
    options: ["heavy", "tiny", "cute", "quiet"],
    answer: "heavy",
    topic: "Adjectives",
  },
  {
    id: 31,
    question: 'What animal is a "dog"?',
    options: ["perro", "gato", "pez", "mono"],
    answer: "perro",
    topic: "Animals",
  },
  {
    id: 32,
    question: 'What animal is a "cat"?',
    options: ["gato", "caballo", "oso", "rana"],
    answer: "gato",
    topic: "Animals",
  },
  {
    id: 33,
    question: 'What animal is an "elephant"?',
    options: ["elefante", "tigre", "loro", "serpiente"],
    answer: "elefante",
    topic: "Animals",
  },
  {
    id: 34,
    question: 'What animal is a "lion"?',
    options: ["leon", "conejo", "pez", "perro"],
    answer: "leon",
    topic: "Animals",
  },
  {
    id: 35,
    question: 'What animal is a "tiger"?',
    options: ["tigre", "gato", "pajaro", "caballo"],
    answer: "tigre",
    topic: "Animals",
  },
  {
    id: 36,
    question: 'What animal is a "monkey"?',
    options: ["mono", "oso", "rana", "elefante"],
    answer: "mono",
    topic: "Animals",
  },
  {
    id: 37,
    question: 'What animal is a "fish"?',
    options: ["pez", "loro", "leon", "gato"],
    answer: "pez",
    topic: "Animals",
  },
  {
    id: 38,
    question: 'What animal is a "bird"?',
    options: ["pajaro", "serpiente", "caballo", "tigre"],
    answer: "pajaro",
    topic: "Animals",
  },
  {
    id: 39,
    question: 'What animal is a "bear"?',
    options: ["oso", "mono", "conejo", "pez"],
    answer: "oso",
    topic: "Animals",
  },
  {
    id: 40,
    question: 'What is the opposite of "large"?',
    options: ["small", "noisy", "dangerous", "active"],
    answer: "small",
    topic: "Adjectives",
  },
  {
    id: 41,
    question: 'What is the opposite of "clever"?',
    options: ["stupid", "cute", "safe", "large"],
    answer: "stupid",
    topic: "Adjectives",
  },
  {
    id: 42,
    question: 'What is the past of "walk"?',
    options: ["walked", "walk", "went", "walking"],
    answer: "walked",
    topic: "Past Simple",
  },
  {
    id: 43,
    question: 'What is the past of "jump"?',
    options: ["jumped", "jumpt", "jump", "ran"],
    answer: "jumped",
    topic: "Past Simple",
  },
  {
    id: 44,
    question: 'What is the past of "look"?',
    options: ["looked", "look", "saw", "looking"],
    answer: "looked",
    topic: "Past Simple",
  },
  {
    id: 45,
    question: 'What is the past of "visit"?',
    options: ["visited", "visit", "visitted", "came"],
    answer: "visited",
    topic: "Past Simple",
  },
  {
    id: 46,
    question: 'What is the past of "have"?',
    options: ["had", "haved", "has", "having"],
    answer: "had",
    topic: "Past Simple",
  },
  {
    id: 47,
    question: 'What is the past of "make"?',
    options: ["made", "maked", "makes", "making"],
    answer: "made",
    topic: "Past Simple",
  },
  {
    id: 48,
    question: 'What is the past of "come"?',
    options: ["came", "comed", "comes", "coming"],
    answer: "came",
    topic: "Past Simple",
  },
];

function shuffle(values) {
  const shuffled = [...values];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

function publicQuestion(question) {
  return {
    id: question.id,
    question: question.question,
    options: shuffle(question.options),
    topic: question.topic,
  };
}

function findQuestion(questionId) {
  return questions.find((question) => question.id === Number(questionId));
}

function motivationMessage(percentage) {
  if (percentage >= 90) return "Excellent! You are ready for the exam!";
  if (percentage >= 70) return "Very good! Keep practicing a little more.";
  if (percentage >= 50) return "Good effort! Review the difficult topics.";
  return "Don't worry! Try again and keep learning.";
}

function validateSelectedAnswer(question, selectedAnswer) {
  return typeof selectedAnswer === "string" && question.options.includes(selectedAnswer);
}

app.get(["/api/questions", "/questions"], (req, res) => {
  res.json(questions.map(publicQuestion));
});

app.post(["/api/answer", "/answer"], (req, res) => {
  const { questionId, selectedAnswer } = req.body || {};
  const question = findQuestion(questionId);

  if (!question) {
    return res.status(404).json({ error: "Question not found." });
  }

  if (!validateSelectedAnswer(question, selectedAnswer)) {
    return res.status(400).json({ error: "Invalid selectedAnswer." });
  }

  return res.json({ correct: selectedAnswer === question.answer });
});

app.post(["/api/finish", "/finish"], (req, res) => {
  const { answers } = req.body || {};

  if (!Array.isArray(answers)) {
    return res.status(400).json({ error: "answers must be an array." });
  }

  let correctAnswers = 0;

  for (const item of answers) {
    const question = findQuestion(item && item.questionId);

    if (!question) {
      return res.status(404).json({ error: "Question not found." });
    }

    if (!validateSelectedAnswer(question, item.selectedAnswer)) {
      return res.status(400).json({ error: "Invalid selectedAnswer." });
    }

    if (item.selectedAnswer === question.answer) {
      correctAnswers += 1;
    }
  }

  const totalQuestions = questions.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return res.json({
    totalQuestions,
    correctAnswers,
    percentage,
    message: motivationMessage(percentage),
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Quiz API running at http://localhost:${port}`);
  });
}

module.exports = app;
