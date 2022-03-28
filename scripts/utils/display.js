import { profileFactory } from "../factories/photographer.js";
//import { mediaFactory } from "../factories/media.js"

export async function getData() {
    let verifyUrl = new URLSearchParams(window.location.search)
    //verifyUrl.has(photographer.id);
    let photographeId = verifyUrl.get('photographer')
    console.log(photographeId);

    const response = await fetch("./data/photographers.json")
    const data = await response.json()
    console.log(data);
    const photographerProfile = data.photographers.find(e => e.id == photographeId)
    //console.log(photographerProfile);

    const photographHeader = document.querySelector(".photograph-header")

    if (photographerProfile.id == photographeId) {
        const photographerModel = profileFactory(photographerProfile)
        const profileCardDOM = photographerModel.getProfilePhotographerDOM()
        photographHeader.appendChild(profileCardDOM);
    }

    return { photographerProfile }
    
}