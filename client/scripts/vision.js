// scripts/vision.js
import * as cocoSsd from '@tensorflow-models/coco-ssd';

let model;
let video;
let canvas;
let ctx;
let detectionCallback = () => {};

export async function initVision(videoElementId, canvasElementId, onDetect) {
  video = document.getElementById(videoElementId);
  canvas = document.getElementById(canvasElementId);
  ctx = canvas.getContext('2d');
  detectionCallback = onDetect;

  await setupCamera();
  model = await cocoSsd.load();
  detectLoop();
}

async function setupCamera() {
  const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
  video.srcObject = stream;
  await new Promise(resolve => video.onloadedmetadata = resolve);
  video.play();
}

async function detectLoop() {
  const predictions = await model.detect(video);
  drawDetections(predictions);
  detectionCallback(predictions);
  requestAnimationFrame(detectLoop);
}

function drawDetections(predictions) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  predictions.forEach(pred => {
    const [x, y, width, height] = pred.bbox;
    ctx.strokeStyle = 'lime';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
    ctx.fillStyle = 'black';
    ctx.fillText(pred.class, x, y > 10 ? y - 5 : 10);
  });
}