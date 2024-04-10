<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import { Separator } from '$lib/components/ui/separator';
</script>

<main>
	<section class="grid grid-cols-1 gap-5 sm:grid-cols-2">
		<div class="flex flex-col gap-5">
			<Button
				class="cursor-none scroll-m-20 justify-start px-0 text-4xl font-extrabold tracking-tight lg:text-5xl"
				role="heading"
				aria-level="1"
				variant="link"
			>
				Let's make it simple
			</Button>
			<p class="leading-7 [&:not(:first-child)]:mt-6">
				Hi, my name is karl robeck alferez, i am software engineer specialize in building high
				performance web application in python, javascript, and rust language
			</p>
			<div class="flex items-center gap-5">
				<Button href="/projects" variant="default">View Projects</Button>
				<Button href="/contact" variant="outline">Contact me</Button>
			</div>
		</div>
		<div class="hidden items-center justify-center rounded-md border sm:flex">
			Code animation here
		</div>
	</section>
	<Separator class="my-24" />
</main>
