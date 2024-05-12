import type { PageServerLoad } from './$types';
import showdown from 'showdown';

export const load: PageServerLoad = async (event) => {

    const markdown = await (await event.fetch(`/markdown/${event.params.name}`)).text()
    const converter = new showdown.Converter({ tables: true })

    return {
        html: converter.makeHtml(markdown)
    }

}