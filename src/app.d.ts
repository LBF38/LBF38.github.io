import type { Locale } from '$lib/paraglide/runtime';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}

export interface MdsvexFile {
	default: import('svelte/internal').SvelteComponentTyped<unknown, unknown, unknown>;
	metadata: Record<string, string>;
}

export type MdsvexResolver = () => Promise<MdsvexFile>;

declare module '*.md' {
	import { SvelteComponent } from 'svelte';
	const component: SvelteComponent;
	export default component;
}
