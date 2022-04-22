export function counterLikes() {

    const likeAndPrice = document.querySelector(".likeAndPrice")

    const totalLike = document.createElement("div")
    totalLike.classList.add("totalLike")
    const heart = document.createElement("i")
    heart.classList.add("fas", "fa-heart")
    totalLike.appendChild(heart)
    

    const price = document.createElement("div")
    price.classList.add("price")
    //price.innerHTML = 
    
    likeAndPrice.appendChild(totalLike)
    likeAndPrice.appendChild(price)
    
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
        
        likes.addEventListener("click", () => {
            let cpt = parseInt(nb_likes[i].textContent) + 1        
            nb_likes[i].innerHTML = cpt
            let sumTotal = sum += 1
            console.log("total", sumTotal)
            totalLike.innerHTML = sumTotal + " " + `<i class="fas fa-heart"></i>`
        })
        
        
    }
    
}