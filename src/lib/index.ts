// place files you want to import through the `$lib` alias in this folder.

import type { CV } from '$contentlayer/generated';
import type { Component } from 'svelte';

export type ContentCV = {
	content: Component;
	metadata: CV;
};
