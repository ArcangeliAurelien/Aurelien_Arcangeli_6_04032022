"use strict";

/** 
   * Fonction(factory) qui permet de creer les images ou les videos de chaque photographes
   * @param {string} typeOfMedia
   * @param {string} mediaUrl
   * @return {function}
 */

export function factory(media) {

    const { image, video, alt } = media;

    if (image !== undefined) {


        return createImage(image, alt);

    }

    return createVideo(video, alt);

}


function createImage(mediaSrc, altText) {

    return `<img tabindex="5" role="img" class="media" src="img/photographs/${mediaSrc}" alt="${altText}" data-alttxt="${altText}" />`;

}

function createVideo(mediaSrc, altText) {

    return `<video tabindex="5" role="img" class="media video" alt="${altText}" data-alttxt="${altText}">
                    <source src="img/photographs/${mediaSrc}" type="video/mp4">
               </video>`;

}