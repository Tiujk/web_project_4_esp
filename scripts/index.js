//Abrir formulario y cargar los campos con los datos del perfil

const editButton = document.querySelector(".edit-btn");

const popup = document.querySelector(".popup");

let profileName = document.querySelector(".profile__name");

let profileJob = document.querySelector(".profile__profession");

let formName = document.querySelector(".form__name");

let formJob = document.querySelector(".form__profession");

editButton.addEventListener("click", function () {
  popup.classList.toggle("popup_opened");
  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
});

//Cerrar formulario
const closeButton = document.querySelector(".close-btn");

closeButton.addEventListener("click", function () {
  popup.classList.toggle("popup_opened");
});

//Cambiar la info del perfil al dar "Guardar"
const editForm = document.querySelector(".form");

editForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  popup.classList.toggle("popup_opened");
});
