<script lang="ts">
	import { H1, H3 } from '$lib/components/markdown';
	import { A, Li } from '$lib/components/markdown/meltui';
	import Icon from '@iconify/svelte';
	import { mode } from 'mode-watcher';

	let content: { title: string; links: { name: string; url: string; icon?: string }[] }[];
	mode.subscribe(
		(value) =>
			(content = [
				{
					title: 'Code & Languages',
					links: [
						{
							name: 'Svelte',
							url: 'https://svelte.dev',
							icon: 'svelte'
						},
						{
							name: 'TypeScript',
							url: 'https://www.typescriptlang.org',
							icon: 'typescript'
						},
						{
							name: 'Tailwind CSS',
							url: 'https://tailwindcss.com',
							icon: `tailwindcss-${value}`
						},
						{
							name: 'Flutter',
							url: 'https://flutter.dev',
							icon: `flutter-${value}`
						},
						{
							name: 'Dart',
							url: 'https://dart.dev',
							icon: `dart-${value}`
						},
						{
							name: 'GraphQL',
							url: 'https://graphql.org',
							icon: `graphql-${value}`
						},
						{
							name: 'PNPM',
							url: 'https://pnpm.io',
							icon: `pnpm-${value}`
						}
					]
				},
				{
					title: 'Developer Experience',
					links: [
						{
							name: 'Vite',
							url: 'https://vitejs.dev',
							icon: `vite-${value}`
						},
						{
							name: 'VS Code',
							url: 'https://code.visualstudio.com',
							icon: `vscode-${value}`
						}
					]
				}
			])
	);
</script>

<H1 class="mb-4">Tools and Technologies</H1>

<article class="grid md:grid-cols-3">
	{#each content as item}
		<section>
			<H3>{item.title}</H3>
			<ul class="mt-4 inline-grid grid-cols-2 gap-4">
				{#each item.links as link}
					<Li>
						<A href={link.url}>
							<Icon icon="skill-icons:{link.icon}" class="mr-2 size-10" />
							{link.name}
						</A>
					</Li>
				{/each}
			</ul>
		</section>
	{/each}
</article>
