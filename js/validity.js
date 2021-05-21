'use strict';
{
  const warpControl = document.querySelectorAll(`.question__control-wrap`);
  const btnSend = document.querySelector(`.success--js`);
  const control = document.querySelectorAll(`.question__control`);
  const modalSuccess = document.querySelector(`.success-modal`);
  const overlay = document.querySelector(`.pay-modal-overlay`);
  const btnClose = document.querySelector(`.success-modal-btn`);
  const re = /^[0-9]{10}$/;
  const re2 = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  const closeModal = () => {
    overlay.classList.remove(`pay-modal-overlay--active`);
    modalSuccess.classList.remove(`success-modal--active`);
    btnClose.removeEventListener(`click`, closeModal);
    overlay.removeEventListener(`click`, closeModal);
  };

  const closeModalEsc = (evt) => {
    if (evt.key === `Escape`) {
      evt.preventDefault();
      overlay.classList.remove(`pay-modal-overlay--active`);
      modalSuccess.classList.remove(`success-modal--active`);
    }
    window.removeEventListener(`keydown`, closeModalEsc);
  };

  btnSend.addEventListener(`click`, (evt) => {
    evt.preventDefault();
    let dagger1 = false;
    let dagger2 = true;
    if (control[0].value !== `` && re.test(control[0].value)) {
      warpControl[0].classList.remove(`question__control-wrap--active`);
      dagger1 = true;
    } else {
      warpControl[0].classList.add(`question__control-wrap--active`);
      dagger1 = false;
    }
    if (control[1].value !== ``) {
      dagger2 = false;
      if (re2.test(control[1].value)) {
        warpControl[1].classList.remove(`question__control-wrap--active`);
        dagger2 = true;
      } else {
        warpControl[1].classList.add(`question__control-wrap--active`);
        dagger2 = false;
      }
    } else {
      warpControl[1].classList.remove(`question__control-wrap--active`);
    }
    if (dagger2 && dagger1) {
      evt.preventDefault();
      overlay.classList.add(`pay-modal-overlay--active`);
      modalSuccess.classList.add(`success-modal--active`);
      btnClose.addEventListener(`click`, closeModal);
      window.addEventListener(`keydown`, closeModalEsc);
      overlay.addEventListener(`click`, closeModal);
    }
  });
}
