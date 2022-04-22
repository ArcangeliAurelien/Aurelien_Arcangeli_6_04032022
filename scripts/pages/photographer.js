import { getData } from "../utils/display.js";
import { getPhotographerInfo } from "../utils/getPhotographerInfo.js"
import { createPhotographerMedia } from "../utils/createPhotographerMedia.js"
import { counterLikes } from "../utils/counterLikes.js"
import { getSortData } from "../utils/getSortData.js"


let verifyUrl = new URLSearchParams(window.location.search)
//verifyUrl.has(photographer.id);
let photographeId = verifyUrl.get('photographer')

async function init() {
    const { data } = await getData()
    const { medias } = getPhotographerInfo(photographeId, data)

    // Trier par
    getSortData(medias)

    // Zone d'affichage des médias
    document.querySelector(".portfolio-section").innerHTML = createPhotographerMedia(medias);

    // Nombre de likes par média
    counterLikes(medias)
}

init()