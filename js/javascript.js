var userEnter = document.querySelector(".user-item-link");
var userModal = document.querySelector(".user-modal");
var buttonClose = document.querySelector(".user-modal-close");
var modalFocus = document.querySelector(".user-input-name");
var callMaps = document.querySelector(".info-callmaps-button");
var mapsModal = document.querySelector(".maps-modal");
var mapsClose = document.querySelector(".maps-button-close");

userEnter.addEventListener("click", function(evt){
  evt.preventDefault();
  console.log('Кнопка Вход');
  userModal.classList.add("modal-show");
  modalFocus.focus();
});
function func() {
  userModal.classList.add("modal-show");
  modalFocus.focus();
  console.log( 'Показать окно' );
  }
  setTimeout(func, 25000);

buttonClose.addEventListener("click", function(evt){
  evt.preventDefault();
  console.log('Кнопка выход из модального окна');
  userModal.classList.remove("modal-show");
});
callMaps.addEventListener("click", function(evt){
  evt.preventDefault();
  console.log('Клик по кнопке Как проехать');
  mapsModal.classList.add("maps-modal-show");
});
mapsClose.addEventListener("click", function(evt){
  evt.preventDefault();
  mapsModal.classList.remove("maps-modal-show");
});
