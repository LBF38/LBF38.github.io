# lbf38.github.io

## 1.0.2

### Patch Changes

- Chore(deps-dev): bump vite from 5.3.6 to 5.4.6 _[`#48`](https://github.com/LBF38/LBF38.github.io/pull/48) [`b4a0b0f`](https://github.com/LBF38/LBF38.github.io/commit/b4a0b0fbdba59c5616ead25816dc56daf8832f83) [@dependabot](https://github.com/apps/dependabot)_
- Chore(deps): bump rollup from 3.29.4 to 3.29.5 _[`#43`](https://github.com/LBF38/LBF38.github.io/pull/43) [`1461a66`](https://github.com/LBF38/LBF38.github.io/commit/1461a66925601f4716a3d043bbc7d09fda723f90) [@dependabot](https://github.com/apps/dependabot)_
- Chore(deps-dev): bump vite from 5.3.1 to 5.3.6 _[`#44`](https://github.com/LBF38/LBF38.github.io/pull/44) [`6d5ec4c`](https://github.com/LBF38/LBF38.github.io/commit/6d5ec4c923c0c82975aafc7d464ebdd8f116a8ba) [@dependabot](https://github.com/apps/dependabot)_
- Chore(deps-dev): bump svelte from 4.2.18 to 4.2.19 _[`#41`](https://github.com/LBF38/LBF38.github.io/pull/41) [`40afae1`](https://github.com/LBF38/LBF38.github.io/commit/40afae1223c0802edfe689daa1a894abaff09a46) [@dependabot](https://github.com/apps/dependabot)_

## 1.0.1

### Patch Changes

- Update SEO related code
  _[`#39`](https://github.com/LBF38/LBF38.github.io/pull/39) [`2a23d8a`](https://github.com/LBF38/LBF38.github.io/commit/2a23d8ad8af8c67a1b1a20558521d0b13839abcd) [@LBF38](https://github.com/LBF38)_

  also add a social media image for OpenGraph
  and fix some related bugs

- Hotfix on i18n for messages defined in main layout
  _[`1bc5554`](https://github.com/LBF38/LBF38.github.io/commit/1bc55548508a1a4df1db6d5d6b45b37fe70ba177) [@LBF38](https://github.com/LBF38)_

  limitation of the lib. Messages defined in main layout aren't well handled

## 1.0.0

### Major Changes

- First major release of the website !
  _[`#38`](https://github.com/LBF38/LBF38.github.io/pull/38) [`2739e4f`](https://github.com/LBF38/LBF38.github.io/commit/2739e4fe29d8d788d42686ae9511273a7b0d135b) [@LBF38](https://github.com/LBF38)_

  It has support of the following features :

  - internationalization w/ @inlang/paraglideJS
  - dark/white mode
  - UI components using shadcn/ui
  - MDSveX and ContentLayer for content management and markdown support
  - SvelteKit framework
  - and other details.

### Minor Changes

- Add tech page
  _[`#38`](https://github.com/LBF38/LBF38.github.io/pull/38) [`2739e4f`](https://github.com/LBF38/LBF38.github.io/commit/2739e4fe29d8d788d42686ae9511273a7b0d135b) [@LBF38](https://github.com/LBF38)_

  new page w/ some of the main technologies and tools I know and use.

- Update all website content
  _[`#38`](https://github.com/LBF38/LBF38.github.io/pull/38) [`2739e4f`](https://github.com/LBF38/LBF38.github.io/commit/2739e4fe29d8d788d42686ae9511273a7b0d135b) [@LBF38](https://github.com/LBF38)_

  to make the about page.
  each content is available in french and english

### Patch Changes

- Add minor UI fixes
  _[`93cf44d`](https://github.com/LBF38/LBF38.github.io/commit/93cf44d1ea3a3e226cf4387de73449dc42fbff93) [@LBF38](https://github.com/LBF38)_

  - make dark mode as default when navigating to the website in first place.
  - update footer to contain the copyright and website's version from `package.json`
  - update layout transition to make website navigation feels faster.

- Fix the mobile nav to autoclose on click _[`#36`](https://github.com/LBF38/LBF38.github.io/pull/36) [`8d0b73a`](https://github.com/LBF38/LBF38.github.io/commit/8d0b73aa4711c5cb0b690e63df93e87edd79c840) [@LBF38](https://github.com/LBF38)_

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
