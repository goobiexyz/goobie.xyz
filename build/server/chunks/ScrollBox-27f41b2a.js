import { c as create_ssr_component, e as escape } from "./index-bbc75d3b.js";
/* empty css                                                 */const css$1 = {
  code: ".flex-2-col.svelte-1qagz8f.svelte-1qagz8f{display:flex}.flex-2-col.halfnhalf.svelte-1qagz8f .col-1.svelte-1qagz8f,.flex-2-col.halfnhalf.svelte-1qagz8f .col-2.svelte-1qagz8f{flex:1}.m-single.svelte-1qagz8f .col-1.svelte-1qagz8f{margin-right:calc(1.5rem / 2)}.m-single.svelte-1qagz8f .col-2.svelte-1qagz8f{margin-left:calc(1.5rem / 2)}.m-double.svelte-1qagz8f .col-1.svelte-1qagz8f{margin-right:1.5rem}.m-double.svelte-1qagz8f .col-2.svelte-1qagz8f{margin-left:1.5rem}@media only screen and (max-width: 600px){.flex-2-col.svelte-1qagz8f.svelte-1qagz8f:not(.noBreak){flex-direction:column;align-items:center}.flex-2-col.svelte-1qagz8f:not(.noBreak) .col-2.svelte-1qagz8f{margin-top:1.5rem}}",
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
    "flex-2-col m-" + escape(margin) + " svelte-1qagz8f",
    (noBreak ? "noBreak" : "") + " " + (halfnhalf ? "halfnhalf" : "")
  ].join(" ").trim()}"><div class="${"col-1 svelte-1qagz8f"}">${slots["col-1"] ? slots["col-1"]({}) : ``}</div>
  <div class="${"col-2 svelte-1qagz8f"}">${slots["col-2"] ? slots["col-2"]({}) : ``}</div>
</div>`;
});
var ScrollBox_svelte_svelte_type_style_lang = "";
const css = {
  code: ".latest-posts.svelte-1y0kbnv.svelte-1y0kbnv{width:min-content;padding:2px;margin-left:auto;margin-right:auto}.latest-posts.style-card.svelte-1y0kbnv.svelte-1y0kbnv{border-radius:16px;border:6px solid white}.latest-posts.style-thin.svelte-1y0kbnv.svelte-1y0kbnv{border-radius:16px;border:2px solid white}.latest-posts.black.svelte-1y0kbnv.svelte-1y0kbnv{border-color:var(--black)}.scroll-box.svelte-1y0kbnv.svelte-1y0kbnv{resize:vertical;display:flex;flex-direction:column;align-items:center;height:450px;overflow-y:scroll;padding:1.5rem;--scrollbar-width:12px;scrollbar-width:var(--scrollbar-width);--mask-height:1.5rem;--mask-image-content:linear-gradient(\n      to bottom,\n      transparent,\n      black var(--mask-height),\n      black calc(100% - var(--mask-height)),\n      transparent\n  );--mask-size-content:calc(100% - var(--scrollbar-width)) 100%;--mask-image-scrollbar:linear-gradient(black, black);--mask-size-scrollbar:var(--scrollbar-width) 100%;mask-image:var(--mask-image-content), var(--mask-image-scrollbar);-webkit-mask-image:var(--mask-image-content), var(--mask-image-scrollbar);mask-size:var(--mask-size-content), var(--mask-size-scrollbar);-webkit-mask-size:var(--mask-size-content), var(--mask-size-scrollbar);mask-position:0 0, 100% 0;-webkit-mask-position:0 0, 100% 0;mask-repeat:no-repeat, no-repeat;-webkit-mask-repeat:no-repeat, no-repeat;scrollbar-color:white transparent}.scroll-box.short.svelte-1y0kbnv.svelte-1y0kbnv{height:250px}.scroll-box.svelte-1y0kbnv >*:not(:first-child){margin-top:1.5rem}.scroll-box.black.svelte-1y0kbnv.svelte-1y0kbnv{scrollbar-color:var(--black) transparent}.scroll-box.svelte-1y0kbnv.svelte-1y0kbnv::-webkit-scrollbar{width:6px}.scroll-box.svelte-1y0kbnv.svelte-1y0kbnv::-webkit-scrollbar-button{background:transparent;height:3px}.scroll-box.svelte-1y0kbnv.svelte-1y0kbnv::-webkit-scrollbar-thumb{background-color:white;border-radius:9999px}.scroll-box.black.svelte-1y0kbnv.svelte-1y0kbnv::-webkit-scrollbar-thumb{background-color:var(--black)}.scroll-box.svelte-1y0kbnv.svelte-1y0kbnv::-webkit-scrollbar-track{background-color:transparent}@media only screen and (max-width: 768px){.latest-posts.svelte-1y0kbnv.svelte-1y0kbnv{width:auto}.latest-posts.style-card.svelte-1y0kbnv.svelte-1y0kbnv{border:none;padding:0;margin-top:0}.latest-posts.style-card.svelte-1y0kbnv .scroll-box.svelte-1y0kbnv{margin:0;padding:1.5rem var(--scrollbar-width) 1.5rem 0}}",
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
  return `<div class="${"latest-posts " + escape(accent) + " style-" + escape(style) + " svelte-1y0kbnv"}"><div class="${"scroll-box " + escape(height) + " " + escape(accent) + " svelte-1y0kbnv"}">${slots.default ? slots.default({}) : ``}</div>
</div>`;
});
export { Flex2Col as F, ScrollBox as S };
