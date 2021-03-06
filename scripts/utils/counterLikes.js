export function counterLikes() {

    fetch("./data/photographers.json")
        .then((res) => res.json())
        .then((data) => {
            let verifyUrl = new URLSearchParams(window.location.search)
            let photographeId = verifyUrl.get('photographer')
            
            const photographerProfile = data.photographers.find(e => e.id == photographeId)
            const price = photographerProfile.price

        const zoneInfo = document.querySelector(".zoneInfo")

        const totalLike = document.createElement("div")
        totalLike.classList.add("totalLike")
        const zonePrice = document.createElement("div")
        zonePrice.classList.add("price")
        
        zoneInfo.appendChild(totalLike)
        zoneInfo.appendChild(zonePrice)
        
        const likesButton = document.querySelectorAll('#likes')
        let nb_likes = document.querySelectorAll('.nbr_of_likes')
        let arrayCounterLike = []
        let sum = 0

        for (let i = 0; i < likesButton.length; i++) {
            let likes = likesButton[i]

            arrayCounterLike.push(parseInt(nb_likes[i].textContent))
            sum += arrayCounterLike[i]

            totalLike.innerHTML = sum + " " + `<i class="fas fa-heart"></i>`
            zonePrice.innerHTML = price + "€/jour"

            likes.addEventListener("click", () => {

                // Ajoute 1 au compteur de likes
                let cpt = parseInt(nb_likes[i].textContent) + 1
                nb_likes[i].innerHTML = cpt

                // Somme des likes de tous les médias
                let sumTotal = sum += 1
                
                // Ajout des likes en plus au total des likes
                totalLike.innerHTML = sumTotal + " " + `<i class="fas fa-heart"></i>`
                zonePrice.innerHTML = price + "€/jour"
                
            })

            // Evénement au clavier
            likes.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    let cpt = parseInt(nb_likes[i].textContent) + 1
                    nb_likes[i].innerHTML = cpt

                    let sumTotal = sum += 1
                    totalLike.innerHTML = sumTotal + " " + `<i class="fas fa-heart"></i>`
                    zonePrice.innerHTML = price + "€/jour"
                    
                }
            })
        }
        
    })
}