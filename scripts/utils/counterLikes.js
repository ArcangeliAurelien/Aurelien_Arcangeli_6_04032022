export function counterLikes() {

    fetch("./data/photographers.json")
        .then((res) => res.json())
        .then((data) => {
            let verifyUrl = new URLSearchParams(window.location.search)
            //verifyUrl.has(photographer.id);
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
            //console.log(arrayCounterLike[i]);
            sum += arrayCounterLike[i]

            totalLike.innerHTML = sum + " " + `<i class="fas fa-heart"></i>`
            zonePrice.innerHTML = price + "€/jour"

            likes.addEventListener("click", () => {

                // Ajoute 1 au compteur de likes
                let cpt = parseInt(nb_likes[i].textContent) + 1
                nb_likes[i].innerHTML = cpt

                // Somme des likes d'un média
                let sumTotal = sum += 1
                
                // Somme totale de tous les likes des médias du photographe
                totalLike.innerHTML = sumTotal + " " + `<i class="fas fa-heart"></i>`
                zonePrice.innerHTML = price + "€/jour"
                
            })

            // Evénement au clavier
            likes.addEventListener("keydown", (event) => {
                if (event.key === "Enter") {
                    let cpt = parseInt(nb_likes[i].textContent) + 1
                    nb_likes[i].innerHTML = cpt

                    let sumTotal = sum += 1
                    // console.log("total", sumTotal)
                    totalLike.innerHTML = sumTotal + " " + `<i class="fas fa-heart"></i>`
                    zonePrice.innerHTML = price + "€/jour"
                    
                }
            })
        }
        
    })
}