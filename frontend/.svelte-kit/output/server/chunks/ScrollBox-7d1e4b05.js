import { c as create_ssr_component, v as validate_component, k as add_styles, l as merge_ssr_styles, e as escape } from "./index-3ede4686.js";
import { B as Box } from "./Box-7abaf6cf.js";
var ScrollBox_svelte_svelte_type_style_lang = "";
const css = {
  code: ".scroll-box.svelte-vi6sp0{overflow-y:scroll;padding:var(--margin);margin:2px}.scroll-box.svelte-vi6sp0 >*:not(:first-child){margin-top:var(--margin)}.scroll-box.svelte-vi6sp0{scrollbar-width:12px;-webkit-mask-image:linear-gradient(\n      to bottom,\n      transparent,\n      black var(--margin),\n      black calc(100% - var(--margin)),\n      transparent\n  ), linear-gradient(black, black);mask-image:linear-gradient(\n      to bottom,\n      transparent,\n      black var(--margin),\n      black calc(100% - var(--margin)),\n      transparent\n  ), linear-gradient(black, black);-webkit-mask-size:calc(100% - 12px) 100%, 12px 100%;mask-size:calc(100% - 12px) 100%, 12px 100%;-webkit-mask-position:0 0, 100% 0;mask-position:0 0, 100% 0;-webkit-mask-repeat:no-repeat, no-repeat;mask-repeat:no-repeat, no-repeat;scrollbar-color:var(--scrollbar-color) transparent}.scroll-box.svelte-vi6sp0::-webkit-scrollbar{width:6px}.scroll-box.svelte-vi6sp0::-webkit-scrollbar-button{background:transparent;height:3px\n    }.scroll-box.svelte-vi6sp0::-webkit-scrollbar-thumb{background-color:var(--scrollbar-color);border-radius:9999px}.scroll-box.svelte-vi6sp0::-webkit-scrollbar-track{background-color:transparent}",
  map: null
};
const ScrollBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { accent = "white" } = $$props;
  let { background = "none" } = $$props;
  let { border = "var(--border)" } = $$props;
  let { padding = "var(--margin)" } = $$props;
  let { height = "600px" } = $$props;
  if ($$props.accent === void 0 && $$bindings.accent && accent !== void 0)
    $$bindings.accent(accent);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  $$result.css.add(css);
  return `${validate_component(Box, "Box").$$render($$result, {
    style: `background: ${background};border: ${accent} ${border} solid;padding: 0;`
  }, {}, {
    default: () => {
      return `<div class="${"scroll-box svelte-vi6sp0"}"${add_styles(merge_ssr_styles("--scrollbar-color: " + escape(accent) + ";", { padding, height }))}>${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}`;
});
export { ScrollBox as S };
