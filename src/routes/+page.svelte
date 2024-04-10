<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { Separator } from '$lib/components/ui/separator';
	import * as Card from '$lib/components/ui/card';
	import { page } from '$app/stores';
	import * as Carousel from '$lib/components/ui/carousel';
	import type { CarouselAPI } from '$lib/components/ui/carousel/context';

	let api: CarouselAPI;
	let carouselCount = 0;

	// Run the code every 2 seconds
	setInterval(() => {
		if (api) {
			api.scrollNext();
		}
	}, 2000);
</script>

<svelte:head>
	<title>{$page.data.head.title}</title>
	<meta name="description" content={$page.data.head.description} />
</svelte:head>

<section class="grid h-full grid-cols-1 items-center gap-5 sm:grid-cols-2">
	<div class="flex flex-col gap-5">
		<Button
			class="cursor-none scroll-m-20 justify-start px-0 text-4xl font-extrabold tracking-tight lg:text-5xl"
			role="heading"
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
	<Carousel.Root bind:api class="h-full">
		<Carousel.Content class="h-full">
			<Carousel.Item class="h-full">
				<Card.Content class="flex items-center justify-center gap-5 p-6">
					<svg
						width="41"
						height="41"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M12.5 3L2.5 3.00002C1.67157 3.00002 1 3.6716 1 4.50002V9.50003C1 10.3285 1.67157 11 2.5 11H7.50003C7.63264 11 7.75982 11.0527 7.85358 11.1465L10 13.2929V11.5C10 11.2239 10.2239 11 10.5 11H12.5C13.3284 11 14 10.3285 14 9.50003V4.5C14 3.67157 13.3284 3 12.5 3ZM2.49999 2.00002L12.5 2C13.8807 2 15 3.11929 15 4.5V9.50003C15 10.8807 13.8807 12 12.5 12H11V14.5C11 14.7022 10.8782 14.8845 10.6913 14.9619C10.5045 15.0393 10.2894 14.9965 10.1464 14.8536L7.29292 12H2.5C1.11929 12 0 10.8807 0 9.50003V4.50002C0 3.11931 1.11928 2.00003 2.49999 2.00002Z"
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
						></path></svg
					>
					<span class="text-4xl font-semibold underline">Build</span>
				</Card.Content>
			</Carousel.Item>
			<Carousel.Item class="flex h-full items-center justify-center">
				<Card.Content class="flex items-center justify-center gap-5 p-6">
					<svg
						width="41"
						height="41"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M11.4669 3.72684C11.7558 3.91574 11.8369 4.30308 11.648 4.59198L7.39799 11.092C7.29783 11.2452 7.13556 11.3467 6.95402 11.3699C6.77247 11.3931 6.58989 11.3355 6.45446 11.2124L3.70446 8.71241C3.44905 8.48022 3.43023 8.08494 3.66242 7.82953C3.89461 7.57412 4.28989 7.55529 4.5453 7.78749L6.75292 9.79441L10.6018 3.90792C10.7907 3.61902 11.178 3.53795 11.4669 3.72684Z"
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
						></path></svg
					>
					<span class="text-4xl font-semibold underline">Test</span>
				</Card.Content>
			</Carousel.Item>
			<Carousel.Item class="flex h-full items-center justify-center">
				<Card.Content class="flex items-center justify-center gap-5 p-6">
					<svg
						width="41"
						height="41"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M6.85357 3.85355L7.65355 3.05353C8.2981 2.40901 9.42858 1.96172 10.552 1.80125C11.1056 1.72217 11.6291 1.71725 12.0564 1.78124C12.4987 1.84748 12.7698 1.97696 12.8965 2.10357C13.0231 2.23018 13.1526 2.50125 13.2188 2.94357C13.2828 3.37086 13.2779 3.89439 13.1988 4.44801C13.0383 5.57139 12.591 6.70188 11.9464 7.34645L7.49999 11.7929L6.35354 10.6465C6.15827 10.4512 5.84169 10.4512 5.64643 10.6465C5.45117 10.8417 5.45117 11.1583 5.64643 11.3536L7.14644 12.8536C7.34171 13.0488 7.65829 13.0488 7.85355 12.8536L8.40073 12.3064L9.57124 14.2572C9.65046 14.3893 9.78608 14.4774 9.9389 14.4963C10.0917 14.5151 10.2447 14.4624 10.3535 14.3536L12.3535 12.3536C12.4648 12.2423 12.5172 12.0851 12.495 11.9293L12.0303 8.67679L12.6536 8.05355C13.509 7.19808 14.0117 5.82855 14.1887 4.58943C14.2784 3.9618 14.2891 3.33847 14.2078 2.79546C14.1287 2.26748 13.9519 1.74482 13.6035 1.39645C13.2552 1.04809 12.7325 0.871332 12.2045 0.792264C11.6615 0.710945 11.0382 0.721644 10.4105 0.8113C9.17143 0.988306 7.80189 1.491 6.94644 2.34642L6.32322 2.96968L3.07071 2.50504C2.91492 2.48278 2.75773 2.53517 2.64645 2.64646L0.646451 4.64645C0.537579 4.75533 0.484938 4.90829 0.50375 5.0611C0.522563 5.21391 0.61073 5.34954 0.742757 5.42876L2.69364 6.59928L2.14646 7.14645C2.0527 7.24022 2.00002 7.3674 2.00002 7.50001C2.00002 7.63261 2.0527 7.75979 2.14646 7.85356L3.64647 9.35356C3.84173 9.54883 4.15831 9.54883 4.35357 9.35356C4.54884 9.1583 4.54884 8.84172 4.35357 8.64646L3.20712 7.50001L3.85357 6.85356L6.85357 3.85355ZM10.0993 13.1936L9.12959 11.5775L11.1464 9.56067L11.4697 11.8232L10.0993 13.1936ZM3.42251 5.87041L5.43935 3.85356L3.17678 3.53034L1.80638 4.90074L3.42251 5.87041ZM2.35356 10.3535C2.54882 10.1583 2.54882 9.8417 2.35356 9.64644C2.1583 9.45118 1.84171 9.45118 1.64645 9.64644L0.646451 10.6464C0.451188 10.8417 0.451188 11.1583 0.646451 11.3535C0.841713 11.5488 1.1583 11.5488 1.35356 11.3535L2.35356 10.3535ZM3.85358 11.8536C4.04884 11.6583 4.04885 11.3417 3.85359 11.1465C3.65833 10.9512 3.34175 10.9512 3.14648 11.1465L1.14645 13.1464C0.95119 13.3417 0.951187 13.6583 1.14645 13.8535C1.34171 14.0488 1.65829 14.0488 1.85355 13.8536L3.85358 11.8536ZM5.35356 13.3535C5.54882 13.1583 5.54882 12.8417 5.35356 12.6464C5.1583 12.4512 4.84171 12.4512 4.64645 12.6464L3.64645 13.6464C3.45119 13.8417 3.45119 14.1583 3.64645 14.3535C3.84171 14.5488 4.1583 14.5488 4.35356 14.3535L5.35356 13.3535ZM9.49997 6.74881C10.1897 6.74881 10.7488 6.1897 10.7488 5.5C10.7488 4.8103 10.1897 4.25118 9.49997 4.25118C8.81026 4.25118 8.25115 4.8103 8.25115 5.5C8.25115 6.1897 8.81026 6.74881 9.49997 6.74881Z"
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
						></path></svg
					>
					<span class="text-4xl font-semibold underline">Deploy</span>
				</Card.Content>
			</Carousel.Item>
		</Carousel.Content>
	</Carousel.Root>
</section>
<Separator class="my-24" />
<section class="flex h-full flex-col gap-10 py-4">
	<Button
		class="cursor-none scroll-m-20 justify-start px-0 text-4xl font-extrabold tracking-tight lg:text-5xl"
		role="heading"
		variant="link"
	>
		My Projects
	</Button>
	<div class="grid h-full grid-cols-1 gap-5 sm:grid-cols-4">
		{#each $page.data.content.projects as project}
			<Card.Root class="flex flex-col justify-between">
				<Card.Header>
					<Card.Title tag="h1">{project.title}</Card.Title>
					<Card.Description>{project.status}</Card.Description>
				</Card.Header>
				<Card.Content>
					<p>{project.description}</p>
				</Card.Content>
				<Card.Footer>
					{#if project.repository}
						<Button target="_blank" href={project.repository} variant="default" class="w-full px-0"
							>View on Github</Button
						>
					{/if}
					{#if project.link}
						<Button target="_blank" href={project.link} variant="link" class="w-full px-0"
							>Visit in web</Button
						>
					{/if}
				</Card.Footer>
			</Card.Root>
		{/each}
	</div>
	<Button href="/projects" variant="ghost">View all projects</Button>
</section>
