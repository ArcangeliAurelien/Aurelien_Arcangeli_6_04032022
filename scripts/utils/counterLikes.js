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
        
        zoneInfo.appendChild(totalLike)
        
        const likesButton = document.querySelectorAll('#likes')
        let nb_likes = document.querySelectorAll('.nbr_of_likes')
        let arrayCounterLike = []
        let sum = 0

        for (let i = 0; i < likesButton.length; i++) {
            let likes = likesButton[i]

            arrayCounterLike.push(parseInt(nb_likes[i].textContent))
            //console.log(arrayCounterLike[i]);
            sum += arrayCounterLike[i]

            totalLike.innerHTML = sum + " " + `<i class="fas fa-heart"></i>` + " " + price + "€/jour"
                
            likes.addEventListener("click", () => {

                let cpt = parseInt(nb_likes[i].textContent) + 1
                nb_likes[i].innerHTML = cpt

                let sumTotal = sum += 1
                // console.log("total", sumTotal)
                totalLike.innerHTML = sumTotal + " " + `<i class="fas fa-heart"></i>` + " " + price + "€/jour"
                
            })
            
            
        }
    })
}