// place files you want to import through the `$lib` alias in this folder.

import type { DocumentTypes } from '$contentlayer/generated';
import type { Component } from 'svelte';

export type Content<T extends DocumentTypes> = {
	content: Component;
	metadata: T;
};
