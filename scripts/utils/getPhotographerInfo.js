export function getPhotographerInfo(id, photographersData) {

    const photographerPersonalInfo = photographersData.photographers.filter((photographer) => {

        if (Number(photographer.id) === Number(id)) {

            return photographer;

        };

    });

    const photographerMedias = photographersData.media.filter((media) => {

        if (Number(media.photographerId) === Number(id)) {

            return media;
        }

    });

    return {
        infos: photographerPersonalInfo,
        medias: photographerMedias
    }
};
