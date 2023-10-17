var currentQuestion = 1;
var score = 0;

var questionContainer = document.getElementById("question-container");
var previousButton = document.getElementById("previous-button");
var nextButton = document.getElementById("next-button");
var scoreButton = document.getElementById("score-button");
var scoreContainer = document.getElementById("score-container");
var scoreDisplay = document.getElementById("score");

previousButton.addEventListener("click", goToPreviousQuestion);
nextButton.addEventListener("click", goToNextQuestion);
scoreButton.addEventListener("click", showScore);

function goToPreviousQuestion() {
  if (currentQuestion > 1) {
    currentQuestion--;
    updateQuestion();
  }
}

function goToNextQuestion() {
  if (currentQuestion < 10) {
    currentQuestion++;
    updateQuestion();
  } else {
    scoreButton.style.display = "inline";
  }
}

function showScore() {
  questionContainer.style.display = "none";
  scoreContainer.style.display = "block";
  scoreDisplay.textContent = score;

var previousSongButton = document.getElementById("previous-song-button");
var playPauseButton = document.getElementById("play-pause-button");
var nextSongButton = document.getElementById("next-song-button");

previousSongButton.addEventListener("click", playPreviousSong);
playPauseButton.addEventListener("click", playPauseSong);
nextSongButton.addEventListener("click", playNextSong);

function playPreviousSong() {
  // Lógica para voltar para a música anterior
  console.log("Voltar para a música anterior");
}

function playPauseSong() {
  // Lógica para pausar ou reproduzir a música
  console.log("Pausar/reproduzir a música");
}

function playNextSong() {
  // Lógica para avançar para a próxima música
  console.log("Avançar para a próxima música");
}

