function mediaFactory(media) {
    const { image, video, title, likes } = media;
    
    if (image) {
        return getPhotoDOM(media)
    } else if (video) {
        return getVideoDOM(media)
    } else {
        return console.log("error")
    }
    
}

function getPhotoDOM() {
    let mediaImage = `/assets/Sample Photos/${photographers.name}/${image}`
    return `<img src="${mediaImage} class="media" />
            <div class="mediaTitle">
                <p>${title}</p>
                <i class="fa-solid fa-heart">${likes}</i>
            </div>`
}

function getVideoDOM() {
    let mediaVideo = `/assets/Sample Photos/${photographers.name}/${video}`
    return `<video src="${mediaVideo} class="media"></video>
            <div class="mediaTitle">
                <p>${title}</p>
                <i class="fa-solid fa-heart">${likes}</i>
            </div>`
}


