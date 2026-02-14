<script lang="ts">
	import { H1, H3 } from '$lib/components/markdown';
	import { A, Li } from '$lib/components/markdown/meltui';
	import { m } from '$paraglide/messages';
	import Icon from '@iconify/svelte';
	import { mode } from 'mode-watcher';

	let content: { title: string; links: { name: string; url: string; icon?: string }[] }[];
	mode.subscribe(
		(value) =>
			(content = [
				{
					title: m.novel_moving_bear_commend(),
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
					title: 'Dev/Ops',
					links: [
						{
							name: 'Docker',
							url: 'https://www.docker.com',
							icon: `docker`
						},
						{
							name: 'Kubernetes',
							url: 'https://kubernetes.io',
							icon: `kubernetes`
						},
						{
							name: 'Red Hat OpenShift',
							url: 'https://www.openshift.com',
							icon: `openshift`
						},
						{
							name: 'GitHub',
							url: 'https://github.com',
							icon: `github-${value}`
						},
						{
							name: 'GitHub Actions',
							url: 'https://github.com/actions',
							icon: `githubactions-${value}`
						},
						{
							name: 'GitLab',
							url: 'https://gitlab.com',
							icon: `gitlab-${value}`
						}
					]
				},
				{
					title: m.few_last_chicken_urge(),
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
						},
						{
							name: 'Linux',
							url: 'https://www.linux.org',
							icon: `linux-${value}`
						},
						{
							name: 'Bash',
							url: 'https://www.gnu.org/software/bash/',
							icon: `bash-${value}`
						},
						{
							name: 'Git',
							url: 'https://git-scm.com',
							icon: `git`
						}
					]
				},
				{
					title: 'Design',
					links: [
						{
							name: 'Figma',
							url: 'https://www.figma.com',
							icon: `figma-${value}`
						}
					]
				}
			])
	);
</script>

<H1 class="mb-8">{m.nice_drab_quail_swim()}</H1>

<article class="mb-4 grid gap-8 md:grid-cols-3">
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
