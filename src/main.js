import './index.html';
import './style.scss';

const buttonsElement = document.querySelectorAll('.bookmark__button');

buttonsElement.forEach((button) => {
  button.addEventListener('click', () => {

    if (button.classList.contains('bookmark__button--active')) {
      button.classList.remove('bookmark__button--active');
    } else {
      buttonsElement.forEach((btn) => {
        btn.classList.remove('bookmark__button--active');
      });

      button.classList.add('bookmark__button--active');
    }
  });
});
