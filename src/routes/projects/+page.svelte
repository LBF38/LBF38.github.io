<script lang="ts">
	import ProjectCard from '$lib/components/Project_card.svelte';
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

<h1 class="h1 my-2">
	<span
		class="from-secondary-500 via-tertiary-400 to-primary-500 bg-gradient-to-tr box-decoration-clone bg-clip-text text-transparent"
	>
		My Projects' library
	</span>
</h1>
<div class="m-4 grid w-full grid-cols-1 items-center gap-5 sm:grid-cols-2 md:grid-cols-3">
	{#each GH_projects as project_url}
		<ProjectCard gh_url={project_url} />
	{/each}
</div>
