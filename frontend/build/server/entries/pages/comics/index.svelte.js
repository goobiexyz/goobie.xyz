import { c as create_ssr_component, v as validate_component } from "../../../chunks/index-bbc75d3b.js";
import { P as Page, S as Section } from "../../../chunks/Page-d1a218d7.js";
const Comics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Comics" }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { heading: "Coming Soon", simple: "true" }, {}, {
        default: () => {
          return `<p>I&#39;m currently making some edits to the first chapter of my comic series <i>Ameliden</i> as well as working on chapter two, both of which will be accessible from this page as soon as they are finished, so <strong>stay tuned!</strong></p>
    <img src="${"/images/ameliden.png"}" alt="${""}" style="${"max-width: 100%"}">`;
        }
      })}`;
    }
  })}`;
});
export { Comics as default };
