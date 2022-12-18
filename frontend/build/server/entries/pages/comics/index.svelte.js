import { c as create_ssr_component, v as validate_component, d as each, e as escape } from "../../../chunks/index-3ede4686.js";
import { a as apiFetch } from "../../../chunks/apiFetch-1e72d496.js";
import { P as Page, S as Section } from "../../../chunks/Page-65c0d5b3.js";
import { c as convertDate } from "../../../chunks/convert-date-64d95c73.js";
import { I as Image } from "../../../chunks/Image-de277fa9.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".comics-gallery.svelte-tcymvp.svelte-tcymvp{list-style:none;display:grid;grid-template-columns:repeat(3, 1fr);grid-gap:var(--margin)}.comics-gallery.svelte-tcymvp a.svelte-tcymvp,.comics-gallery.svelte-tcymvp a.svelte-tcymvp:hover{text-decoration:none}.comics-gallery.svelte-tcymvp a.svelte-tcymvp{color:inherit;display:grid;gap:0.5rem}.comic-name.svelte-tcymvp.svelte-tcymvp{font-weight:bold;font-size:large}.info.svelte-tcymvp.svelte-tcymvp{font-size:0.75rem;display:grid}.latest-release.svelte-tcymvp.svelte-tcymvp{color:lightslategray}time.svelte-tcymvp.svelte-tcymvp{font-family:monospace;font-size:0.75rem}@media only screen and (max-width: 600px){.comics-gallery.svelte-tcymvp.svelte-tcymvp{grid-template-columns:1fr 1fr;gap:calc(var(--margin)*1.5)}.info.svelte-tcymvp.svelte-tcymvp{font-size:1rem;gap:0.4rem}time.svelte-tcymvp.svelte-tcymvp{font-size:1rem}}",
  map: null
};
async function load() {
  let apiResponse = [];
  let comics = [];
  let thumbnailUrls = [];
  let props = { comicDataList: [] };
  apiResponse = await apiFetch("comics", "populate[comic_chapters][sort][1]=release_date:desc");
  if (apiResponse != null) {
    comics = apiResponse;
  }
  apiResponse = await apiFetch("comics", "populate[thumbnail][fields][0]=url");
  if (apiResponse != null) {
    thumbnailUrls = apiResponse.map((comic) => {
      return comic.attributes.thumbnail.data.attributes.url;
    });
  }
  props.comicDataList = comics.map((comic, i) => {
    return {
      title: comic.attributes.title,
      thumbnailUrl: thumbnailUrls[i],
      latestRelease: comic.attributes.comic_chapters.data[0].attributes.release_date,
      type: comic.attributes.type,
      url: comic.attributes.url
    };
  }).sort((a, b) => a.latestRelease < b.latestRelease ? 1 : -1);
  return { props };
}
const Comics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { comicDataList } = $$props;
  if ($$props.comicDataList === void 0 && $$bindings.comicDataList && comicDataList !== void 0)
    $$bindings.comicDataList(comicDataList);
  $$result.css.add(css);
  return `${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Comics" }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { heading: "", simple: "true" }, {}, {
        default: () => {
          return `<ul class="${"comics-gallery svelte-tcymvp"}">${each(comicDataList, (comicData) => {
            return `<li><a href="${"/comics/" + escape(comicData.url)}" class="${"svelte-tcymvp"}">${validate_component(Image, "Image").$$render($$result, {
              src: "https://api.graciebell.art" + comicData.thumbnailUrl,
              alt: "",
              lazy: true,
              style: "width:100%;border-radius:var(--rounded-1);"
            }, {}, {})}

            <p class="${"comic-name svelte-tcymvp"}">${escape(comicData.title)}</p>

            <div class="${"info svelte-tcymvp"}"><p class="${"comic-type"}">${comicData.type == "single_volume" ? `Single-Volume` : `${comicData.type == "multi_volume" ? `Multi-Volume` : `${comicData.type == "strip" ? `Comic Strip` : ``}`}`}</p>

              <p class="${"latest-release svelte-tcymvp"}">${comicData.type != "single_volume" ? `<span style="${"display:inline-block"}">Latest:</span>` : ``}
                <time style="${"display:inline-block"}" class="${"svelte-tcymvp"}">${escape(convertDate(comicData.latestRelease))}</time></p>
            </div></a>
        </li>`;
          })}</ul>`;
        }
      })}`;
    }
  })}`;
});
export { Comics as default, load };
