const contactButton = document.querySelector('.contacts-button');
const popupFeedback = document.querySelector('.modal-feedback');
const popupClose = document.querySelector('.modal-close');
const userName = popupFeedback.querySelector('[name=name]');
const map = document.querySelector('.contacts-map');
const popupMap = document.querySelector('.modal-map');

contactButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupFeedback.classList.add('modal-show');
  userName.focus();
});

map.addEventListener('click', function (evt) {
  evt.preventDefault();
  popupMap.classList.add('modal-show');
});

window.addEventListener('kewdown', function(evt) {
  if (evt.keyCode === 27) {
    if (popupFeedback.classList.contains('modal-show')){
      evt.preventDefault();
      popupFeedback.classList.remove('modal-show');
    };
  };
});

popupClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  popupFeedback.classList.remove('modal-show');
});
