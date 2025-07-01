// --- Configuration ---
const teams = ['RED', 'BLUE'];
let playerTeam = null;

// --- DOM Elements ---
const redScoreEl = document.getElementById('team-red-score');
const blueScoreEl = document.getElementById('team-blue-score');
const teamLabelEl = document.getElementById('team-label');
const statusLabelEl = document.getElementById('status-label');
const shootBtn = document.getElementById('shoot-button');

// --- Set Player's Team ---
function setTeam(team) {
  playerTeam = team.toUpperCase();
  teamLabelEl.textContent = `YOUR TEAM: ${playerTeam}`;
  document.documentElement.style.setProperty(
    '--team-color',
    playerTeam === 'RED' ? 'darkred' : 'darkblue'
  );
}

// --- Update Team Scores ---
function updateScores(red, blue) {
  redScoreEl.textContent = `TEAM RED'S SCORE: ${red}`;
  blueScoreEl.textContent = `TEAM BLUE'S SCORE: ${blue}`;
}

// --- Show Status Message ---
function showMessage(type) {
  const hitSound = document.getElementById('sfx-hit');
  const missSound = document.getElementById('sfx-miss');

  if (type === 'hit') {
    statusLabelEl.textContent = 'PERFECT!!';
    statusLabelEl.style.color = 'lime';
    hitSound.currentTime = 0;
    hitSound.play();
  } else if (type === 'miss') {
    statusLabelEl.textContent = 'MISS';
    statusLabelEl.style.color = 'orange';
    missSound.currentTime = 0;
    missSound.play();
  } else {
    statusLabelEl.textContent = '';
  }

  setTimeout(() => {
    statusLabelEl.textContent = '';
  }, 1500);
}

// --- Shoot Logic ---
function simulateShot() {
  const hitSuccess = Math.random() > 0.5;
  showMessage(hitSuccess ? 'hit' : 'miss');
}

// --- Event Listener ---
shootBtn.addEventListener('click', simulateShot);