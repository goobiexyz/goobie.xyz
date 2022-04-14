export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/art.svelte"),
	() => import("../../src/routes/comics/index.svelte"),
	() => import("../../src/routes/comms.svelte"),
	() => import("../../src/routes/contact.svelte"),
	() => import("../../src/routes/design.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/test.svelte")
];

export const dictionary = {
	"": [[0, 7], [1]],
	"art": [[0, 2], [1]],
	"comics": [[0, 3], [1]],
	"comms": [[0, 4], [1]],
	"contact": [[0, 5], [1]],
	"design": [[0, 6], [1]],
	"test": [[0, 8], [1]]
};