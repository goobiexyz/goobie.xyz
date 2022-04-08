import { c as create_ssr_component, e as escape } from "./index-1c4ec740.js";
/* empty css                                                 */const css$1 = {
  code: ".flex-2-col.s-rbAyBgJTsF0h.s-rbAyBgJTsF0h{display:flex}.flex-2-col.halfnhalf.s-rbAyBgJTsF0h .col-1.s-rbAyBgJTsF0h,.flex-2-col.halfnhalf.s-rbAyBgJTsF0h .col-2.s-rbAyBgJTsF0h{flex:1}.m-single.s-rbAyBgJTsF0h .col-1.s-rbAyBgJTsF0h{margin-right:calc(1.5rem / 2)}.m-single.s-rbAyBgJTsF0h .col-2.s-rbAyBgJTsF0h{margin-left:calc(1.5rem / 2)}.m-double.s-rbAyBgJTsF0h .col-1.s-rbAyBgJTsF0h{margin-right:1.5rem}.m-double.s-rbAyBgJTsF0h .col-2.s-rbAyBgJTsF0h{margin-left:1.5rem}@media only screen and (max-width: 600px){.flex-2-col.s-rbAyBgJTsF0h.s-rbAyBgJTsF0h:not(.noBreak){flex-direction:column;align-items:center}.flex-2-col.s-rbAyBgJTsF0h:not(.noBreak) .col-2.s-rbAyBgJTsF0h{margin-top:1.5rem}}.s-rbAyBgJTsF0h.s-rbAyBgJTsF0h{}",
  map: null
};
const Flex2Col = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { noBreak = false } = $$props;
  let { halfnhalf = false } = $$props;
  let { margin = "single" } = $$props;
  if ($$props.noBreak === void 0 && $$bindings.noBreak && noBreak !== void 0)
    $$bindings.noBreak(noBreak);
  if ($$props.halfnhalf === void 0 && $$bindings.halfnhalf && halfnhalf !== void 0)
    $$bindings.halfnhalf(halfnhalf);
  if ($$props.margin === void 0 && $$bindings.margin && margin !== void 0)
    $$bindings.margin(margin);
  $$result.css.add(css$1);
  return `<div class="${[
    "flex-2-col m-" + escape(margin) + " s-rbAyBgJTsF0h",
    (noBreak ? "noBreak" : "") + " " + (halfnhalf ? "halfnhalf" : "")
  ].join(" ").trim()}"><div class="${"col-1 s-rbAyBgJTsF0h"}">${slots["col-1"] ? slots["col-1"]({}) : ``}</div>
  <div class="${"col-2 s-rbAyBgJTsF0h"}">${slots["col-2"] ? slots["col-2"]({}) : ``}</div>
</div>`;
});
var ScrollBox_svelte_svelte_type_style_lang = "";
const css = {
  code: ".latest-posts.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU{padding:2px;width:min-content;margin-left:auto;margin-right:auto}.latest-posts.style-card.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU{border-radius:16px;border:6px solid white}.latest-posts.style-thin.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU{border-radius:16px;border:2px solid white}.latest-posts.black.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU{border-color:var(--black)}.scroll-box.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU{resize:vertical;display:flex;flex-direction:column;align-items:center;height:450px;overflow-y:scroll;padding:1.5rem;--scrollbar-width:12px;scrollbar-width:var(--scrollbar-width);--mask-height:1.5rem;--mask-image-content:linear-gradient(\n      to bottom,\n      transparent,\n      black var(--mask-height),\n      black calc(100% - var(--mask-height)),\n      transparent\n  );--mask-size-content:calc(100% - var(--scrollbar-width)) 100%;--mask-image-scrollbar:linear-gradient(black, black);--mask-size-scrollbar:var(--scrollbar-width) 100%;mask-image:var(--mask-image-content), var(--mask-image-scrollbar);mask-size:var(--mask-size-content), var(--mask-size-scrollbar);mask-position:0 0, 100% 0;mask-repeat:no-repeat, no-repeat;scrollbar-color:white transparent}.scroll-box.short.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU{height:250px}.scroll-box.s-FTLZGcDXnVaU >*:not(:first-child){margin-top:1.5rem}.scroll-box.black.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU{scrollbar-color:var(--black) transparent}.scroll-box.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU::-webkit-scrollbar-thumb{background-color:white;border-radius:9999px}.scroll-box::-webkit-scrollbar-thumb.black.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU{background-color:var(--black)}.scroll-box.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU::-webkit-scrollbar-track{background-color:transparent}@media only screen and (max-width: 768px){.latest-posts.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU{width:auto}.latest-posts.style-card.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU{border:none;padding:0;margin-top:0}.latest-posts.style-card.s-FTLZGcDXnVaU .scroll-box.s-FTLZGcDXnVaU{margin:0;padding:1.5rem var(--scrollbar-width) 1.5rem 0}}.s-FTLZGcDXnVaU.s-FTLZGcDXnVaU{}",
  map: null
};
const ScrollBox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { accent = "white" } = $$props;
  let { height = "" } = $$props;
  let { style = "card" } = $$props;
  if ($$props.accent === void 0 && $$bindings.accent && accent !== void 0)
    $$bindings.accent(accent);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css);
  return `<div class="${"latest-posts " + escape(accent) + " style-" + escape(style) + " s-FTLZGcDXnVaU"}"><div class="${"scroll-box " + escape(height) + " " + escape(accent) + " s-FTLZGcDXnVaU"}">${slots.default ? slots.default({}) : ``}</div></div>`;
});
export { Flex2Col as F, ScrollBox as S };
