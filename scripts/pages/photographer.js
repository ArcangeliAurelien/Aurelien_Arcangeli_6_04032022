async function profileData(photographers) {
    photographers.forEach((photographer) => {

        //Verifie si l'url contient l'id du photographe
        let verifyUrl = new URLSearchParams(window.location.search);
        verifyUrl.has(photographer.id);
        let param = verifyUrl.get('photographer');
        console.log(param);

        if (photographer.id == param) {
            const photographHeader = document.querySelector(".photograph-header");
            const photographerModel = profileFactory(photographer);
            const userCardDOM = photographerModel.getProfilePhotographerDOM();
            photographHeader.appendChild(userCardDOM);
            console.log(photographer);
        }
    });
    
}

async function profileInit() {
    // Récupère les datas des photographes

    // Appel du fichier JSON pour récupérer les infos de chaque photographe
    fetch("./data/photographers.json")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const { photographers } = data
            profileData(photographers)
        })
};

profileInit();

/*async function profileInit() {
    
}

profileInit()*/