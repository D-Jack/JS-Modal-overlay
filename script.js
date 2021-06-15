'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const openModalHandler = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModalHandler = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModel.length; i++) {
  btnsOpenModel[i].addEventListener('click', openModalHandler);
}

btnCloseModal.addEventListener('click', closeModalHandler);
overlay.addEventListener('click', closeModalHandler);

document.addEventListener('keydown', function (event) {
  console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalHandler();
  }
});
