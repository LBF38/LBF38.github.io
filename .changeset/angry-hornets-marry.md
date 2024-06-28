---
'lbf38.github.io': patch
---

fix scrollbar visibility issue

After some experimentations and more reading on Svelte's internals, I finally fixed the issue concerning the scrollbar showing on pages that requires it, depending on the `body.scrollHeight` or `body.clientHeight` compared to the `window.innerHeight`.
Therefore, using Svelte's reactivity and the SvelteKit's `$page` store, we can show or hide the scrollbar dynamically by adding a CSS class, here `hide-scrollbar`.
