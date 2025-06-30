/*const shootSound = new Audio('/sounds/shoot.wav');
shootSound.play();*/

document.getElementById('shoot-btn').addEventListener('click', () => {
  navigator.vibrate(100);
  document.getElementById('shoot-sound').play();
  
});