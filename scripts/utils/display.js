import { profileFactory } from "../factories/photographer.js";

// Vérifie le profile du photographe
export async function getData() {
    const response = await fetch("./data/photographers.json")
    const data = await response.json()

    let verifyUrl = new URLSearchParams(window.location.search)
    let photographeId = verifyUrl.get('photographer')
    console.log(photographeId);

    const photographerProfile = data.photographers.find(e => e.id == photographeId)

    const photographHeader = document.querySelector(".photograph-header")

    if (photographerProfile.id == photographeId) {
        const photographerModel = profileFactory(photographerProfile)
        const profileCardDOM = photographerModel.getProfilePhotographerDOM()
        photographHeader.appendChild(profileCardDOM);
    }

    return { photographerProfile, data }
}
