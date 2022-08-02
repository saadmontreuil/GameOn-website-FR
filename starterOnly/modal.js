// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click",()=> launchModal()));

closeBtn.forEach((btn) => btn.addEventListener("click",()=> closeModal()));

// launch modal form
const launchModal=()=> {
  modalbg.style.display = "block";
}

// Close modal form
const closeModal=()=> {
  modalbg.style.display = "none";
}








const nameChecker = (value,mesaage) => {

  const firstContainer = document.querySelector(".first-container");
  const errorDisplay = document.querySelector(".first > span");
  let isValid = false;

  if (value.length < 2) {
    errorDisplay.textContent = mesaage;
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};


/**
 * function email
 */
const emailChecker = (value) => {
  const emailContainer = document.querySelector(".email");
  const errorDisplay = document.querySelector(".email > span");
  let isValid = false;

  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    errorDisplay.textContent = "Veuillez entrer une adresse mail valide.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/**
 * function birthdate
 */
 function birthdateChecker(value) {
  const birthdateContainer = document.querySelector(".birthdate");
  const errorDisplay = document.querySelector(".birthdate > span");
  let isValid = false;
  
  var today = new Date();
  var birthDate = new Date(value);
  var age = today.getFullYear() - birthDate.getFullYear();
  

  if (age < 13 || age > 120) {
    errorDisplay.textContent = "Veuillez entrer une date de naissance valide.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
}

/**
 * function quantity
 */
const quantityChecker = (value) => {
  const quantityContainer = document.querySelector(".quantityr");
  const errorDisplay = document.querySelector(".quantity > span");
  let isValid = false;

  if (!value) {
    errorDisplay.textContent = "Veuillez entrer un chiffre.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/**
 * function checkbox */
const checkboxContainer = () => {
  const errorDisplay = document.querySelector(".formData > small");
  const radios = document.querySelectorAll('input[name = "location"]');
  isValid = false;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isValid = true;
      errorDisplay.textContent = "";
      break;
    } else {
      errorDisplay.textContent = "Veuillez sélectionner un choix.";
      errorDisplay.style.color = "red";
      errorDisplay.style.fontSize = "0.6em";
    }
  }
  return isValid;
};

/**
 * function checkbox cgv
 * @returns
 */
const checkboxChecker = () => {
  const errorDisplay = document.querySelector(".formData > div");
  const check = document.querySelector(".checkbox1");
  const checkbox1 = document.querySelector("#checkbox1");
  let isValid = false;

  if (!checkbox1.checked) {
    errorDisplay.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};


