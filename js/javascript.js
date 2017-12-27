var userEnter = document.querySelector(".user-item-link");
var userModal = document.querySelector(".user-modal");

userEnter.addEventListener("click", function(evt){
  evt.preventDefault();
  console.log('Вход');
  userModal.classList.add("modal-show");
});
