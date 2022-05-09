import { factory } from "../factories/mediaFactory.js"

export function lightbox(medias, media) {
    //console.log("medias", medias);

    const lightbox = document.querySelector(".lightbox")    

    lightbox.innerHTML = `
            <button class="lightbox_next">Suivant</button>
            <button class="lightbox_prev">Précédent</button>
            <button class="lightbox_close">Fermer</button>
            <div class="lightbox_container">
                <div class="lightbox_media"></div>
            </div>
        `

    const close = document.querySelector(".lightbox_close")
    const next = document.querySelector(".lightbox_next")
    const prev = document.querySelector(".lightbox_prev")

    lightbox.style.display = "block"
    
    close.addEventListener("click", () => {
        lightbox.style.display = "none"
    })

    let actuelMediaId = media.id
    //console.log(actuelMediaId);
    

    const lightbox_media = document.querySelector(".lightbox_media")
    const video = document.querySelector(".video")

    lightbox_media.innerHTML = `
        ${factory(media)}
        <p class="lightbox_title">${media.title}</p>
    `

    next.addEventListener("click", () => {
        nextPicture()
    })

    prev.addEventListener("click", () => {
        prevPicture()
    })

    function nextPicture() {
        const actuelIndex = medias.findIndex((element) => {
            return element.id === actuelMediaId
        })

        //Si le média est le dernier élément du tableau medias
        if (actuelIndex !== medias.length) {
            lightbox_media.innerHTML = `
                ${factory(medias[actuelIndex + 1])}
                <p class="lightbox_title">${medias[actuelIndex + 1].title}</p>
            `
        }

        return actuelMediaId = medias[actuelIndex + 1].id
    }

    function prevPicture() {
        const actuelIndex = medias.findIndex((element) => {
            return element.id === actuelMediaId
        })

        //Si le média est le premier élément du tableau medias
        if (actuelIndex !== 0) {
            lightbox_media.innerHTML = `
                ${factory(medias[actuelIndex - 1])}
                <p class="lightbox_title">${medias[actuelIndex - 1].title}</p>
            `
        }

        return actuelMediaId = medias[actuelIndex - 1].id
    }

}

