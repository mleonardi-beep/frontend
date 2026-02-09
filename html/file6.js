// Prende il bottone "ADD MOVIE" dentro l'header
const addMovieButton = document.querySelector("header button");

// Prende la finestra (modal) che deve aprirsi
const addModal = document.getElementById("add-modal");

// Prende lo sfondo scuro dietro la finestra
const backdrop = document.getElementById("backdrop");

// Prende il bottone "Cancel" dentro la modal
const cancelButton = addModal.querySelector(".btn--passive");

// FUNZIONE PER APRIRE LA MODAL
function openModal() {
  addModal.style.display = "block";
  backdrop.style.display = "block";
}

// FUNZIONE PER CHIUDERE LA MODAL
function closeModal() {
  addModal.style.display = "none";
  backdrop.style.display = "none";
}

// EVENTI
addMovieButton.addEventListener("click", openModal);
cancelButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);
