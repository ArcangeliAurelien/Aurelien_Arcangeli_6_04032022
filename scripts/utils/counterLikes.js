export function counterLikes() {
    const likesButton = document.querySelectorAll('#likes')

    for (let i = 0; i < likesButton.length; i++) {
        let likes = likesButton[i]

        likes.addEventListener("click", () => {
            let nb_likes = document.querySelectorAll('.nbr_of_likes')
            let cpt = parseInt(nb_likes.innerText)

            cpt = parseInt(nb_likes[i].textContent) +1
            console.log(parseInt(nb_likes[i].textContent))
            nb_likes[i].innerHTML = cpt
        })
    }

}