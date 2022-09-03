import { c as create_ssr_component, a as createEventDispatcher, v as validate_component, e as escape, b as subscribe, d as each, f as add_attribute } from "../../chunks/index-3ede4686.js";
import { I as IconButton, P as Page, S as Section } from "../../chunks/Page-3b245b46.js";
import { p as page } from "../../chunks/stores-fadc4c08.js";
import { I as Image } from "../../chunks/Image-de277fa9.js";
import { M as MediaModal } from "../../chunks/MediaModal-9a94fcea.js";
import "../../chunks/SpacedDiv-6bdd6ed1.js";
import "../../chunks/convert-date-64d95c73.js";
var PageControls_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".page-controls.svelte-1x15rsl{display:flex;align-items:center;justify-content:center}.page-number.svelte-1x15rsl{margin:0 var(--margin);font-size:1.2rem;width:100px;text-align:center}",
  map: null
};
let color = "var(--dark-blue)";
const PageControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageNum } = $$props;
  let { lastPage } = $$props;
  let { customText = "" } = $$props;
  createEventDispatcher();
  if ($$props.pageNum === void 0 && $$bindings.pageNum && pageNum !== void 0)
    $$bindings.pageNum(pageNum);
  if ($$props.lastPage === void 0 && $$bindings.lastPage && lastPage !== void 0)
    $$bindings.lastPage(lastPage);
  if ($$props.customText === void 0 && $$bindings.customText && customText !== void 0)
    $$bindings.customText(customText);
  $$result.css.add(css$1);
  return `<div class="${"page-controls svelte-1x15rsl"}">${validate_component(IconButton, "IconButton").$$render($$result, { type: "left-arrow", size: "big", color }, {}, {})}
  <span class="${"page-number svelte-1x15rsl"}">${customText == "" ? `${escape(pageNum)} of ${escape(lastPage)}` : `${escape(customText)}`}</span>
  ${validate_component(IconButton, "IconButton").$$render($$result, { type: "right-arrow", size: "big", color }, {}, {})}
</div>`;
});
var art_svelte_svelte_type_style_lang = "";
const css = {
  code: ".gallery.svelte-ujxgij{display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:var(--half-margin)}button.svelte-ujxgij{display:flex;transition:0.06s transform}button.svelte-ujxgij:hover{transform:scale(1.06)}button.svelte-ujxgij:active{transform:scale(1)}@media only screen and (max-width: 768px){.gallery.svelte-ujxgij{grid-template-columns:repeat(3, 1fr)}}",
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
let apiUrl = "https://api.graciebell.art";
const Art = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => value);
  let { pagination } = $$props;
  let mediaModal;
  let pageNum = 1;
  let lastPage = pagination.pageCount;
  let posts = [];
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

    <div class="${"gallery svelte-ujxgij"}">${each(posts, (post) => {
              let thumbnailMeta = post.attributes.thumbnail.data.attributes, thumbnailUrl = apiUrl + thumbnailMeta.formats.thumbnail.url;
              return `
        
        <button${add_attribute("title", post.attributes.title, 0)} class="${"svelte-ujxgij"}">${validate_component(Image, "Image").$$render($$result, {
                src: thumbnailUrl,
                style: "border-radius: var(--rounded-2); width: 100%;",
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
