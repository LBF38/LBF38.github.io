<script lang="ts">
	import { Octokit } from '@octokit/rest';
	import Icon from '@iconify/svelte';
	import GH_language_colors from '../assets/gh_language_colors.json';
	export let GH_URL: string = 'https://github.com/LBF38/obsidian-syncthing-integration';

	// Create a new Octokit instance
	const octokit = new Octokit();

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
			language_color: getGHcolor(data.language ?? '')
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
		// 	language_color: '#2b7489'
		// };
	}
</script>

{#await getRepoInformation(GH_URL)}
	<div class="placeholder" />
{:then data}
	<a href={GH_URL} target="_blank" class="card h-fit w-fit">
		<header class="card-header flex flex-row items-center justify-start">
			<Icon icon="devicon:github" class="mx-2" height="24" />
			{data.name}
		</header>
		<section class="mx-2 p-4">{data.description}</section>
		<footer class="card-footer flex flex-row items-center justify-evenly">
			<Icon icon="octicon:star-24" class="mx-2" />
			{data.stars}
			<Icon icon="octicon:repo-forked-24" class="mx-2" />
			{data.forks}
			<Icon icon="octicon:issue-opened-24" class="mx-2 ml-6" />
			{data.issues}
			<Icon icon="octicon:git-pull-request-24" class="mx-2" />
			{data.pulls}
			<div class="ml-8 flex flex-row items-center justify-center">
				<Icon icon="octicon:dot-fill-24" class="mx-2" color={data.language_color} />
				{data.language}
			</div>
		</footer>
	</a>
{:catch error}
	<div class="card variant-outline-error">
		<header class="card-header">Error</header>
		<section class="p-4">
			<p>{error.message}</p>
		</section>
		<footer class="card-footer">URL called : {GH_URL}</footer>
	</div>
{/await}
