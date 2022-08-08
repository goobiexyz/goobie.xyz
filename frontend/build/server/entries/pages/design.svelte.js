import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index-3ede4686.js";
import { P as Page, S as Section } from "../../chunks/Page-7d422ec7.js";
var design_svelte_svelte_type_style_lang = "";
const css = {
  code: ".image-col.svelte-1hjwa6d.svelte-1hjwa6d{display:grid;grid-template-columns:fit-content(300px) fit-content(300px) fit-content(300px);grid-row-gap:var(--double-margin);grid-column-gap:var(--double-margin);justify-content:center;align-items:center;justify-items:center}.image-col.svelte-1hjwa6d img.svelte-1hjwa6d{max-width:100%}.image-col.svelte-1hjwa6d .wide.svelte-1hjwa6d{grid-column:span 3}.image-col.svelte-1hjwa6d .wide-2.svelte-1hjwa6d{grid-column:span 2}.image-col.svelte-1hjwa6d .tall.svelte-1hjwa6d{grid-row:span 2}@media only screen and (max-width: 900px){.image-col.svelte-1hjwa6d.svelte-1hjwa6d{grid-row-gap:var(--margin);grid-column-gap:var(--margin)}}@media only screen and (max-width: 600px){.image-col.svelte-1hjwa6d.svelte-1hjwa6d{grid-template-columns:100%}.image-col.svelte-1hjwa6d .wide.svelte-1hjwa6d,.image-col.svelte-1hjwa6d .wide-2.svelte-1hjwa6d,.image-col.svelte-1hjwa6d .tall.svelte-1hjwa6d{grid-row:span 1;grid-column:span 1}}",
  map: null
};
let imgDir = "/images/design_portfolio/";
const Design = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Design" }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { simple: "true" }, {}, {
        default: () => {
          return `<p>Graphic Design is something that I have always found to be really engaging, to think about art in a functional way and utilize the principles of design to enhance the information being conveyed, something that text alone cannot do. I&#39;ve selected a number of designs from my freelance work that showcase my substantial experience and versatility as a designer.</p>`;
        }
      })}
  ${validate_component(Section, "Dfs.Section").$$render($$result, { heading: "Portfolio", simple: "true" }, {}, {
        default: () => {
          return `<div class="${"image-col svelte-1hjwa6d"}"><img src="${escape(imgDir) + "bubblebot_logo.jpg"}" alt="${""}" class="${"wide svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "gbell_icon.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "rute_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "gooden_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "pv_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "cloud_castle_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "belgium_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "gracie bell_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "buffalofish_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "shortcake_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "acr_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "bread momma_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "friend hunters_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "momo_banner.jpg"}" alt="${""}" class="${"wide svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "chocolate_liquor.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "amy_logo.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "Halo cover art.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "bday card.jpg"}" alt="${""}" class="${"wide svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "bread momma candy.jpg"}" alt="${""}" class="${"tall wide-2 svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "ivory spread.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "Kawaii face_void eon.jpg"}" alt="${""}" class="${"svelte-1hjwa6d"}">
      <img src="${escape(imgDir) + "goo resort.jpg"}" alt="${""}" class="${"wide svelte-1hjwa6d"}"></div>`;
        }
      })}`;
    }
  })}`;
});
export { Design as default };
