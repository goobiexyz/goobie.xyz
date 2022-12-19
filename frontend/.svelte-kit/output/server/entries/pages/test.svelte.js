import { c as create_ssr_component, v as validate_component } from "../../chunks/index-3ede4686.js";
import { P as Page, S as Section } from "../../chunks/Page-481419e6.js";
import { B as Box } from "../../chunks/Box-7abaf6cf.js";
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
