import { c as create_ssr_component, e as escape } from "./index-0ee30357.js";
var FlexCols_svelte_svelte_type_style_lang = "";
const css = {
  code: ".flex-2-col.svelte-k5czkn{display:flex;flex-wrap:wrap}",
  map: null
};
const FlexCols = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { rowGap = "var(--margin)" } = $$props;
  let { colGap = "var(--margin)" } = $$props;
  if ($$props.rowGap === void 0 && $$bindings.rowGap && rowGap !== void 0)
    $$bindings.rowGap(rowGap);
  if ($$props.colGap === void 0 && $$bindings.colGap && colGap !== void 0)
    $$bindings.colGap(colGap);
  $$result.css.add(css);
  return `<div class="${"flex-2-col svelte-k5czkn"}" style="${"row-gap: " + escape(rowGap) + "; column-gap: " + escape(colGap) + ";"}">${slots.default ? slots.default({}) : ``}
</div>`;
});
export { FlexCols as F };
