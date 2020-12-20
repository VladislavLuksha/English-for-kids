
export default {
  addEventFlipCard() {
    
    document.addEventListener('click', (event) => {
      if (event.target.closest('.card-button')) {
        event.target.closest('.card-front').classList.add('front');
        event.target.closest('.category-card').querySelector('.card-back').classList.add('back');

        const card = event.target.closest('.category-card');
        
        card.addEventListener('mouseleave', (e) => {
          e.target.closest('.category-card').querySelector('.card-front').classList.remove('front');
          e.target.closest('.category-card').querySelector('.card-back').classList.remove('back');
        })
      }
    });
  }
}