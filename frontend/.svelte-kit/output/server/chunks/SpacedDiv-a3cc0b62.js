import { c as create_ssr_component, e as escape, n as null_to_empty, f as add_attribute } from "./index-0ee30357.js";
var SpacedDiv_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.single.svelte-xnbq2x >*:not(:first-child){margin-top:var(--margin)}div.half.svelte-xnbq2x >*:not(:first-child){margin-top:var(--half-margin)}div.double.svelte-xnbq2x >*:not(:first-child){margin-top:var(--double)}",
  map: null
};
const SpacedDiv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "" } = $$props;
  let { spacing = "single" } = $$props;
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty(spacing)) + " svelte-xnbq2x"}"${add_attribute("style", style, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
export { SpacedDiv as S };
