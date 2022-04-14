import { c as create_ssr_component, h as subscribe, v as validate_component, d as each, a as add_attribute } from "../../chunks/index-bbc75d3b.js";
import { P as Page, S as Section } from "../../chunks/Page-02a8f5df.js";
import { P as PageControls, p as page } from "../../chunks/stores-bdc3bc9e.js";
import { M as MediaModal, I as Image } from "../../chunks/MediaModal-4f1aa2f0.js";
/* empty css                                                             */import "../../chunks/convert-date-64d95c73.js";
import "../../chunks/SvelteMarkdown-bfd616a7.js";
var art_svelte_svelte_type_style_lang = "";
const css = {
  code: ".gallery.svelte-1r35nzb{display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:calc(1.5rem / 2)}button.svelte-1r35nzb{overflow:hidden;transition:0.1s transform}button.svelte-1r35nzb:hover{transform:scale(1.1)}button.svelte-1r35nzb:active{transform:scale(1)}@media only screen and (max-width: 768px){.gallery.svelte-1r35nzb{grid-template-columns:repeat(3, 1fr)}}",
  map: null
};
let pageSize = 15;
async function load({ fetch }) {
  let params = [`filters[media_type][$eq]=art`, `pagination[pageSize]=${pageSize}`];
  let res = await fetch(`https://api.graciebell.art/api/posts?${params.join("&")}`);
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

    <div class="${"gallery svelte-1r35nzb"}">${each(posts, (post) => {
              return `<button${add_attribute("title", post.attributes.title, 0)} class="${"rounded-more svelte-1r35nzb"}">${validate_component(Image, "Image").$$render($$result, {
                src: "https://api.graciebell.art" + post.attributes.thumbnail.data.attributes.formats.thumbnail.url,
                alt: ""
              }, {}, {})}
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
