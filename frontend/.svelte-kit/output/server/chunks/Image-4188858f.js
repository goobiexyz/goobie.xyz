import { c as create_ssr_component } from "./index-0ee30357.js";
var Image_svelte_svelte_type_style_lang = "";
const css = {
  code: "img.svelte-1xskegx{display:block;opacity:0;transition:opacity 0.25s ease-out}img.loaded.svelte-1xskegx{opacity:1}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt = "" } = $$props;
  let { style = "" } = $$props;
  let { lazy = false } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.lazy === void 0 && $$bindings.lazy && lazy !== void 0)
    $$bindings.lazy(lazy);
  $$result.css.add(css);
  return `${``}`;
});
export { Image as I };
