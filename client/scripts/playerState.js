const playerState = {
  score: 0
};

/*if (prediction.class === 'opponent-tag') {
  playerState.score += 10;
  navigator.vibrate(200);
  updateHUD();
}*/

export function updateScore(amoumt)
{
  playerState.score += amount;
}

let timeLeft = 60; // 1 minute in seconds

function startGameTimer() {
  const timerDisplay = document.getElementById('timer');

  const timerInterval = setInterval(() => {
    timeLeft--;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      endGame();
    }
  }, 1000);
}

function endGame() {
  alert('Time’s up! Final Score: ' + playerState.score);
}