let score = 0;

function updateScore(change) {
  score += change;
  document.getElementById('score-display').textContent = `Score: ${score}`;
}

function onSuccessfulHit() {
  updateScore(1);
  document.getElementById('hit-sound').play();
  navigator.vibrate(200);
}