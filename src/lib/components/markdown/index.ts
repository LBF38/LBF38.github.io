import { tv } from 'tailwind-variants';
import Blockquote from './individual/blockquote.svelte';
import Code from './individual/code.svelte';
import H1 from './individual/header1.svelte';
import H2 from './individual/header2.svelte';
import H3 from './individual/header3.svelte';
import H4 from './individual/header4.svelte';
import Large from './individual/large.svelte';
import Lead from './individual/lead.svelte';
import List from './individual/list.svelte';
import Muted from './individual/muted.svelte';
import P from './individual/paragraph.svelte';
import Small from './individual/small.svelte';

export const typographyVariants = tv({
	variants: {
		variant: {
			h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
			h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0',
			h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
			h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
			p: 'leading-7 [&:not(:first-child)]:mt-6',
			blockquote: 'mt-6 border-l-2 pl-6 italic',
			tr: 'm-0 border-t p-0 even:bg-muted',
			th: 'border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right',
			td: 'border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
			list: 'my-6 ml-6 list-disc [&>li]:mt-2',
			code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'
		},
		affects: {
			default: '',
			lead: 'text-xl text-muted-foreground',
			large: 'text-lg font-semibold',
			small: 'text-sm font-medium leading-none',
			muted: 'text-sm text-muted-foreground',
			removePMargin: '[&:not(:first-child)]:mt-0'
		}
	},
	defaultVariants: {
		variant: 'h1',
		affects: 'default'
	}
});

export { Blockquote, Code, H1, H2, H3, H4, Large, Lead, List, Muted, P, Small };
