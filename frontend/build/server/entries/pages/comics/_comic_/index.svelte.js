import { c as create_ssr_component, v as validate_component, e as escape, d as each } from "../../../../chunks/index-3ede4686.js";
import { a as apiFetch } from "../../../../chunks/apiFetch-1e72d496.js";
import { P as Page, S as Section } from "../../../../chunks/Page-3b245b46.js";
import { F as FlexCols } from "../../../../chunks/FlexCols-9f55f005.js";
import { S as SpacedDiv } from "../../../../chunks/SpacedDiv-6bdd6ed1.js";
import { I as Image } from "../../../../chunks/Image-de277fa9.js";
import { c as convertDate } from "../../../../chunks/convert-date-64d95c73.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "ol.svelte-5rfvmw.svelte-5rfvmw{list-style:none;display:grid;grid-template-columns:repeat(3, 1fr);gap:var(--half-margin)}ol.svelte-5rfvmw a.svelte-5rfvmw{text-decoration:none;color:var(--black);display:block}ol.svelte-5rfvmw time.svelte-5rfvmw{font-family:monospace;font-size:0.75rem;color:lightslategray}.comic-title.svelte-5rfvmw.svelte-5rfvmw{font-size:xx-large;font-weight:bold}.ch-title.svelte-5rfvmw.svelte-5rfvmw{font-size:0.8rem}.col-1.svelte-5rfvmw.svelte-5rfvmw{flex:1 1 20%;display:flex;justify-content:space-evenly}.col-2.svelte-5rfvmw.svelte-5rfvmw{flex:1 1 60%;min-width:35ch}@media only screen and (max-width: 600px){.comic-title.svelte-5rfvmw.svelte-5rfvmw{font-size:x-large}.ch-title.svelte-5rfvmw.svelte-5rfvmw{font-size:1rem}ol.svelte-5rfvmw time.svelte-5rfvmw{font-size:1rem}.col-2.svelte-5rfvmw.svelte-5rfvmw{min-width:100%}ol.svelte-5rfvmw.svelte-5rfvmw{grid-template-columns:1fr}}",
  map: null
};
async function load({ params }) {
  let apiResponse = [];
  let props = { comicData: {} };
  apiResponse = await apiFetch("comics", "filters[url][$eq]=" + params.comic, "populate[0]=comic_chapters", "populate[1]=thumbnail");
  if (apiResponse != null) {
    let comic = apiResponse[0].attributes;
    props.comicData = {
      title: comic.title,
      url: comic.url,
      desc: comic.description,
      type: comic.type,
      thumbnail: comic.thumbnail.data.attributes.url,
      chapters: comic.comic_chapters.data.map((ch) => {
        return {
          index: ch.attributes.chapter_number,
          title: ch.attributes.title,
          date: ch.attributes.release_date
        };
      }).sort((a, b) => a.index > b.index ? 1 : -1)
    };
  }
  return { props };
}
const U5Bcomicu5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comicData } = $$props;
  if ($$props.comicData === void 0 && $$bindings.comicData && comicData !== void 0)
    $$bindings.comicData(comicData);
  $$result.css.add(css);
  return `${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Comics" }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { simple: "true", spacing: "double" }, {}, {
        default: () => {
          return `<a href="${"/comics"}">Comics</a>

    ${validate_component(FlexCols, "FlexCols").$$render($$result, {}, {}, {
            default: () => {
              return `<div class="${"col-1 svelte-5rfvmw"}"><div>${validate_component(Image, "Image").$$render($$result, {
                src: "https://api.graciebell.art" + comicData.thumbnail,
                style: "max-width:13.66rem; border-radius:var(--rounded-2);",
                alt: ""
              }, {}, {})}</div></div>

      <div class="${"col-2 svelte-5rfvmw"}">${validate_component(SpacedDiv, "SpacedDiv").$$render($$result, {}, {}, {
                default: () => {
                  return `<p class="${"comic-title svelte-5rfvmw"}">${escape(comicData.title)}</p>
          <p class="${"comic-desc"}">${escape(comicData.desc)}</p>`;
                }
              })}</div>`;
            }
          })}


    <div id="${"chapters"}">${validate_component(SpacedDiv, "SpacedDiv").$$render($$result, {}, {}, {
            default: () => {
              return `<h2>${comicData.type == "multi_volume" ? `Chapters` : `${comicData.type == "single_volume" ? `Single-Volume` : `${comicData.type == "strip" ? `Strips` : ``}`}`}</h2>

        <ol class="${"svelte-5rfvmw"}">${each(comicData.chapters, (chapterData) => {
                return `<li><a href="${"/comics/" + escape(comicData.url) + "/" + escape(chapterData.index)}" class="${"svelte-5rfvmw"}"><p class="${"ch-title svelte-5rfvmw"}">${escape(comicData.type == "multi_volume" ? "Ch. " + chapterData.index + " - " : "")}
                ${escape(chapterData.title)}</p>
                <p><time class="${"svelte-5rfvmw"}">${escape(convertDate(chapterData.date))}</time></p></a>
            </li>`;
              })}</ol>`;
            }
          })}</div>`;
        }
      })}`;
    }
  })}`;
});
export { U5Bcomicu5D as default, load };
