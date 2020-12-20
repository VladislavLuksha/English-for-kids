import { LABEL, TRAIN, PLAY, CIRCLE } from 'constants/slider';
import modeGame from '../constants/ModeGame';

 
export default function addEventLabel() {
  LABEL.addEventListener('click', () => {
    if (PLAY.classList.contains('none')) {
      TRAIN.classList.add('none');
      PLAY.classList.remove('none');
      modeGame.modeGame = false;
    } else {
      PLAY.classList.add('none');
      TRAIN.classList.remove('none');
    }
    if (CIRCLE.classList.contains('purple')) {
        CIRCLE.classList.remove('purple');
    } else {
       CIRCLE.classList.add('purple'); 
    }
});
} 
