import { updateScore } from './playerState.js';
import { updateHUD } from './uiupdate.js';

function onTagScanned(tag) {
  if (tag === 'enemy') {
    updateScore(10);
    updateHUD(playerState);
  }
}
