# lbf38.github.io

## 0.1.0

### Minor Changes

- Add contentlayer support to the website
  _[`#33`](https://github.com/LBF38/LBF38.github.io/pull/33) [`85e27d2`](https://github.com/LBF38/LBF38.github.io/commit/85e27d2f07abe3cf9dcd82bc6a487ec0876da94e) [@LBF38](https://github.com/LBF38)_

  it allows for an easy way to deal with markdown content and adds a typesafe layer on those documents.
  Therefore, it offers a simple way to define document types and create a simple yet effective CMS layer on top of Markdown/MDX/MDSVEX documents.

- Add mdsvex support to the website
  _[`#33`](https://github.com/LBF38/LBF38.github.io/pull/33) [`85e27d2`](https://github.com/LBF38/LBF38.github.io/commit/85e27d2f07abe3cf9dcd82bc6a487ec0876da94e) [@LBF38](https://github.com/LBF38)_

  It allows for easier content management. Therefore, it offers better ways to manage page content on the website based on markdown files.
  Moreover, we can integrate Svelte components inside the document, which can allow more interactive and interesting content.
  Finally, w/ contentlayer support, it allows to easily manage pieces of content for a given page or type of content to produce/write.

- Update about page layout
  _[`#33`](https://github.com/LBF38/LBF38.github.io/pull/33) [`774568b`](https://github.com/LBF38/LBF38.github.io/commit/774568bf2fae08ea6e01045a5bb614aa56c6be94) [@LBF38](https://github.com/LBF38)_

  By using `contentlayer` and `mdsvex`, improved the about page using different sections and content.
  It allows to build complex layout using managed content.

### Patch Changes

- Fix scrollbar visibility issue
  _[`#32`](https://github.com/LBF38/LBF38.github.io/pull/32) [`3e56dbb`](https://github.com/LBF38/LBF38.github.io/commit/3e56dbbc2b4e09d4415b0027597cdab4b868381e) [@LBF38](https://github.com/LBF38)_

  After some experimentations and more reading on Svelte's internals, I finally fixed the issue concerning the scrollbar showing on pages that requires it, depending on the `body.scrollHeight` or `body.clientHeight` compared to the `window.innerHeight`.
  Therefore, using Svelte's reactivity and the SvelteKit's `$page` store, we can show or hide the scrollbar dynamically by adding a CSS class, here `hide-scrollbar`.

- Add cal button on contact page
  _[`#30`](https://github.com/LBF38/LBF38.github.io/pull/30) [`546e459`](https://github.com/LBF38/LBF38.github.io/commit/546e45997afbbbb3f24d31e4739a14f6c68df743) [@LBF38](https://github.com/LBF38)_

  this helps improving the easy booking for people wanting to meet

- Add clarity analytics (Microsoft)
  _[`228bb4d`](https://github.com/LBF38/LBF38.github.io/commit/228bb4d81538fc104cac5acb4018cb17d75fafa0) [@LBF38](https://github.com/LBF38)_

  This helps having better understandings of the website's overall traffic and bugs in production env.

- Improve footer and general layout _[`#27`](https://github.com/LBF38/LBF38.github.io/pull/27) [`6e1a182`](https://github.com/LBF38/LBF38.github.io/commit/6e1a182ac15be2fa87b452fbe96e3abecaadfa79) [@LBF38](https://github.com/LBF38)_
