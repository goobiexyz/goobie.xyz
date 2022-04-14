import { c as create_ssr_component, b as createEventDispatcher, v as validate_component, e as escape, g as getContext } from "./index-bbc75d3b.js";
import { I as IconButton } from "./Page-02a8f5df.js";
var PageControls_svelte_svelte_type_style_lang = "";
const css = {
  code: ".page-controls.svelte-bji4mj{display:flex;align-items:center;justify-content:center}.page-number.svelte-bji4mj{margin:0 1.5rem;font-size:1.2rem;width:100px;text-align:center}",
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
  $$result.css.add(css);
  return `<div class="${"page-controls svelte-bji4mj"}">${validate_component(IconButton, "IconButton").$$render($$result, {
    type: "left-arrow",
    size: "big",
    color: "dark-blue"
  }, {}, {})}
  <span class="${"page-number svelte-bji4mj"}">${escape(pageNum)} of ${escape(lastPage)}</span>
  ${validate_component(IconButton, "IconButton").$$render($$result, {
    type: "right-arrow",
    size: "big",
    color: "dark-blue"
  }, {}, {})}
</div>`;
});
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
export { PageControls as P, page as p };
