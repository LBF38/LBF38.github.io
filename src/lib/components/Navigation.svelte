<script lang="ts">
	import { LightSwitch } from '@skeletonlabs/skeleton';
</script>

<nav class="flex flex-row p-4 content-center justify-center">
	<img src="favicon.png" alt="logo" class="btn-icon-xl" />
	<ul class="container flex flex-row justify-evenly">
		<li>
			<a
				href="/"
				class="btn variant-soft hover:variant-filled-primary"
				data-sveltekit-preload-data="hover"
			>
				Home
			</a>
		</li>
		<li>
			<a
				href="/some-page"
				class="btn variant-soft hover:variant-filled-primary"
				data-sveltekit-preload-data="hover"
			>
				Projects
			</a>
		</li>
		<li>
			<a
				href="/"
				class="btn variant-soft hover:variant-filled-primary"
				data-sveltekit-preload-data="hover"
			>
				@me
			</a>
		</li>
		<li>
			<a
				href="/"
				class="btn variant-soft hover:variant-filled-primary"
				data-sveltekit-preload-data="hover"
			>
				Contact
			</a>
		</li>
	</ul>
	<LightSwitch />
</nav>
