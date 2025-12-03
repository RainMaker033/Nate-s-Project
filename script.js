// SAT Premier Prep - Main JavaScript (Offline Version)

let questionsArray = [];
let currentQuestionIndex = 0;
let selectedAnswer = null;
let showResult = false;

// Configuration: Maps topics directly to the Global Variables from your .js files
// We use a ternary check (typeof X !== 'undefined') to prevent crashes if a file is missing
const topicConfig = {
  'algebra': {
    title: 'Algebra Practice',
    data: (typeof ALGEBRA_DATA !== 'undefined') ? ALGEBRA_DATA : null,
    backLink: 'math.html',
    category: 'math'
  },
  'geometry': {
    title: 'Geometry and Trigonometry Practice',
    data: (typeof GEOMETRY_DATA !== 'undefined') ? GEOMETRY_DATA : null,
    backLink: 'math.html',
    category: 'math'
  },
  'advanced-math': {
    title: 'Advanced Math Practice',
    data: (typeof ADVANCED_MATH_DATA !== 'undefined') ? ADVANCED_MATH_DATA : null,
    backLink: 'math.html',
    category: 'math'
  },
  'data-analysis': {
    title: 'Problem-Solving and Data Analysis Practice',
    data: (typeof DATA_ANALYSIS_DATA !== 'undefined') ? DATA_ANALYSIS_DATA : null,
    backLink: 'math.html',
    category: 'math'
  },
  'information-ideas': {
    title: 'Information and Ideas Practice',
    data: (typeof INFORMATION_IDEAS_DATA !== 'undefined') ? INFORMATION_IDEAS_DATA : null,
    backLink: 'reading.html',
    category: 'reading'
  },
  'craft-structure': {
    title: 'Craft and Structure Practice',
    data: (typeof CRAFT_STRUCTURE_DATA !== 'undefined') ? CRAFT_STRUCTURE_DATA : null,
    backLink: 'reading.html',
    category: 'reading'
  },
  'expression-ideas': {
    title: 'Expression of Ideas Practice',
    data: (typeof EXPRESSION_IDEAS_DATA !== 'undefined') ? EXPRESSION_IDEAS_DATA : null,
    backLink: 'reading.html',
    category: 'reading'
  },
  'conventions': {
    title: 'Standard English Conventions Practice',
    data: (typeof CONVENTIONS_DATA !== 'undefined') ? CONVENTIONS_DATA : null,
    backLink: 'reading.html',
    category: 'reading'
  },
  'all-math': {
    title: 'All Math Topics Practice',
    data: [
      (typeof ALGEBRA_DATA !== 'undefined') ? ALGEBRA_DATA : null,
      (typeof GEOMETRY_DATA !== 'undefined') ? GEOMETRY_DATA : null,
      (typeof ADVANCED_MATH_DATA !== 'undefined') ? ADVANCED_MATH_DATA : null,
      (typeof DATA_ANALYSIS_DATA !== 'undefined') ? DATA_ANALYSIS_DATA : null
    ],
    backLink: 'math.html',
    category: 'math',
    isCombined: true
  },
  'all-reading': {
    title: 'All Reading & Writing Practice',
    data: [
      (typeof INFORMATION_IDEAS_DATA !== 'undefined') ? INFORMATION_IDEAS_DATA : null,
      (typeof CRAFT_STRUCTURE_DATA !== 'undefined') ? CRAFT_STRUCTURE_DATA : null,
      (typeof EXPRESSION_IDEAS_DATA !== 'undefined') ? EXPRESSION_IDEAS_DATA : null,
      (typeof CONVENTIONS_DATA !== 'undefined') ? CONVENTIONS_DATA : null
    ],
    backLink: 'reading.html',
    category: 'reading',
    isCombined: true
  },
  'all': {
    title: 'All SAT Questions Practice',
    data: [
      (typeof ALGEBRA_DATA !== 'undefined') ? ALGEBRA_DATA : null,
      (typeof GEOMETRY_DATA !== 'undefined') ? GEOMETRY_DATA : null,
      (typeof ADVANCED_MATH_DATA !== 'undefined') ? ADVANCED_MATH_DATA : null,
      (typeof DATA_ANALYSIS_DATA !== 'undefined') ? DATA_ANALYSIS_DATA : null,
      (typeof INFORMATION_IDEAS_DATA !== 'undefined') ? INFORMATION_IDEAS_DATA : null,
      (typeof CRAFT_STRUCTURE_DATA !== 'undefined') ? CRAFT_STRUCTURE_DATA : null,
      (typeof EXPRESSION_IDEAS_DATA !== 'undefined') ? EXPRESSION_IDEAS_DATA : null,
      (typeof CONVENTIONS_DATA !== 'undefined') ? CONVENTIONS_DATA : null
    ],
    backLink: 'index.html',
    category: 'all',
    isCombined: true
  }
};

function getTopic() {
  const params = new URLSearchParams(window.location.search);
  return params.get('topic') || 'algebra';
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Helper to extract the question array from a data object
function extractQuestions(dataObj) {
  if (!dataObj) return [];
  if (dataObj.questions) return dataObj.questions;
  if (Array.isArray(dataObj)) return dataObj;
  return [];
}

async function loadQuestions() {
  const topic = getTopic();
  const config = topicConfig[topic];

  if (!config) {
    document.getElementById('loading').textContent = 'Topic not found!';
    return;
  }

  document.getElementById('topic-title').textContent = config.title;
  const backLink = document.getElementById('back-link');
  if (backLink && config.backLink) backLink.href = config.backLink;

  try {
    let rawQuestions = [];

    // Check if we have data
    if (!config.data) {
      throw new Error("Data not found. Did you load the .js data files in practice.html?");
    }

    if (config.isCombined && Array.isArray(config.data)) {
      // Handle combined topics (merging multiple arrays)
      config.data.forEach(dataObj => {
        if (dataObj) {
          rawQuestions = rawQuestions.concat(extractQuestions(dataObj));
        }
      });
    } else {
      // Handle single topics
      rawQuestions = extractQuestions(config.data);
    }

    // Check if we actually found any questions
    if (rawQuestions.length === 0) {
      throw new Error("No questions found in the data files.");
    }

    // Map data to internal format
    questionsArray = rawQuestions.map((q, index) => ({
      id: q.id || index + 1,
      question: q.question,
      answers: q.answers,
      correctAnswer: q.correctAnswer,
      rationale: q.rationale,
      hasImage: q.hasImage || false
    }));

    questionsArray = shuffleArray(questionsArray);

    if (questionsArray.length > 0) {
      currentQuestionIndex = 0;
      displayQuestion();
      document.getElementById('loading').style.display = 'none';
      document.getElementById('question-card').style.display = 'block';
    } else {
      document.getElementById('loading').textContent = 'No questions available for this topic.';
    }
  } catch (error) {
    console.error('Error loading questions:', error);
    document.getElementById('loading').textContent = 'Failed to load questions. Make sure .js data files are included in practice.html';
  }
}

function displayQuestion() {
  const question = questionsArray[currentQuestionIndex];
  selectedAnswer = null;
  showResult = false;

  document.getElementById('question-counter').textContent =
    `Question ${currentQuestionIndex + 1} of ${questionsArray.length}`;

  document.getElementById('question-number').textContent = `Question ${currentQuestionIndex + 1}`;
  document.getElementById('question-text').textContent = question.question;

  const answersContainer = document.getElementById('answers-container');
  answersContainer.innerHTML = '';

  question.answers.forEach((answer, index) => {
    const div = document.createElement('div');
    div.className = 'answer-option';
    div.innerHTML = `
      <input type="radio" name="answer" id="answer-${index}" value="${answer}">
      <label for="answer-${index}">${answer}</label>
    `;
    div.addEventListener('click', () => selectAnswer(answer, div));
    answersContainer.appendChild(div);
  });

  document.getElementById('result-card').style.display = 'none';
  document.getElementById('submit-btn').style.display = 'block';
  document.getElementById('next-btn').style.display = 'none';
}

function selectAnswer(answer, element) {
  if (showResult) return;

  selectedAnswer = answer;

  document.querySelectorAll('.answer-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  element.classList.add('selected');
  element.querySelector('input').checked = true;
}

function checkAnswer() {
  if (!selectedAnswer) {
    alert('Please select an answer before submitting.');
    return;
  }

  showResult = true;
  const question = questionsArray[currentQuestionIndex];
  const correctAnswer = question.correctAnswer;

  // Logic to handle "A. Answer text" vs just "Answer text"
  // It checks if the selected answer starts with the correct letter (e.g. "A")
  const isCorrect = selectedAnswer.startsWith(correctAnswer) ||
    selectedAnswer.charAt(0) === correctAnswer.charAt(0);

  document.querySelectorAll('.answer-option').forEach(opt => {
    opt.classList.add('disabled');
    const value = opt.querySelector('input').value;

    // Highlight the correct answer green
    if (value.startsWith(correctAnswer) || value.charAt(0) === correctAnswer.charAt(0)) {
      opt.classList.add('correct');
    }
    // Highlight the wrong selected answer red
    else if (value === selectedAnswer && !isCorrect) {
      opt.classList.add('incorrect');
    }
  });

  const resultCard = document.getElementById('result-card');
  resultCard.style.display = 'block';
  resultCard.className = 'result-card ' + (isCorrect ? 'correct' : 'incorrect');

  document.getElementById('result-title').textContent = isCorrect ? '✓ Correct!' : '✗ Incorrect';
  document.getElementById('rationale').textContent = question.rationale;

  document.getElementById('submit-btn').style.display = 'none';
  document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex >= questionsArray.length) {
    // Optional: Reshuffle or end quiz
    alert("You have completed all questions for this session! Restarting...");
    questionsArray = shuffleArray(questionsArray);
    currentQuestionIndex = 0;
  }

  displayQuestion();
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('question-card')) {
    loadQuestions();

    document.getElementById('submit-btn').addEventListener('click', checkAnswer);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
  }
});