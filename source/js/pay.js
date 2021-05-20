'use strict';
{
  const btns = document.querySelectorAll(`.pay-modal--js`);
  const modal = document.querySelector(`.pay-modal`);
  const btnClose = document.querySelector(`.pay-modal__btn-close`);
  const overlay = document.querySelector(`.pay-modal-overlay`);
  const closeModalBtn = () => {
    modal.classList.remove(`pay-modal--active`);
    overlay.classList.remove(`pay-modal-overlay--active`);
    btnClose.removeEventListener(`click`, closeModalBtn);
    overlay.removeEventListener(`click`, closeModalBtn);
  };
  const closeModalEsc = (evt) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      modal.classList.remove(`pay-modal--active`);
      overlay.classList.remove(`pay-modal-overlay--active`);
    }
    window.removeEventListener(`keydown`, closeModalEsc);
  };
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener(`click`, (evt) => {
      evt.preventDefault();
      modal.classList.add(`pay-modal--active`);
      overlay.classList.add(`pay-modal-overlay--active`);
      btnClose.addEventListener(`click`, closeModalBtn);
      window.addEventListener(`keydown`, closeModalEsc);
      overlay.addEventListener(`click`, closeModalBtn);
    });
  }
}
