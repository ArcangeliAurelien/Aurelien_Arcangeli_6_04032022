import { createPhotographerMedia } from "./createPhotographerMedia.js"
import { counterLikes } from "./counterLikes.js"
import { lightbox } from "./lightbox.js"

export function getSortData(medias) {

    // Créer la liste déroulante
    const main = document.querySelector("#main")
    const photographHeader = document.querySelector(".photograph-header")
    const photographMedias = document.querySelector(".portfolio-section")
    const sortContainer = document.createElement("div")

    main.style.display = "flex"
    main.style.flexDirection = "column"

    photographHeader.style.order = "1"

    photographMedias.style.order = "3"

    sortContainer.style.order = "2"
    sortContainer.classList.add("sortContainer")
    sortContainer.innerHTML = ""

    const label = document.createElement("label")
    label.setAttribute("class", "label")
    label.textContent = "Trier par"
    sortContainer.appendChild(label)

    const zoneSelect = document.createElement("div")
    zoneSelect.classList.add("custom-select")
    sortContainer.appendChild(zoneSelect)

    const select = document.createElement("select")
    select.setAttribute("class", "selection")
    zoneSelect.appendChild(select)

    let populaire = document.createElement("option")
    populaire.text = "Populaire"
    populaire.value = "populaire"

    let date = document.createElement("option")
    date.text = "Date"
    date.value = "date"

    let titre = document.createElement("option")
    titre.text = "Titre"
    titre.value = "titre"

    select.add(populaire)
    select.add(date)
    select.add(titre)

    // Custom de la liste déroulante
    const newSelect = document.createElement("div")
    newSelect.classList.add("newSelect")
    newSelect.setAttribute("tabindex", 3)

    newSelect.innerHTML = select.options[select.selectedIndex].innerHTML

    zoneSelect.appendChild(newSelect)

    const newMenu = document.createElement("ul")
    newMenu.classList.add("selectItems", "selectHide")

    // Lier les options du select avec la liste déroulante custom
    for (let option of select.options) {
        const newOption = document.createElement("li")
        newOption.innerHTML = option.innerHTML
        newOption.setAttribute("tabindex", 3)

        newOption.addEventListener("click", function () {
            for (let option of select.options) {
                if (option.innerHTML === this.innerHTML) {
                    select.selectedIndex = option.index
                    newSelect.innerHTML = this.innerHTML
                    break
                }
            }
            newSelect.click()
        })

         newMenu.appendChild(newOption)
    }

    zoneSelect.appendChild(newMenu)

    // Afficher ou masquer la liste déroulante au clic
    newSelect.addEventListener("click", function (e) {
        e.stopPropagation()
        this.nextSibling.classList.toggle("selectHide")
        this.classList.toggle("active")
    })

    newMenu.addEventListener("click", function (event) {

        const zoneInfo = document.querySelector(".zoneInfo")
        zoneInfo.innerHTML = "";

        // Tri des médias
        function tri() {

            if (event.target.innerHTML === "Populaire") {
                //console.log("populaire")
                const triPopulaire = medias.sort((a, b) => {
                    return b.likes - a.likes
                })
                document.querySelector(".portfolio-section").innerHTML = createPhotographerMedia(triPopulaire)
            }

            if (event.target.innerHTML === "Date") {
                //console.log("date")
                const triDate = medias.sort((a, b) => {
                    return new Date(b.date) - new Date(a.date)
                })
                document.querySelector(".portfolio-section").innerHTML = createPhotographerMedia(triDate)
            }

            if (event.target.innerHTML === "Titre") {
                //console.log("titre")
                const triTitre = medias.sort((a, b) => {
                    return a.title.localeCompare(b.title)
                })
                document.querySelector(".portfolio-section").innerHTML = createPhotographerMedia(triTitre)
            }

            counterLikes()
            const mediasElements = document.querySelectorAll(".media")
            mediasElements.forEach((media, index) => {
                media.addEventListener("click", () => {
                    lightbox(medias, medias[index])
                })
            })
        }
        tri()

    })

// ---------- Evenement au clavier ----------

    // Ouvre et fermer le select
    newSelect.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.stopPropagation()
            newSelect.nextSibling.classList.toggle("selectHide")
            newSelect.classList.toggle("active")
        }
    })

    // Sélectionne l'une des options du select et fait le tri
    newMenu.addEventListener("keydown", function (event) {
        const zoneInfo = document.querySelector(".zoneInfo")
        zoneInfo.innerHTML = "";

        if (event.key === "Enter" && event.target.innerHTML === "Populaire") {
            //console.log("Populaire");
            newSelect.nextSibling.classList.toggle("selectHide")
            newSelect.classList.toggle("active")
            newSelect.innerHTML = "Populaire"

            const triPopulaire = medias.sort((a, b) => {
                return b.likes - a.likes
            })
            document.querySelector(".portfolio-section").innerHTML = createPhotographerMedia(triPopulaire)
        }

        if (event.key === "Enter" && event.target.innerHTML === "Date") {
            //console.log("Date");
            newSelect.nextSibling.classList.toggle("selectHide")
            newSelect.classList.toggle("active")
            newSelect.innerHTML = "Date"

            const triDate = medias.sort((a, b) => {
                return new Date(b.date) - new Date(a.date)
            })
            document.querySelector(".portfolio-section").innerHTML = createPhotographerMedia(triDate)
        }

        if (event.key === "Enter" && event.target.innerHTML === "Titre") {
            //console.log("Titre");
            newSelect.nextSibling.classList.toggle("selectHide")
            newSelect.classList.toggle("active")
            newSelect.innerHTML = "Titre"

            const triTitre = medias.sort((a, b) => {
                return a.title.localeCompare(b.title)
            })
            document.querySelector(".portfolio-section").innerHTML = createPhotographerMedia(triTitre)
        }

        counterLikes()
        const mediasElements = document.querySelectorAll(".media")
        mediasElements.forEach((media, index) => {
            media.addEventListener("click", () => {
                lightbox(medias, medias[index])
            })
            media.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    lightbox(medias, medias[index]) 
                }
            })
        })
    })

    main.appendChild(sortContainer)
}