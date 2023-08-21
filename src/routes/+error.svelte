<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="space-y-5">
	<h1 class="h1 text-error-500">Oops... Something wrong happened !</h1>
	<h2 class="h2 text-error-500">{$page.status}: {$page.error?.message}</h2>
	<a href="/" class="anchor">Please go back to a safe place and try again later.</a>
</div>
