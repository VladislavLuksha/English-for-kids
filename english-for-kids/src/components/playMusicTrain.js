

export default {
  addPlayMusic() {
    document.addEventListener('click', (event) => {
      if (event.target.closest('.category-card')) {
        const word = event.target.closest('.category-card').querySelector('.image-title').innerText.split(' ')[0];
        const path = `../src/data/sounds/${word}.mp3`;
        const audio = new Audio(path);
        audio.play();
      }
    });
  }
}