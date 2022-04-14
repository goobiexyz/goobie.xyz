import { c as create_ssr_component, v as validate_component, e as escape, f as add_attribute } from "./index-0ee30357.js";
import { B as Box } from "./Box-76cefffb.js";
var ScrollBox_svelte_svelte_type_style_lang = "";
const css = {
  code: ".scroll-box.svelte-gb77oo{overflow-y:scroll;padding:var(--margin);margin:2px}.scroll-box.svelte-gb77oo >*:not(:first-child){margin-top:var(--margin)}.scroll-box.svelte-gb77oo{scrollbar-width:12px;-webkit-mask-image:linear-gradient(\n      to bottom,\n      transparent,\n      black var(--margin),\n      black calc(100% - var(--margin)),\n      transparent\n  ), linear-gradient(black, black);mask-image:linear-gradient(\n      to bottom,\n      transparent,\n      black var(--margin),\n      black calc(100% - var(--margin)),\n      transparent\n  ), linear-gradient(black, black);-webkit-mask-size:calc(100% - 12px) 100%, 12px 100%;mask-size:calc(100% - 12px) 100%, 12px 100%;-webkit-mask-position:0 0, 100% 0;mask-position:0 0, 100% 0;-webkit-mask-repeat:no-repeat, no-repeat;mask-repeat:no-repeat, no-repeat;scrollbar-color:white transparent}.scroll-box.black.svelte-gb77oo{scrollbar-color:var(--black) transparent}.scroll-box.svelte-gb77oo::-webkit-scrollbar{width:6px}.scroll-box.svelte-gb77oo::-webkit-scrollbar-button{background:transparent;height:3px\n    }.scroll-box.svelte-gb77oo::-webkit-scrollbar-thumb{background-color:white;border-radius:9999px}.scroll-box.black.svelte-gb77oo::-webkit-scrollbar-thumb{background-color:var(--black)}.scroll-box.svelte-gb77oo::-webkit-scrollbar-track{background-color:transparent}@media only screen and (max-width: 768px){}",
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
      return `<div class="${"scroll-box " + escape(accent) + " svelte-gb77oo"}"${add_attribute("style", `padding: ${padding};height: ${height};`, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
    }
  })}`;
});
export { ScrollBox as S };
