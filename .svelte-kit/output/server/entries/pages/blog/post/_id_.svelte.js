import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index-bbc75d3b.js";
import { P as Page, S as Section } from "../../../../chunks/Page-d1a218d7.js";
import { S as SvelteMarkdown } from "../../../../chunks/SvelteMarkdown-bfd616a7.js";
async function load({ params, fetch }) {
  let id = params.id;
  const response = await fetch(`/api/grabble/get/${id}`);
  let post;
  if (!response.ok) {
    return response;
  }
  post = await response.json();
  const response2 = await fetch(`/posts/blog/${id}.md`);
  if (!response2.ok) {
    return { status: 500, body: "File missing" };
  }
  let blogBody = await response2.text();
  return { status: 200, props: { post, blogBody } };
}
const U5Bidu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { blogBody } = $$props;
  if ($$props.blogBody === void 0 && $$bindings.blogBody && blogBody !== void 0)
    $$bindings.blogBody(blogBody);
  return `${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Blog" }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { simple: "true" }, {}, {
        default: () => {
          return `<article>${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: blogBody }, {}, {})}</article>`;
        }
      })}`;
    }
  })}`;
});
export { U5Bidu5D as default, load };
