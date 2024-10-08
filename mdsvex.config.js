/**
 * @fileoverview Configuration for mdsvex.
 *
 * This configuration is inspired by the [melt-ui project](https://github.com/melt-ui/melt-ui).
 * See the repo for more info and inspiration.
 */

//@ts-check
import { escapeSvelte } from '@huntabyte/mdsvex';
import { toHtml } from 'hast-util-to-html';
import { resolve } from 'path';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeRewrite from 'rehype-rewrite';
import { codeImport } from 'remark-code-import';
import remarkGfm from 'remark-gfm';
import { getSingletonHighlighter } from 'shiki';
import { visit } from 'unist-util-visit';
import { fileURLToPath } from 'url';

/**
 * @typedef {import('mdast').Root} MdastRoot
 * @typedef {import('hast').Root} HastRoot
 * @typedef {import('unified').Transformer<HastRoot, HastRoot>} HastTransformer
 * @typedef {import('unified').Transformer<MdastRoot, MdastRoot>} MdastTransformer
 */

const __dirname = fileURLToPath(new URL('.', import.meta.url));

/** @type {import('rehype-pretty-code').Options} */
const prettyCodeOptions = {
	theme: 'github-dark',
	keepBackground: false,
	onVisitLine(node) {
		if (node.children.length === 0) {
			// @ts-expect-error we're modifying the node type
			node.children = { type: 'text', value: ' ' };
		}
	},
	onVisitHighlightedLine(node) {
		node.properties.className = ['line--highlighted'];
	},
	onVisitHighlightedChars(node) {
		node.properties.className = ['chars--highlighted'];
	},
	getHighlighter: (options) =>
		getSingletonHighlighter({
			...options,
			langs: [
				'plaintext',
				import('shiki/langs/svelte.mjs'),
				import('shiki/langs/typescript.mjs'),
				import('shiki/langs/css.mjs'),
				import('shiki/langs/javascript.mjs'),
				import('shiki/langs/json.mjs'),
				import('shiki/langs/shellscript.mjs'),
			],
			themes: [import('shiki/themes/github-dark.mjs')],
		}),
};

export const mdsvexOptions = {
	extensions: ['.md'],
	layout: resolve(__dirname, './src/lib/components/markdown/meltui/layout.svelte'),
	smartypants: {
		quotes: false,
		ellipses: false,
		backticks: false,
		dashes: false,
	},
	remarkPlugins: [remarkGfm, remarkEscapeSvelte, codeImport],
	rehypePlugins: [
		[rehypeRewrite],
		rehypeComponentPreToPre,
		[rehypePrettyCode, prettyCodeOptions],
		rehypeHandleMetadata,
		rehypeRenderCode,
		rehypePreToComponentPre,
	],
};

/**
 * @returns {HastTransformer}
 */
function rehypeComponentPreToPre() {
	return async (tree) => {
		// Replace `Component.pre` tags with regular `pre` tags.
		// This enables us to use rehype-pretty-code with our custom `pre` component.
		visit(tree, (node) => {
			if (node?.type === 'element' && node?.tagName === 'Components.pre') {
				node.tagName = 'pre';
			}
		});
	};
}

/**
 * @type {[RegExp, string][]}
 */
const entities = [
	[/</g, '&lt;'],
	[/>/g, '&gt;'],
	[/{/g, '&#123;'],
	[/}/g, '&#125;'],
];

/**
 * @returns {MdastTransformer}
 */
function remarkEscapeSvelte() {
	return async (tree) => {
		visit(tree, 'inlineCode', escape);

		/**
		 * @param {import('mdast').InlineCode} node
		 */
		function escape(node) {
			for (let i = 0; i < entities.length; i += 1) {
				node.value = node.value.replace(entities[i][0], entities[i][1]);
			}
		}
	};
}

/**
 * @returns {HastTransformer}
 */
function rehypePreToComponentPre() {
	return async (tree) => {
		// Replace `pre` tags with our custom `Component.pre` tags.
		// This enables us to use rehype-pretty-code with our custom `pre` component.
		visit(tree, (node) => {
			if (node?.type === 'element' && node?.tagName === 'pre') {
				node.tagName = 'Components.pre';
			}
		});
	};
}

/**
 * @returns {HastTransformer}
 */
function rehypeHandleMetadata() {
	return async (tree) => {
		visit(tree, (node) => {
			if (node?.type === 'element' && node?.tagName === 'figure') {
				if (!('data-rehype-pretty-code-figure' in node.properties)) {
					return;
				}

				const preElement = node.children.at(-1);
				if (preElement && 'tagName' in preElement && preElement.tagName !== 'pre') {
					return;
				}

				const firstChild = node.children.at(0);
				if (firstChild && 'tagName' in firstChild && firstChild.tagName === 'figcaption') {
					node.properties['data-metadata'] = '';
					const lastChild = node.children.at(-1);
					if (lastChild && 'properties' in lastChild) {
						lastChild.properties['data-metadata'] = '';
					}
				}
			}
		});
	};
}

/**
 * @returns {HastTransformer}
 */
function rehypeRenderCode() {
	return async (tree) => {
		let counter = 0;
		visit(tree, (node) => {
			if (
				node?.type === 'element' &&
				(node?.tagName === 'Components.pre' || node?.tagName === 'pre')
			) {
				counter++;

				const isNonPP = counter % 2 === 0;
				if (isNonPP) {
					node.properties = {
						...node.properties,
						'data-non-pp': '',
					};
				}

				const codeEl = node.children[0];
				if (codeEl.type === 'element' && codeEl.tagName !== 'code') {
					return;
				}

				if (codeEl.type === 'element') {
					const meltString = tabsToSpaces(
						toHtml(codeEl, {
							allowDangerousCharacters: true,
							allowDangerousHtml: true,
						})
					);

					//@ts-expect-error we're modifying the node type
					codeEl.type = 'raw';
					//@ts-expect-error this is now a raw node which has a value property
					codeEl.value = `{@html \`${escapeSvelte(meltString)}\`}`;
				}
			}
		});
	};
}

function tabsToSpaces(code) {
	return code.replaceAll('    ', '  ').replaceAll('\t', '  ');
}
