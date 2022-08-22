//Mostrar las 6 cartas iniciales al cargar la página activando botones like y remove
const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
const cardsGallery = document.querySelector(".cards-gallery");

initialCards.forEach((item) => {
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  //Activar/desactivar like
  card.querySelector(".like-btn").addEventListener("click", function (evt) {
    evt.target.classList.toggle("like-btn_active");
  });
  //Borrar tarjeta
  card.querySelector(".remove-btn").addEventListener("click", function (evt) {
    evt.target.closest(".card").remove();
  });
  //Abrir y cerrar popup de imagen completa
  const cardImage = card.querySelector(".card__image");
  const imagePopup = document.querySelector(".image-popup");
  cardImage.addEventListener("click", function (evt) {
    //imagePopup.classList.toggle("edit-popup_opened");
    evt.target = imagePopup.style.display = "flex";
    const landscapeLink = document.querySelector(".landscape-window__image");
    const landscapeTitle = document.querySelector(".landscape-window__title");
    landscapeLink.src = cardLink.src;
    landscapeTitle.textContent = cardName.textContent;
  });
  //Cerrar formulario edit
  const imageCloseButton = imagePopup.querySelector(".close-btn");
  imageCloseButton.addEventListener("click", function (evt) {
    //imagePopup.classList.toggle("edit-popup_opened");
    evt.target = imagePopup.style.display = "none";
  });
  cardsGallery.append(card);
  const cardName = card.querySelector(".card__name");
  const cardLink = card.querySelector(".card__image");
  cardName.textContent = item.name;
  cardLink.src = item.link;
});

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
const formPlace = document.querySelector(".add-form__place");
const formLink = document.querySelector(".add-form__link");

addButton.addEventListener("click", function () {
  addPopup.classList.toggle("add-popup_opened");
});

//Cerrar formulario agregar
const addCloseButton = addPopup.querySelector(".close-btn");

addCloseButton.addEventListener("click", function () {
  addPopup.classList.toggle("add-popup_opened");
});

//Agregar una nueva tarjeta con el botón "Crear", activando botones like y remove
const addForm = document.querySelector(".add-form");

addForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const cardTemplate = document.querySelector("#card-template").content;
  const card = cardTemplate.querySelector(".card").cloneNode(true);
  //Activar/desactivar like
  card.querySelector(".like-btn").addEventListener("click", function (evt) {
    evt.target.classList.toggle("like-btn_active");
  });
  //Borrar tarjeta
  card.querySelector(".remove-btn").addEventListener("click", function (evt) {
    evt.target.closest(".card").remove();
  });
  //Abrir y cerrar popup de imagen completa
  const cardImage = card.querySelector(".card__image");
  const imagePopup = document.querySelector(".image-popup");
  cardImage.addEventListener("click", function (evt) {
    evt.target = imagePopup.style.display = "flex";
    const landscapeLink = document.querySelector(".landscape-window__image");
    const landscapeTitle = document.querySelector(".landscape-window__title");
    landscapeLink.src = cardLink.src;
    landscapeTitle.textContent = cardName.textContent;
  });
  //Cerrar formulario edit
  const imageCloseButton = imagePopup.querySelector(".close-btn");
  imageCloseButton.addEventListener("click", function (evt) {
    evt.target = imagePopup.style.display = "none";
  });
  cardsGallery.prepend(card);
  const cardName = card.querySelector(".card__name");
  const cardLink = card.querySelector(".card__image");
  cardName.textContent = formPlace.value;
  cardLink.src = formLink.value;
  addPopup.classList.toggle("add-popup_opened");
});
