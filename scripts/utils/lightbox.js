import { factory } from "../factories/mediaFactory.js"

export function lightbox(medias, media) {

    const lightbox = document.querySelector(".lightbox")    

    lightbox.innerHTML = `
            <button class="lightbox_next" aria-label="Suivant">Suivant</button>
            <button class="lightbox_prev" aria-label="Précédent">Précédent</button>
            <button class="lightbox_close" aria-label="Fermer">Fermer</button>
            <div class="lightbox_container">
                <div class="lightbox_media"></div>
            </div>
        `

    const close = document.querySelector(".lightbox_close")
    const next = document.querySelector(".lightbox_next")
    const prev = document.querySelector(".lightbox_prev")

    // Ouvrir la lightbox
    lightbox.style.display = "block"
    
    // Fermer la lightbox
    close.addEventListener("click", () => {
        lightbox.style.display = "none"
    })

    let actuelMediaId = media.id

    const lightbox_media = document.querySelector(".lightbox_media")
    
    // Afficher le contenu de la lightbox
    lightbox_media.innerHTML = `
        ${factory(media,"light")}
        <p class="lightbox_title">${media.title}</p>
    `

    //Média suivant au clic sur la flèche droite
    next.addEventListener("click", () => {
        nextPicture()
    })

    //Média précédent au clic sur la flèche gauche
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
                ${factory(medias[actuelIndex + 1], "light")}
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
                ${factory(medias[actuelIndex - 1], "light")}
                <p class="lightbox_title">${medias[actuelIndex - 1].title}</p>
            `
        }

        return actuelMediaId = medias[actuelIndex - 1].id
    }

    //Navigation au clavier sur la lightbox
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            return lightbox.style.display = "none"
        }

        if (event.key === "ArrowRight") {
            nextPicture()
        }

        if (event.key === "ArrowLeft") {
            prevPicture()
        }

    })

}