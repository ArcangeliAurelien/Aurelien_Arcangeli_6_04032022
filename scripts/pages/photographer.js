import { getData } from "../utils/display.js";
import { getPhotographerInfo } from "../utils/getPhotographerInfo.js"
import {createPhotographerMedia} from "../utils/createPhotographerMedia.js"

let verifyUrl = new URLSearchParams(window.location.search)
//verifyUrl.has(photographer.id);
let photographeId = verifyUrl.get('photographer')



async function init() {
    const { data } = await getData()
    const photographerInfo = getPhotographerInfo(photographeId, data)

    document.querySelector(".portfolio-section").innerHTML = createPhotographerMedia(photographerInfo.medias);
}

init()