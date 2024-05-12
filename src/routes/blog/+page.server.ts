import type { PageServerLoad } from "./$types";

interface Blog {
    name: string,
    fileLoc: string
    summary: string,
    date: string
}

interface Manifest {
    blogs: Blog[]
}

export const load: PageServerLoad = async (event) => {
    // get the manifest json in the static dir
    const manifest: Manifest = await (await event.fetch("/manifest.json")).json();
    return {
        manifest: manifest
    }

}