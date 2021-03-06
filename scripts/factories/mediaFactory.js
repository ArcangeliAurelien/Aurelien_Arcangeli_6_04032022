"use strict";

/** 
   * Fonction(factory) qui permet de creer les images ou les videos de chaque photographes
   * @param {string} typeOfMedia
   * @param {string} mediaUrl
   * @return {function}
 */

export function factory(media,type="") {

    const { image, video, title } = media;

    if (image !== undefined) {

        return createImage(image, title);

    }

    return createVideo(video, title,type);

}

// Crée le média correspondant à une image
function createImage(mediaSrc, altText) {

    return `<img tabindex="5" role="img" class="media" src="img/photographs/${mediaSrc}" alt="${altText}" data-alttxt="${altText}" aria-label="${altText}"/>`;

}

// Crée le média correspondant à une vidéo
function createVideo(mediaSrc, altText,type) {

    return `<video tabindex="5" role="img" class="media video" alt="${altText}" data-alttxt="${altText}" ${type === "light" ? "autoplay muted" : ""} aria-label="${altText}">
                <source src="img/photographs/${mediaSrc}" type="video/mp4">
            </video>`;
}