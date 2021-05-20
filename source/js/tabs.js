// 'use strict';
// {
//   const tabs = document.querySelector(`.tabs__list`);
//   let count = 0;

//   tabs.addEventListener(`mousedown`, (evt) => {
//     evt.preventDefault();
//     let startCoords = {
//       x: evt.clientX
//     };
//     const onMouseMove = (moveEvt) => {
//       moveEvt.preventDefault();

//       let shift = {
//         x: startCoords.x - moveEvt.clientX
//       };
//       tabs.style.transform = `translateX(-` + (count - shift.x) + `px)`;
//     };
//     const onMouseUp = (upEvt) => {
//       upEvt.preventDefault();

//       tabs.removeEventListener(`mousemove`, onMouseMove);
//       tabs.removeEventListener(`mouseup`, onMouseUp);
//       count += shift.x;
//     };
//     tabs.addEventListener(`mousemove`, onMouseMove);
//     tabs.addEventListener(`mouseup`, onMouseUp);
//   });
// }
