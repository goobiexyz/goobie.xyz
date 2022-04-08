import { c as create_ssr_component, v as validate_component, e as escape } from "../../chunks/index-1c4ec740.js";
import { P as Page, S as Section } from "../../chunks/Page-c010a59d.js";
var design_svelte_svelte_type_style_lang = "";
const css = {
  code: ".image-col.s-BbqnZuslfudX.s-BbqnZuslfudX{display:grid;grid-template-columns:fit-content(300px) fit-content(300px) fit-content(300px);grid-row-gap:calc(1.5rem * 2);grid-column-gap:calc(1.5rem * 2);justify-content:center;align-items:center;justify-items:center}.image-col.s-BbqnZuslfudX img.s-BbqnZuslfudX{max-width:100%}.image-col.s-BbqnZuslfudX .wide.s-BbqnZuslfudX{grid-column:span 3}.image-col.s-BbqnZuslfudX .wide-2.s-BbqnZuslfudX{grid-column:span 2}.image-col.s-BbqnZuslfudX .tall.s-BbqnZuslfudX{grid-row:span 2}@media only screen and (max-width: 900px){.image-col.s-BbqnZuslfudX.s-BbqnZuslfudX{grid-row-gap:1.5rem;grid-column-gap:1.5rem}}@media only screen and (max-width: 600px){.image-col.s-BbqnZuslfudX.s-BbqnZuslfudX{grid-template-columns:100%}.image-col.s-BbqnZuslfudX .wide.s-BbqnZuslfudX,.image-col.s-BbqnZuslfudX .wide-2.s-BbqnZuslfudX,.image-col.s-BbqnZuslfudX .tall.s-BbqnZuslfudX{grid-row:span 1;grid-column:span 1}}.s-BbqnZuslfudX.s-BbqnZuslfudX{}",
  map: null
};
const Design = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let imgDir = "/images/design_portfolio/";
  $$result.css.add(css);
  return `${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Design" }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { simple: "true" }, {}, {
        default: () => {
          return `<p class="${"s-BbqnZuslfudX"}">Graphic Design is one of my greatest passions. It&#39;s something that I have always found to be engaging, thinking about art in a functional way and utilizing the the elements and principles of design to enhance the information being conveyed, something that text alone cannot do. In addition to the branding you find across my site, I&#39;ve selected a number of my designs from my freelance work to showcase my substantial experience and versatility as a designer.</p>`;
        }
      })}
  ${validate_component(Section, "Dfs.Section").$$render($$result, { heading: "Portfolio", simple: "true" }, {}, {
        default: () => {
          return `<div class="${"image-col s-BbqnZuslfudX"}"><img src="${escape(imgDir) + "gbell_icon.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "rute_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "gooden_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "pv_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "cloud_castle_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "belgium_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "gracie bell_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "buffalofish_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "shortcake_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "acr_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "bread momma_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "friend hunters_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "momo_banner.jpg"}" alt="${""}" class="${"wide s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "chocolate_liquor.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "amy_logo.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "Halo cover art.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "bday card.jpg"}" alt="${""}" class="${"wide s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "bread momma candy.jpg"}" alt="${""}" class="${"tall wide-2 s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "ivory spread.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "Kawaii face_void eon.jpg"}" alt="${""}" class="${"s-BbqnZuslfudX"}">
      <img src="${escape(imgDir) + "goo resort.jpg"}" alt="${""}" class="${"wide s-BbqnZuslfudX"}"></div>`;
        }
      })}`;
    }
  })}`;
});
export { Design as default };
