const box = document.querySelector('#box');
const offX = document.querySelector('#offX');
const offY = document.querySelector('#offY');

box.addEventListener('mousemove', ({ offsetX, offsetY }) => {
  offX.textContent = offsetX;
  offY.textContent = offsetY;
});
