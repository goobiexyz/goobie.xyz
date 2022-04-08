import { c as create_ssr_component, h as subscribe, v as validate_component, d as each, a as add_attribute, e as escape } from "../../chunks/index-bbc75d3b.js";
import { P as Page, S as Section } from "../../chunks/Page-3fef82e1.js";
import { P as PageControls, p as page } from "../../chunks/stores-c8d7d4bc.js";
import { M as MediaModal } from "../../chunks/MediaModal-008ad407.js";
/* empty css                                                             */import "../../chunks/convert-date-825a956c.js";
import "../../chunks/SvelteMarkdown-bfd616a7.js";
var art_svelte_svelte_type_style_lang = "";
const css = {
  code: ".gallery.svelte-q4wnzr{display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:calc(1.5rem / 2)}img.svelte-q4wnzr{display:block;width:100%;border-radius:10px}button.svelte-q4wnzr{transition:0.1s transform}button.svelte-q4wnzr:hover{transform:scale(1.1)}button.svelte-q4wnzr:active{transform:scale(1)}@media only screen and (max-width: 768px){.gallery.svelte-q4wnzr{grid-template-columns:repeat(3, 1fr)}}",
  map: null
};
let pageSize = 15;
async function load({ fetch }) {
  let params = [`filters[media_type][$eq]=art`, `pagination[pageSize]=${pageSize}`];
  let res = await fetch(`/api/posts?${params.join("&")}`);
  let data = await res.json();
  return {
    props: { pagination: data.meta.pagination }
  };
}
const Art = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { pagination } = $$props;
  let mediaModal;
  let posts = [];
  let pageNum = 1;
  let lastPage = pagination.pageCount;
  if ($$props.pagination === void 0 && $$bindings.pagination && pagination !== void 0)
    $$bindings.pagination(pagination);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(MediaModal, "MediaModal").$$render($$result, { this: mediaModal }, {
      this: ($$value) => {
        mediaModal = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Art" }, {}, {
      default: () => {
        return `${validate_component(Section, "Dfs.Section").$$render($$result, { simple: "true" }, {}, {
          default: () => {
            return `${validate_component(PageControls, "PageControls").$$render($$result, { pageNum, lastPage }, {}, {})}

    <div class="${"gallery svelte-q4wnzr"}">${each(posts, (post) => {
              return `<button${add_attribute("title", post.attributes.title, 0)} class="${"svelte-q4wnzr"}"><img src="${"/api" + escape(post.attributes.thumbnail.data.attributes.url)}" alt="${""}" class="${"svelte-q4wnzr"}">
        </button>`;
            })}</div>`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_page();
  return $$rendered;
});
export { Art as default, load };
