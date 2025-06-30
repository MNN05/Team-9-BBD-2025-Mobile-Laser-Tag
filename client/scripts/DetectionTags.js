import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';

let model;
cocoSsd.load().then(loadedModel => {
  model = loadedModel;
  detectFrame();
});

function detectFrame() {
  model.detect(video).then(predictions => {
    drawBoundingBoxes(predictions);
    requestAnimationFrame(detectFrame);
  });
}