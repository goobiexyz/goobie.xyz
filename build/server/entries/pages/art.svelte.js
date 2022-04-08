import { g as getContext, c as create_ssr_component, h as validate_store, i as subscribe, v as validate_component, e as escape, d as each, a as add_attribute } from "../../chunks/index-1c4ec740.js";
import { P as Page, S as Section, I as IconButton } from "../../chunks/Page-c010a59d.js";
import { M as MediaModal } from "../../chunks/MediaModal-7361a527.js";
/* empty css                                                             */const getStores = () => {
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
var art_svelte_svelte_type_style_lang = "";
const css = {
  code: ".controls.s-i6LCfIOas9VW{display:flex;align-items:center;justify-content:center}.page-number.s-i6LCfIOas9VW{margin:0 1.5rem;font-size:1.2rem;width:100px;text-align:center}.gallery.s-i6LCfIOas9VW{display:grid;grid-template-columns:repeat(5, 1fr);grid-gap:calc(1.5rem / 2)}img.s-i6LCfIOas9VW{display:block;width:100%;border-radius:10px}button.s-i6LCfIOas9VW{transition:0.1s transform}button.s-i6LCfIOas9VW:hover{transform:scale(1.1)}button.s-i6LCfIOas9VW:active{transform:scale(1)}@media only screen and (max-width: 768px){.gallery.s-i6LCfIOas9VW{grid-template-columns:repeat(3, 1fr)}}.s-i6LCfIOas9VW{}",
  map: null
};
const Art = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => value);
  let posts = [];
  let pageNum = 1;
  let lastPage = "";
  let mediaModal;
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
            return `<div class="${"controls s-i6LCfIOas9VW"}">${validate_component(IconButton, "IconButton").$$render($$result, {
              type: "left-arrow",
              size: "big",
              color: "dark-blue"
            }, {}, {})}
      <span class="${"page-number s-i6LCfIOas9VW"}">${escape(pageNum)} of ${escape(lastPage)}</span>
      ${validate_component(IconButton, "IconButton").$$render($$result, {
              type: "right-arrow",
              size: "big",
              color: "dark-blue"
            }, {}, {})}</div>

    <div class="${"gallery s-i6LCfIOas9VW"}">${each(posts, (post) => {
              return `<button${add_attribute("title", post.title, 0)} class="${"s-i6LCfIOas9VW"}"><img src="${"/posts/art/thumbs/" + escape(post._id) + ".jpg"}" alt="${""}" class="${"s-i6LCfIOas9VW"}">
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
export { Art as default };
