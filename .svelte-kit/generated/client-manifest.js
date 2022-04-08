export { matchers } from './client-matchers.js';

export const components = [
	() => import("../runtime/components/layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/comics/index.svelte"),
	() => import("../../src/routes/design.svelte"),
	() => import("../../src/routes/comms.svelte"),
	() => import("../../src/routes/blog/index.svelte"),
	() => import("../../src/routes/blog/post/[id].svelte"),
	() => import("../../src/routes/art.svelte")
];

export const dictionary = {
	"": [[0, 2], [1]],
	"contact": [[0, 3], [1]],
	"comics": [[0, 4], [1]],
	"design": [[0, 5], [1]],
	"comms": [[0, 6], [1]],
	"blog": [[0, 7], [1]],
	"blog/post/[id]": [[0, 8], [1]],
	"art": [[0, 9], [1]]
};