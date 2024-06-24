<script lang="ts">
	import ProjectCard from '$lib/components/Project_card.svelte';
	import { H1, P } from '$lib/components/typography/individual';
	const GH_projects = [
		'https://github.com/LBF38/obsidian-syncthing-integration',
		'https://github.com/LBF38/Duel-invaders',
		'https://github.com/LBF38/projet-java-enstab',
		'https://github.com/LBF38/projet_VM_archiNum',
		'https://github.com/LBF38/Laravel-workshops-ENSTAB',
		'https://github.com/lbf38/projetc',
		'https://github.com/LBF38/TDs-OS',
		'https://github.com/lbf38/linuxcourse',
		'https://github.com/lbf38/planningAurion',
		'https://github.com/lbf38/openclassroom-go-fullstack-backend'
	];
</script>

<H1 class="my-2 w-full h-fit">
	<span
		class="w-full bg-gradient-to-tr from-blue-300 via-purple-300 to-violet-400 box-decoration-clone bg-clip-text text-transparent dark:from-blue-500 dark:via-purple-400 dark:to-violet-500"
	>
		My Projects' library
	</span>
</H1>

<P>Here are some of the projects I've worked on.</P>

<div class="my-4 grid w-full grid-cols-1 items-center gap-5 sm:grid-cols-2 lg:grid-cols-3">
	{#each GH_projects as project_url}
		<ProjectCard gh_url={project_url} />
	{/each}
</div>
