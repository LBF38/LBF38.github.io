import type { AvailableLanguageTag } from '../../lib/paraglide/runtime';
import type { ParaglideLocals } from '@inlang/paraglide-sveltekit';
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		paraglide: ParaglideLocals<AvailableLanguageTag>;
	}
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
