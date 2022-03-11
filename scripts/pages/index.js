async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    // Pour chaque photographe existant, on créé le profil correspondant au modèle de la card donnée
    photographers.forEach((photographer) => {
        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
};

async function indexInit() {
    // Récupère les datas des photographes

    // Appel du fichier JSON pour récupérer les infos de chaque photographe
    fetch("./data/photographers.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const { photographers } = data
            displayData(photographers)
        })
};
    
indexInit();
    