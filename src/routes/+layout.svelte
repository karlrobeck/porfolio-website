<script>
	import '../app.pcss';
	import { Toaster } from '$lib/components/ui/sonner';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { Separator } from '$lib/components/ui/separator';
</script>

<Toaster />

<div class="flex h-screen flex-col px-4 py-8 font-jetbrains md:px-28">
	<header class="rounded-md border p-4">
		<nav class="flex items-center justify-between">
			<Button href="/" size="lg" variant="link" class="gap-2">
				<svg
					width="41"
					height="41"
					viewBox="0 0 15 15"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					><path
						d="M3.5 8.00684e-07C3.77614 7.88614e-07 4 0.223859 4 0.500001L4 3.00006L11.5 3.00006C11.7761 3.00006 12 3.22392 12 3.50006L12 11.0001L14.5 11C14.7761 11 15 11.2238 15 11.5C15 11.7761 14.7762 12 14.5 12L12 12.0001L12 14.5C12 14.7761 11.7761 15 11.5 15C11.2239 15 11 14.7761 11 14.5L11 12.0001L3.5 12.0001C3.22386 12.0001 3 11.7762 3 11.5001L3 4.00005L0.499989 4C0.223847 4 -6.10541e-06 3.77613 -5.02576e-07 3.49999C5.13006e-06 3.22385 0.223867 3 0.50001 3L3 3.00005L3 0.500001C3 0.223859 3.22386 8.12755e-07 3.5 8.00684e-07ZM4 4.00006L4 11.0001L11 11.0001L11 4.00006L4 4.00006Z"
						fill="currentColor"
						fill-rule="evenodd"
						clip-rule="evenodd"
					></path></svg
				>
				<span class="text-3xl"> Robeck </span>
			</Button>
			<div class="flex p-4 md:hidden">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger
						><svg
							width="15"
							height="15"
							viewBox="0 0 15 15"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							><path
								d="M14 12.85L1 12.85L1 14.15L14 14.15L14 12.85ZM14 8.85002L1 8.85002L1 10.15L14 10.15L14 8.85002ZM1 4.85003L14 4.85003L14 6.15003L1 6.15002L1 4.85003ZM14 0.850025L1 0.850025L1 2.15002L14 2.15002L14 0.850025Z"
								fill="currentColor"
								fill-rule="evenodd"
								clip-rule="evenodd"
							></path></svg
						></DropdownMenu.Trigger
					>
					<DropdownMenu.Content>
						<DropdownMenu.Group>
							<DropdownMenu.Label>Main Menu</DropdownMenu.Label>
							<DropdownMenu.Separator />
							<DropdownMenu.Item href="/projects">Projects</DropdownMenu.Item>
							<DropdownMenu.Item href="/blog">Blogs</DropdownMenu.Item>
							<DropdownMenu.Item href="/about">About</DropdownMenu.Item>
							<DropdownMenu.Item href="/contact">Contact</DropdownMenu.Item>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
			<ul class="hidden md:flex md:list-none">
				<li>
					<Button href="/projects" variant="link">Projects</Button>
				</li>
				<li>
					<Button href="/blog" variant="link">Blogs</Button>
				</li>
				<li>
					<Button href="/about" variant="link">About</Button>
				</li>
				<li>
					<Button href="/contact" variant="link">Contact</Button>
				</li>
			</ul>
		</nav>
	</header>
	<article class="h-full py-24">
		<main class="">
			<slot />
			<Separator class="mb-8 mt-24" />
			<footer class="flex h-full w-full items-start justify-center md:justify-between">
				<div>
					<span class="lead underline">Karl Robeck Alferez</span>
					<ul>
						<li>
							<Button href="/projects" class="w-full justify-start px-0" variant="link"
								>Built in sveltekit</Button
							>
						</li>
						<li>
							<Button href="/projects" class="w-full justify-start px-0" variant="link"
								>UI by shadcn sveltekit</Button
							>
						</li>
						<li>
							<Button href="/projects" class="w-full justify-start px-0" variant="link"
								>Github repository</Button
							>
						</li>
					</ul>
				</div>
				<div class="hidden flex-row gap-5 md:flex">
					<div>
						<span class="lead">Navigation</span>
						<ul class="my-6 ml-6 list-disc [&>li]:mt-2">
							<li>
								<Button href="/projects" variant="link">Projects</Button>
							</li>
							<li>
								<Button href="/blog" variant="link">Blog</Button>
							</li>
							<li>
								<Button href="/contact" variant="link">Contact</Button>
							</li>
							<li>
								<Button href="/about" variant="link">About</Button>
							</li>
						</ul>
					</div>
					<div>
						<span class="lead">Socials</span>
						<ul class="my-6 ml-6 list-disc [&>li]:mt-2">
							<li>
								<Button href="/projects" variant="link">Facebook</Button>
							</li>
							<li>
								<Button href="/projects" variant="link">Github</Button>
							</li>
							<li>
								<Button href="/projects" variant="link">LinkedIn</Button>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</main>
	</article>
</div>
