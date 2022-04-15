import { c as create_ssr_component, f as add_attribute } from "./index-3ede4686.js";
var Box_svelte_svelte_type_style_lang = "";
const css = {
  code: ".box.svelte-wlmuzl{background:white;border-radius:var(--rounded-2);padding:var(--half-margin)\n  }",
  map: null
};
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "" } = $$props;
  let { tag = "div" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  $$result.css.add(css);
  return `<${tag} class="${"box svelte-wlmuzl"}"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}</${tag}>`;
});
export { Box as B };
