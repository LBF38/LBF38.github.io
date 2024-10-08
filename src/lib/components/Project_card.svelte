<script lang="ts">
	import { PUBLIC_GH_TOKEN } from '$env/static/public';
	import { Badge } from '$lib/components/ui/badge';
	import * as Card from '$lib/components/ui/card';
	import * as m from '$paraglide/messages';
	import Icon from '@iconify/svelte';
	import { Octokit } from '@octokit/rest';
	import GH_language_colors from '../assets/gh_language_colors.json';
	import { Skeleton } from './ui/skeleton';

	export let gh_url: string = 'https://github.com/LBF38/obsidian-syncthing-integration';
	// Create a new Octokit instance
	const octokit = new Octokit({
		auth: PUBLIC_GH_TOKEN
	});

	function getGHcolor(language: string): string {
		return GH_language_colors[language as keyof typeof GH_language_colors]?.color || '#00000';
	}

	async function getRepoInformation(repository: string) {
		const match = repository.match(/^https:\/\/github\.com\/([\w-]+)\/([\w-]+)$/);
		if (!match) throw new Error('Invalid repo URL');
		const [, owner, repo] = match;

		const { data } = await octokit.rest.repos.get({ owner, repo });
		const { data: issues } = await octokit.rest.issues.listForRepo({
			owner,
			repo,
			state: 'open'
		});
		const { data: pullRequests } = await octokit.rest.pulls.list({
			owner,
			repo,
			state: 'open'
		});

		return {
			owner: data.owner,
			url: data.url,
			name: data.name,
			description: data.description,
			stars: data.stargazers_count,
			issues: issues.length - pullRequests.length,
			forks: data.forks,
			pulls: pullRequests.length,
			language: data.language,
			language_color: getGHcolor(data.language ?? ''),
			archived: data.archived
		};
		// return {
		// 	repo,
		// 	owner,
		// 	name: 'name',
		// 	description: 'description',
		// 	stars: 5,
		// 	issues: 2,
		// 	forks: 1,
		// 	pulls: 3,
		// 	language: 'TypeScript',
		// 	language_color: '#2b7489',
		// 	archived: true
		// };
	}
</script>

{#await getRepoInformation(gh_url)}
	<Card.Root>
		<Card.Header>
			<Card.Title class="mb-4">
				<Skeleton class="h-[20px] w-full rounded-full" />
			</Card.Title>
			<Card.Description class="flex flex-col gap-4">
				<Skeleton class="h-[20px] w-3/5" />
				<Skeleton class="h-[20px] w-4/5" />
				<Skeleton class="h-[20px] w-2/5" />
			</Card.Description>
		</Card.Header>
		<Card.Footer class="my-auto flex flex-row items-center justify-evenly">
			{#each Array.from({ length: 5 }) as _}
				<Skeleton class="h-[20px] w-[20px]" />
			{/each}
		</Card.Footer>
	</Card.Root>
{:then data}
	<Card.Root
		class="group relative transform overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-accent"
	>
		<a href={gh_url} target="_blank">
			<Card.Header>
				<Card.Title class="flex flex-row">
					<Icon icon="devicon:github" class="mr-4 rounded bg-white" height="24" />
					{data.name}
					{#if data.archived}
						<Badge class="ml-auto w-fit" variant="outline"
							>{m.tangy_game_jannes_catch()}</Badge
						>
					{/if}
				</Card.Title>
				<Card.Description class="break-words">{data.description}</Card.Description>
			</Card.Header>
		</a>
		<!-- TODO: make a link to an article related to the project and display a short description in the card content. -->
		<!-- <Card.Content></Card.Content> -->
		<Card.Footer class="my-auto flex flex-row items-center justify-evenly">
			<Icon icon="octicon:star-24" class="mx-2 w-fit" />
			{data.stars}
			<Icon icon="octicon:repo-forked-24" class="mx-2 w-fit" />
			{data.forks}
			<Icon icon="octicon:issue-opened-24" class="mx-2 ml-6 w-fit" />
			{data.issues}
			<Icon icon="octicon:git-pull-request-24" class="mx-2 w-fit" />
			{data.pulls}
			<div class="ml-auto flex flex-row items-center justify-center">
				<Icon icon="octicon:dot-fill-24" class="mr-2" color={data.language_color} />
				{data.language}
			</div>
		</Card.Footer>
		<div
			class="z-5 absolute -inset-full top-0 hidden h-full w-1/4 -skew-x-12 transform bg-gradient-to-r from-transparent to-gray-400 opacity-15 backdrop-blur-lg group-hover:block group-hover:animate-shine dark:to-white"
		/>
	</Card.Root>
{:catch error}
	<Card.Root>
		<Card.Header>
			<Card.Title>{m.great_lucky_swallow_cry()}</Card.Title>
			<Card.Description>{error.message}</Card.Description>
		</Card.Header>
		<!-- <Card.Content>
			<p>Card Content</p>
		</Card.Content> -->
		<Card.Footer>
			<p>{m.plain_smart_halibut_enjoy({ gh_url })}</p>
		</Card.Footer>
	</Card.Root>
{/await}
