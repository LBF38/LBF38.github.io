<script lang="ts">
	import type { ToastSettings } from '@skeletonlabs/skeleton';
	import { toastStore } from '@skeletonlabs/skeleton';

	function openToast() {
		const t: ToastSettings = {
			message: '🚧 Not implemented yet ! 🚧',
			autohide: true,
			timeout: 2000
		};
		toastStore.trigger(t);
	}
</script>

<div class="flex h-full flex-col items-center justify-evenly">
	<h1 class="h1 text-9xl">
		<span
			class="bg-gradient-to-br from-secondary-200 to-tertiary-700 box-decoration-clone bg-clip-text text-transparent"
		>
			Welcome !
		</span>
	</h1>
	<h1 class="h1 text-8xl">
		<span
			class="bg-gradient-to-bl from-secondary-500 to-primary-500 box-decoration-clone bg-clip-text text-transparent"
		>
			I'm Mathis, a passionnate Software Engineer !
		</span>
	</h1>
	<button class="btn variant-outline-surface" on:click={openToast}>More</button>
</div>
