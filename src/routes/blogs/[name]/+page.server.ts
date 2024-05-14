import type { PageServerLoad } from './$types';
import showdown from 'showdown';
import showdownHighlight from 'showdown-highlight';
export const load: PageServerLoad = async (event) => {

    const markdown = await (await event.fetch(`/markdown/${event.params.name}`)).text()
    const converter = new showdown.Converter({
        tables: true, extensions: [showdownHighlight({
            pre: true,
            auto_detection: true
        })]
    })

    return {
        html: converter.makeHtml(markdown)
    }

}