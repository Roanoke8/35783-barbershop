var userEnter = document.querySelector(".user-item-link");
var userModal = document.querySelector(".user-modal");
var buttonClose = document.querySelector(".user-modal-close");
var modalFocus = document.querySelector(".user-input-name");

userEnter.addEventListener("click", function(evt){
  evt.preventDefault();
  console.log('Кнопка Вход');
  userModal.classList.add("modal-show");
  modalFocus.focus();
});

buttonClose.addEventListener("click", function(evt){
  evt.preventDefault();
  console.log('Кнопка выход из модального окна');
  userModal.classList.remove("modal-show");
});
