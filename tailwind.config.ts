import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';
import typography from '@tailwindcss/typography';
import { fontFamily } from 'tailwindcss/defaultTheme';

/**
 * @param name Complete CSS variable name of the color (e.g. `magnum-100`)
 * @returns The CSS string to use in a Tailwind config
 */
function getColorFromVariableName(name: string) {
	return `rgb(var(--color-${name}) / <alpha-value>)`;
}

/**
 * @param name CSS variable name of the colors (e.g. `magnum`)
 * @param variants Variants of the color. Default is `[50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]`
 * @returns The structured colors object
 */
function getColorsFromName(
	name: string,
	variants: number[] = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
) {
	return Object.fromEntries(
		variants.map((n) => [`${n}`, getColorFromVariableName(`${name}-${n}`)])
	);
}
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: 'class',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1540px'
			}
		},
		extend: {
			colors: {
				magnum: getColorsFromName('magnum'),
				neutral: getColorsFromName('neutral'),
				zinc: getColorsFromName('zinc'),
				green: getColorsFromName('green', [400]),
				// white: getColorFromVariableName('white'),
				border: 'hsl(var(--border) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				ring: 'hsl(var(--ring) / <alpha-value>)',
				background: 'hsl(var(--background) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				primary: {
					DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
					foreground: 'hsl(var(--primary-foreground) / <alpha-value>)'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [
					'Inter',
					'-apple-system',
					'BlinkMacSystemFont',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'Arial',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol',
					...fontFamily.sans
				],
				display: [
					'GT Maru',
					'Segoe UI',
					'Roboto',
					'Oxygen',
					'Ubuntu',
					'Cantarell',
					'Fira Sans',
					'Droid Sans',
					'Helvetica Neue',
					'Arial',
					'sans-serif',
					'Apple Color Emoji',
					'Segoe UI Emoji',
					'Segoe UI Symbol'
				],
				mono: [
					'GT Maru Mono',
					'ui-monospace',
					'SFMono-Regular',
					'SF Mono',
					'Menlo',
					'Consolas',
					'Liberation Mono',
					'monospace'
				]
			},
			animation: {
				shine: 'shine 1s ease-in'
			},
			keyframes: {
				shine: {
					'100%': { left: '125%' }
				}
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						code: {
							position: 'relative',
							borderRadius: theme('borderRadius.md')
						}
					}
				}
			})
		}
	},

	plugins: [
		typography,
		plugin(function ({ addVariant }) {
			addVariant('hocus', ['&:hover', '&:focus']);
		})
	]
} satisfies Config;
