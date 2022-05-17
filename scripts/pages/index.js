import { photographerFactory } from "../factories/photographer.js";

async function getPhotographers() {

    // Récupère les datas des photographes
    const response = await fetch("./data/photographers.json")
    const data = await response.json()
    //console.log(data)

    return { photographers: data.photographers }
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    // Pour chaque photographe existant, on créé le profil correspondant au modèle de la card donnée
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

// Initialise la page index avec tous les photographes
async function indexInit() {
    const { photographers } = await getPhotographers();
    console.log(photographers);
    displayData(photographers);
};
    
indexInit(); 