import type { PageLoad } from "./$types";

export const load: PageLoad = async (event) => {
    // get the manifest json in the static dir
    const manifest: Manifest = await (await event.fetch("/manifest.json")).json();
    return {
        manifest: manifest
    }

}