import { getData } from "../utils/display.js";

async function init() {
    const { photographerProfile } = await getData()
    console.log(photographerProfile);
}

init()