fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
        let verifyUrl = new URLSearchParams(window.location.search)
        //verifyUrl.has(photographer.id);
        let photographeId = verifyUrl.get('photographer')

        const photographerProfile = data.photographers.find(e => e.id == photographeId)
        const name = photographerProfile.name
        //console.log(name);
        
        const contact_head = document.querySelector(".contact_head")
        
        contact_head.innerHTML = `<div><h2>Contactez-moi</h2>
            <h2>${name}</h2></div>
            <img src="assets/icons/close.svg" alt="fermer" onclick="closeModal()" aria-label="Close Contact form"/>`

    })

// Ouvrir la modale
function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "block";
}

// Fermer la modale
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

let myForm = document.getElementById('myForm');
myForm.addEventListener('submit', validation);

// Fermeture de la modale contact avec le clavier
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeModal()
    }
})

// Expression régulière
let myRegexName = /^[a-zA-Zàáâäçèéêëìíîïñòóôöùúûü-\s]+$/;
let myRegexEmail = /^([a-z0-9_\.-]+\@[\da-z\.-]+\.[a-z\.]{2,6})$/;

// Vérifier la validité du prénom
function first() {
    let checkFirst = document.getElementById('first')
    let erreurFirst = document.getElementById('erreurFirst');

    if (checkFirst.value == "" || checkFirst.value.length < 2) {
        erreurFirst.innerHTML = "Veuillez entrer 2 caractères ou plus";
        checkFirst.className = "incorrect";
        return false;
    } else if (myRegexName.test(checkFirst.value) == false) {
        erreurFirst.innerHTML = "Les chiffres ne sont pas autorisé";
        checkFirst.className = "incorrect";
        return false;
    } else {
        erreurFirst.innerHTML = "";
        checkFirst.className = "correct";
        console.log(checkFirst.value);
        return true;
    };
}

// Vérifier la validité du nom
function last() {
    let checkLast = document.getElementById('last');
    let erreurLast = document.getElementById('erreurLast');

    if (checkLast.value == "" || checkLast.value.length < 2) {
        erreurLast.innerHTML = "Veuillez entrer 2 caractères ou plus";
        checkLast.className = "incorrect";
        return false;
    } else if (myRegexName.test(checkLast.value) == false) {
        erreurLast.innerHTML = "Les chiffres ne sont pas autorisé";
        checkLast.className = "incorrect";
        return false;
    } else {
        erreurLast.innerHTML = "";
        checkLast.className = "correct";
        console.log(checkLast.value);
        return true;
    };
}

// Vérifier la validité de l'adresse mail
function email() {
    let checkEmail = document.getElementById('email');
    let erreurEmail = document.getElementById('erreurEmail');

    if (checkEmail.value == "") {
        erreurEmail.innerHTML = "Veuillez entrer une adresse mail valide";
        checkEmail.className = "incorrect";
        return false;
    } else if (myRegexEmail.test(checkEmail.value) == false) {
        erreurEmail.innerHTML = "Ceci n'est pas une adresse mail";
        checkEmail.className = "incorrect";
        return false;
    } else {
        erreurEmail.innerHTML = "";
        checkEmail.className = "correct";
        console.log(checkEmail.value);
        return true;
    };
}

// Vérifier le contenu du message
function message() {
    let checkTextarea = document.getElementById('textarea')
    let erreurTextarea = document.getElementById('erreurTextarea')

    if (checkTextarea.value == null || checkTextarea.value == '') {
        erreurTextarea.innerHTML = "Veuillez indiquer votre message"
        checkTextarea.className = "incorrect"
        return false
    } else {
        erreurTextarea.innerHTML = ""
        checkTextarea.className = "correct"
        console.log(checkTextarea.value)
        return true
    }
}

// Valider les champs
function validation(e) {
    e.preventDefault()

    if (first() && last() && email() && message()) {
        myForm.reset()
    }
    
}