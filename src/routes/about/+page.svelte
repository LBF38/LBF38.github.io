<script lang="ts">
	import { blur, fade } from 'svelte/transition';
</script>

<h1 class="h1" in:fade={{ delay: 200 }} out:blur>This is my about page !</h1>
