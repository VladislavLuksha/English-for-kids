
const links = document.getElementsByClassName('menu__item');


export default {
  addEventLinks() {
    document.addEventListener('click', (event) => {
      console.log(event.target.closest('.menu__item'));
    });
  }
}