import router from './components/Router';

import newCard from './components/flipCard';
import music from './components/playMusicTrain';
import burger from './components/BurgerClose';
import sliderMove from './components/sliderMove';


router.init();
burger.addEventLinks();
music.addPlayMusic();
newCard.addEventFlipCard();

sliderMove();

document.addEventListener('click', () => {
  const words = document.querySelectorAll('.image-title');
  words.forEach((word) => console.log(word.innerHTML));
})




