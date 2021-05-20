'use strict';
{
  const humb = document.querySelector(`.header__humb`);
  const btn = document.querySelector(`.header__btn`);

  if (humb.classList.contains(`header__humb--nojs`)) {
    humb.classList.remove(`header__humb--nojs`);
  }

  btn.addEventListener(`click`, () => {
    humb.classList.toggle(`header__humb--active`);
  });
}
