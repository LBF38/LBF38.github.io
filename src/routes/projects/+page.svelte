<script lang="ts">
	import ProjectCard from '$lib/components/Project_card.svelte';
</script>

<h1 class="h1 my-2">
	<span
		class="bg-gradient-to-tr from-secondary-600 via-primary-500 to-tertiary-400 box-decoration-clone bg-clip-text text-transparent"
		>My Projects' library</span
	>
</h1>
<div class="m-4 flex flex-wrap justify-evenly gap-8">
	{#each [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as i}
		<ProjectCard />
	{/each}
</div>
