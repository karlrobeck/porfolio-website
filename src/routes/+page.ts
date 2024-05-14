import type { PageLoad } from "./$types";

export const load: PageLoad = async (event) => {

    // get the manifest data
    const manifest: Manifest = await (await event.fetch('/manifest.json')).json()

    return {
        head: {
            title: "Robeck",
            description: "Robeck is a software developer and designer based in Philippines. He is passionate about creating beautiful, functional and user-friendly web applications built in javascript, rust lang, and python.",
        },
        manifest: manifest
    };
}