import { c as create_ssr_component, e as escape, h as subscribe, d as each, v as validate_component } from "../../../chunks/index-bbc75d3b.js";
import { P as Page, S as Section } from "../../../chunks/Page-961fbe05.js";
import { p as page, P as PageControls } from "../../../chunks/stores-05150326.js";
import { c as convertDate } from "../../../chunks/convert-date-825a956c.js";
import "remark";
import "strip-markdown";
/* empty css                                                             */var Row_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'a.svelte-13k9c10,a.svelte-13k9c10:visited{color:inherit;text-decoration:inherit}.row.svelte-13k9c10{display:grid;grid-template-columns:200px 1fr;grid-gap:calc(1.5rem / 2)}.row.svelte-13k9c10:not(:last-child){border-bottom:1px dashed var(--black);padding-bottom:calc(1.5rem / 2)}.type.svelte-13k9c10{display:block;text-transform:uppercase;font-size:1em;letter-spacing:4px;font-weight:bold}.title.svelte-13k9c10{display:block;font-family:"urbane-bold";font-size:1.5em;text-align:left}time.svelte-13k9c10{display:block;margin-top:4px;font-family:monospace;font-size:1.1em}.description.svelte-13k9c10{margin-top:calc(1.5rem / 2);font-size:0.8em}.thumb.svelte-13k9c10{width:100%}@media only screen and (max-width: 900px){.row.svelte-13k9c10{grid-template-columns:80px 1fr}.description.svelte-13k9c10{display:none}}@media only screen and (max-width: 768px){.post-meta.svelte-13k9c10{font-size:0.8rem}}',
  map: null
};
const Row = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let blogBody = "";
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `<a class="${"row svelte-13k9c10"}" href="${"/blog/post/" + escape(post._id)}"><img class="${"thumb svelte-13k9c10"}" src="${"/posts/" + escape(post.type) + "/thumbs/" + escape(post._id) + ".jpg"}" alt="${""}">
  <div class="${"post-meta svelte-13k9c10"}"><span class="${"type svelte-13k9c10"}">${escape(post.type)}</span>
    <span class="${"title svelte-13k9c10"}">${escape(post.title)}</span>
    <time class="${"svelte-13k9c10"}">${escape(convertDate(post.date))}</time>
    ${post.desc ? `<p class="${"description svelte-13k9c10"}">${escape(post.desc)}</p>` : `${post.type === "blog" ? `<p class="${"description svelte-13k9c10"}">${escape(blogBody)}</p>` : ``}`}</div>
</a>`;
});
var PostList_svelte_svelte_type_style_lang = "";
const css = {
  code: ".layout.svelte-14sbhb5{display:grid;grid-gap:1.5rem;border:4px solid var(--black);border-radius:20px;padding:1.5rem;margin:auto;background:white}.post-list.svelte-14sbhb5{transition:0.25s opacity;display:grid;grid-row-gap:calc(1.5rem / 2)}.post-list.hide.svelte-14sbhb5{opacity:0}",
  map: null
};
const PostList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let posts = [];
  let pageNum = 1;
  let lastPage = 1;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="${"layout svelte-14sbhb5"}">
  <div class="${"post-list " + escape("hide") + " svelte-14sbhb5"}">${posts.length > 0 ? `${each(posts, (post) => {
    return `${validate_component(Row, "Row").$$render($$result, { post }, {}, {})}`;
  })}` : `<p>There&#39;s nothing to see here.</p>`}</div>
  ${validate_component(PageControls, "PageControls").$$render($$result, { pageNum, lastPage }, {}, {})}
</div>`;
});
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Blog" }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { simple: "true", bg: "gracie" }, {}, {
        default: () => {
          return `<div class="${"grid"}">${validate_component(PostList, "PostList").$$render($$result, {
            class: "content",
            style: "simple",
            shrinkwrap: false
          }, {}, {})}</div>`;
        }
      })}`;
    }
  })}`;
});
export { Blog as default };
