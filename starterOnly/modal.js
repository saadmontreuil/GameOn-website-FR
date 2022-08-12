/**
 * Fonction du navbar
 */

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click",()=> launchModal()));

closeBtn.forEach((btn) => btn.addEventListener("click",()=> closeModal()));

/**
 * Fonction pour ouvrir la modale
 */
const launchModal=()=> {
  modalbg.style.display = "block";
}
/**
 * Fonction pour fermer la modale
 */

const closeModal=()=> {
  modalbg.style.display = "none";
}


const form = document.querySelector("form");
/**
 * Bouton de soumission du formulaire "c'est parti"
 */
const submitInput = form[form.length - 1];
/**
 *  les inputs par leur id
 */
const inputs = document.querySelectorAll(
  "#first, #last, #email, #birthdate, #quantity, input[name=location] , #checkbox1 "
);

/**
 * Fonction qui permet d'évoluer dans chacun des inputs
 */
inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "first":
        nameChecker(e.target.value, "Veuillez entrer un prénom.", "first");
        break;
      case "last":
        nameChecker(e.target.value, "Veuillez entrer un nom.", "last");
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "birthdate":
        birthdateChecker(e.target.value);
        break;
      case "quantity":
        quantityChecker(e.target.value);
        break;
      case "checkbox1":
        checkboxChecker(e.target.value);
      default:
        null;
    }
  });
});



/**
 * function pour vérifier si le nom et prenom sont valides
 */

const nameChecker = (value,mesaage,inp) => {

  const firstContainer = document.querySelector("."+inp);
  const errorDisplay = document.querySelector("."+inp+" > span");
  let isValid = false;

  if (value.length < 2) {
    firstContainer.classList.add("error");
    errorDisplay.textContent = mesaage;
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};


/**
 * function pour vérifier si le email est valide
 */
 const emailChecker = (value) => {
  const emailContainer = document.querySelector(".email");
  const errorDisplay = document.querySelector(".email > span"); 
  let isValid = false;

  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    emailContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer une adresse mail valide.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/**
 * function pour vérifier si la date de naissance est valide
 */
 function birthdateChecker(value) {
  const birthdateContainer = document.querySelector(".birthdate");
  const errorDisplay = document.querySelector(".birthdate > span");
  let isValid = false;
  
  var today = new Date();
  var birthDate = new Date(value);
  var age = today.getFullYear() - birthDate.getFullYear();
  

  if (age < 13 || age > 120 || !value) {
    birthdateContainer.classList.add("error");
    errorDisplay.textContent = "Vous devez entrer votre date de naissance.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
}

/**
 * function pour vérifier si le nombre de tournois est valide
 */
const quantityChecker = (value) => {

  const quantityContainer = document.querySelector(".quantity");
  const errorDisplay = document.querySelector(".quantity > span");
  let isValid = false;

  if (!value || isNaN(value) || value < 1 || value > 30) {
    quantityContainer.classList.add("error");
    errorDisplay.textContent = "Veuillez entrer un chiffre.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};

/**
 * function pour vérifier si un option est selectionné
 */
const checkboxContainer = () => {
  const errorDisplay = document.querySelector("small");
  const radios = document.querySelectorAll('input[name = "location"]');
  isValid = false;

  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      isValid = true;
      errorDisplay.textContent = "";
      break;
    } else {
      errorDisplay.textContent = "Vous devez choisir une option.";
      errorDisplay.style.color = "red";
      errorDisplay.style.fontSize = "0.6em";
    }
  }
  return isValid;
};

/**
 * function pour vérifier si le button est selectionné
 */
const checkboxChecker = () => {
  const errorDisplay = document.querySelector(".formData > div");
  const check = document.querySelector(".checkbox1");
  const checkbox1 = document.querySelector("#checkbox1");
  let isValid = false;

  if (!checkbox1.checked) {
    check.classList.add("error");
    errorDisplay.textContent =
      "Vous devez vérifier que vous acceptez les termes et conditions.";
  } else {
    errorDisplay.textContent = "";
    isValid = true;
  }
  return isValid;
};


/**
 * Vérifier les inputs du formulaire avant sa soumission
 */
 const onSubmit = (e) => {
  e.preventDefault();

  /**
   * Récupérer les valeurs des inputs du formulaire
   */
  const formValues = (inputs) => {
    let data = [];

    for (let i = 0; i < inputs.length; i++) {
      if (
        inputs[i].type === "text" ||
        inputs[i].type === "email" ||
        inputs[i].type === "date" ||
        inputs[i].type === "number"
      ) {
        data.push(inputs[i].value);
      }

      if (inputs[i].type === "checkbox") {
        let currentValue = "";

        if (inputs[i].checked) {
          currentValue = inputs[i].value;
        }
        data.push(currentValue);
      }
    }
    return data;
  };
  /**
   * Vérifie la valeur de chacun des inputs
   */
  const formIsValid = (values) => {

  /**
  * Teste la validité de chaque input
  */
    let validInputs = [];

    validInputs.push(nameChecker(values[0], "Veuillez entrer 2 caractères ou plus pour le champ du nom.", "first"));
    validInputs.push(nameChecker(values[1], "Veuillez entrer 2 caractères ou plus pour le champ du prénom.", "last"));
    validInputs.push(emailChecker(values[2]));
    validInputs.push(birthdateChecker(values[3]));
    validInputs.push(quantityChecker(values[4]));
    validInputs.push(checkboxChecker(values[5]));
    validInputs.push(checkboxContainer());

    let isValid = true;

    for (let i = 0; i < validInputs.length; i++) {
      if (validInputs[i] === false) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  // si Valid
  if (formIsValid(formValues(inputs))) {
    document.querySelector(".modal-body").style.display = "none";
    document.querySelector(".formConfirmation").style.display = "block";
  } else {
    document.querySelector(".modal-body").style.display = "block";
    document.querySelector(".formConfirmation").style.display = "none";
  }
};

submitInput.addEventListener("click", (e) => onSubmit(e));


const btnSubmit = document.querySelector(".btn-submit");
const modalConfirmation = document.querySelector(".formConfirmation");
const spanValidModal = document.querySelector(".formConfirmation > span");
const btnSubmitConfirm = document.querySelector(".btn-submit-confirm");
 
/**
 * Fonction pour ouvrir la modale de confirmation d'inscription
 */
function launchModalConfirmation() {
  spanValidModal.innerHTML = "Merci pour <br> votre inscription";
}

btnSubmit.addEventListener("click", launchModalConfirmation);

/**
 * Fonction pour fermer la modale de confirmation d'inscription
 */
function closeModalConfirmation() {
  modalbg.style.display = "none";
  window.location.reload();
}

btnSubmitConfirm.addEventListener("click", closeModalConfirmation);
