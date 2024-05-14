<script lang="ts">
	import type { PageData } from './$types';

	import * as Card from '$lib/components/ui/card';
	import Button from '$lib/components/ui/button/button.svelte';
	import { page } from '$app/stores';
</script>

<h1 class="pb-12">My Blogs</h1>
<div class="grid grid-cols-1 gap-5 md:grid-cols-2">
	{#each $page.data.manifest.blogs || [] as blog}
		<Card.Root>
			<Card.Header>
				<Card.Title>{blog.name}</Card.Title>
				<Card.Description>{blog.date}</Card.Description>
			</Card.Header>
			<Card.Content>
				<p>{blog.summary}</p>
			</Card.Content>
			<Card.Footer>
				<Button href="/blogs{blog.markdownLink.replace('/markdown', '')}">Visit</Button>
			</Card.Footer>
		</Card.Root>
	{/each}
</div>
