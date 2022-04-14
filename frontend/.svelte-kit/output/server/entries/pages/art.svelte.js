import { g as getContext, c as create_ssr_component, a as createEventDispatcher, v as validate_component, e as escape, b as subscribe, d as each, f as add_attribute } from "../../chunks/index-0ee30357.js";
import { I as IconButton, P as Page, S as Section } from "../../chunks/Page-b367a379.js";
import { I as Image } from "../../chunks/Image-e7ebf645.js";
import { M as MediaModal } from "../../chunks/MediaModal-f5a88e57.js";
import "../../chunks/SpacedDiv-a3cc0b62.js";
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
var PageControls_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".page-controls.svelte-1x15rsl{display:flex;align-items:center;justify-content:center}.page-number.svelte-1x15rsl{margin:0 var(--margin);font-size:1.2rem;width:100px;text-align:center}",
  map: null
};
const PageControls = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pageNum } = $$props;
  let { lastPage } = $$props;
  createEventDispatcher();
  if ($$props.pageNum === void 0 && $$bindings.pageNum && pageNum !== void 0)
    $$bindings.pageNum(pageNum);
  if ($$props.lastPage === void 0 && $$bindings.lastPage && lastPage !== void 0)
    $$bindings.lastPage(lastPage);
  $$result.css.add(css$1);
  return `<div class="${"page-controls svelte-1x15rsl"}">${validate_component(IconButton, "IconButton").$$render($$result, {
    type: "left-arrow",
    size: "big",
    color: "dark-blue"
  }, {}, {})}
  <span class="${"page-number svelte-1x15rsl"}">${escape(pageNum)} of ${escape(lastPage)}</span>
  ${validate_component(IconButton, "IconButton").$$render($$result, {
    type: "right-arrow",
    size: "big",
    color: "dark-blue"
  }, {}, {})}
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
              return `<button${add_attribute("title", post.attributes.title, 0)} class="${"svelte-ujxgij"}">${validate_component(Image, "Image").$$render($$result, {
                src: "https://api.graciebell.art" + post.attributes.thumbnail.data.attributes.formats.thumbnail.url,
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
