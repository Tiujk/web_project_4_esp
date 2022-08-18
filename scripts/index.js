//Abrir formulario edit y cargar los campos con los datos del perfil
const editButton = document.querySelector(".edit-btn");
const editPopup = document.querySelector(".edit-popup");
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__profession");
const formName = document.querySelector(".edit-form__name");
const formJob = document.querySelector(".edit-form__profession");

editButton.addEventListener("click", function () {
  editPopup.classList.toggle("edit-popup_opened");
  document.querySelector(".edit-popup_opened").style.visibility = "visible";
  document.querySelector(".edit-popup_opened").style.opacity = "1";
  formName.value = profileName.textContent;
  formJob.value = profileJob.textContent;
});

//Cerrar formulario edit
const editCloseButton = editPopup.querySelector(".close-btn");

editCloseButton.addEventListener("click", function () {
  editPopup.classList.toggle("edit-popup_opened");
});

//Cambiar la info del perfil al dar "Guardar"
const editForm = document.querySelector(".edit-form");

editForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  profileName.textContent = formName.value;
  profileJob.textContent = formJob.value;
  editPopup.classList.toggle("edit-popup_opened");
});

//Abrir formulario agregar
const addButton = document.querySelector(".add-btn");
const addPopup = document.querySelector(".add-popup");
const cardName = document.querySelector(".card__name");
const cardLink = document.querySelector(".card__image");
const formPlace = document.querySelector(".add-form__place");
const formLink = document.querySelector(".add-form__link");

addButton.addEventListener("click", function () {
  addPopup.classList.toggle("add-popup_opened");
  //formPlace.value = cardName.textContent;
  //formLink.value = cardLink.textContent;
});

//Cerrar formulario agregar
const addCloseButton = addPopup.querySelector(".close-btn");

addCloseButton.addEventListener("click", function () {
  addPopup.classList.toggle("add-popup_opened");
});
