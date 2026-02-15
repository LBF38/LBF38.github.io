<script lang="ts">
	import { route } from '$lib/ROUTES';
	import { Button } from '$lib/components/ui/button';
	import { m } from '$paraglide/messages';
	import Icon from '@iconify/svelte';
	import pkg from '../../../package.json';

	const social_media: { icon: string; href: string }[] = [
		{ icon: 'octicon:mark-github-24', href: route('gh_profile') },
		{ icon: 'fa:linkedin-square', href: route('linkedin') },
		{ icon: 'fa:gitlab', href: route('gitlab') }
	];
</script>

<footer class="mt-4 flex w-full flex-shrink-0 flex-col justify-end border-t border-border">
	<div class="m-6 mx-auto flex w-full items-center justify-evenly md:w-4/5">
		{#each social_media as item}
			<a href={item.href} target="_blank">
				<Icon icon={item.icon} class="h-8 w-8 text-muted hover:text-current" />
			</a>
		{/each}
	</div>
	<p class="mx-auto mb-6 break-normal p-4 text-center">
		{m.tangy_key_swallow_lock()}
		<Icon icon="octicon:heart-16" style="color: deeppink" class="inline" />
		{m.fancy_fun_hedgehog_grow()}
		<Button href={route('gh_profile')} target="_blank" variant="link" class="inline p-0"
			>LBF38</Button
		>
		{m.large_green_orangutan_pinch()}
		<Button href={route('shadcn_svelte')} target="_blank" variant="link" class="inline p-0">
			shadcn/svelte
		</Button>
		<br />
		<br />
		<span class="text-muted-foreground">
			Copyright &copy; {new Date().getFullYear()} LBF38 - v{pkg.version}
		</span>
	</p>
	<!-- <a title="Google Analytics Alternative" href="https://clicky.com/101423247">
	<img alt="Clicky" src="//static.getclicky.com/media/links/badge.gif" border="0" />
</a> -->
</footer>
