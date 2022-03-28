//Création de la card des photographes sur la page d'accueil
export function photographerFactory(data) {
    const { name, id, city, country, tagline, price, portrait, alt } = data

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`

    function getUserCardDOM() {
        //Création des balises d'emplacement de chaque partie qui constitue la card
        const article = document.createElement( 'article' )
        const h2 = document.createElement( 'h2' )
        h2.textContent = name;
        const h3 = document.createElement( 'h3' )
        h3.textContent = `${city}, ${country}`
        const h4 = document.createElement( 'h4' )
        h4.textContent = tagline
        const p = document.createElement( 'p' )
        p.textContent = price + '€/jour'
        article.innerHTML = `<a href="photographer.html?photographer=${id}">
                                <img src="${picture}" alt="${alt}" /></a>`
        article.appendChild(h2)
        article.appendChild(h3)
        article.appendChild(h4)
        article.appendChild(p)
        return (article);
    }
    return { name, picture, id, city, country, tagline, price, getUserCardDOM }
}

// Créer les pages pour chaque photographes
export function profileFactory(data) {
    const { name, id, city, country, tagline, price, portrait } = data

    const picture = `assets/photographers/Photographers ID Photos/${portrait}`

    function getProfilePhotographerDOM() {
        const div = document.createElement('div')
        div.className = "header"
        div.innerHTML = `<div>
                            <h1>${name}</h1>
                            <h3>${city}, ${country}</h3>
                            <h4>${tagline}</h4>
                        </div>
                        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
                        <img src="${picture}" />`

        return (div)
    }
    return { name, city, country, tagline, getProfilePhotographerDOM }
}
