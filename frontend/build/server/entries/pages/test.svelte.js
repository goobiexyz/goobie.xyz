import { c as create_ssr_component, e as escape, v as validate_component } from "../../chunks/index-bbc75d3b.js";
import { P as Page, S as Section } from "../../chunks/Page-02a8f5df.js";
const Box = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "black" } = $$props;
  let { bgColor = "white" } = $$props;
  let { borderColor = "none" } = $$props;
  let { padding = "half" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  return `<div class="${[
    "box color-" + escape(color) + " bg-color-" + escape(bgColor) + " border-color-" + escape(borderColor) + " padding-" + escape(padding) + " rounded-more",
    borderColor !== "none" ? "border" : ""
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>`;
});
const Test = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Test" }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { simple: "true" }, {}, {
        default: () => {
          return `${validate_component(Box, "Box").$$render($$result, {
            bgColor: "blue",
            color: "white",
            borderColor: "red"
          }, {}, {
            default: () => {
              return `eskajfhlksjghlkjdsfg`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Test as default };
