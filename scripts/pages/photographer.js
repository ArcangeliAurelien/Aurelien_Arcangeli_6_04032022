import { getData } from "../utils/display.js";
import { getPhotographerInfo } from "../utils/getPhotographerInfo.js"
import { createPhotographerMedia } from "../utils/createPhotographerMedia.js"
import { counterLikes } from "../utils/counterLikes.js"
import { getSortData } from "../utils/getSortData.js"
import { lightbox } from "../utils/lightbox.js"


async function init() {
    let verifyUrl = new URLSearchParams(window.location.search)
    //verifyUrl.has(photographer.id);
    let photographeId = verifyUrl.get('photographer')
    
    const { data } = await getData()
    const { medias } = getPhotographerInfo(photographeId, data)

    // Trier par
    getSortData(medias)

    // Zone d'affichage des médias
    document.querySelector(".portfolio-section").innerHTML = createPhotographerMedia(medias);

    // Nombre de likes par média
    counterLikes(medias)

    // Lightbox
    const mediasElements = document.querySelectorAll(".media")
    mediasElements.forEach((media, index) => {
        // Evénement au clic
        media.addEventListener("click", () => {
            lightbox(medias, medias[index])
        })
        // Evénement au clavier
        media.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                console.log("Entrer");
                lightbox(medias, medias[index])
            }
        })
    })
}

init()