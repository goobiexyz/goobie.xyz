import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape, d as each } from "../../../../../chunks/index-3ede4686.js";
import { a as apiFetch } from "../../../../../chunks/apiFetch-1e72d496.js";
import { P as Page, S as Section } from "../../../../../chunks/Page-3b245b46.js";
import { I as Image } from "../../../../../chunks/Image-de277fa9.js";
import { p as page } from "../../../../../chunks/stores-fadc4c08.js";
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-dhxyj.svelte-dhxyj{font-size:x-large}nav.svelte-dhxyj.svelte-dhxyj{width:100%;display:grid;grid-template-columns:4.5rem 1fr 4.5rem;text-align:center;align-items:center;color:white}nav.svelte-dhxyj a.svelte-dhxyj{color:white;display:grid}nav.svelte-dhxyj a img.svelte-dhxyj{margin:auto;height:4.5rem}.back.svelte-dhxyj.svelte-dhxyj{text-align:left}@media only screen and (max-width: 768px){header.svelte-dhxyj nav.svelte-dhxyj{grid-template-columns:1fr;grid-template-rows:1fr 1fr;gap:var(--margin)\n    }}@media only screen and (max-width: 360px){header.svelte-dhxyj nav.svelte-dhxyj{gap:var(--half-margin)\n    }h1.svelte-dhxyj.svelte-dhxyj{font-size:1.1rem;text-align:left;font-weight:normal}.back.svelte-dhxyj.svelte-dhxyj{font-size:1rem}}",
  map: null
};
async function load({ params }) {
  let apiResponse = [];
  let props = { chapterData: {}, comicData: {} };
  apiResponse = await apiFetch("comic-chapters", "populate[0]=comic", "populate[1]=pages", "filters[comic][url][$eq]=" + params.comic, "filters[chapter_number][$eq]=" + params.chapter);
  if (apiResponse != null) {
    let chapter = apiResponse[0].attributes;
    props.chapterData = {
      title: chapter.title,
      index: parseInt(chapter.chapter_number),
      pageImgURLs: chapter.pages.data.map((page2) => {
        return page2.attributes.url;
      })
    };
    props.comicData = {
      title: chapter.comic.data.attributes.title,
      type: chapter.comic.data.attributes.type,
      url: chapter.comic.data.attributes.url
    };
  }
  apiResponse = await apiFetch("comic-chapters", "populate[comic][fields]=url", "filters[comic][url][$eq]=" + props.comicData.url, "sort=release_date:desc", "pagination[limit]=1");
  if (apiResponse != null) {
    props.comicData.lastChapterIndex = parseInt(apiResponse[0].attributes.chapter_number);
  }
  return { props };
}
const U5Bchapteru5D = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { chapterData } = $$props;
  let { comicData } = $$props;
  if ($$props.chapterData === void 0 && $$bindings.chapterData && chapterData !== void 0)
    $$bindings.chapterData(chapterData);
  if ($$props.comicData === void 0 && $$bindings.comicData && comicData !== void 0)
    $$bindings.comicData(comicData);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `${validate_component(Page, "Dfs.Page").$$render($$result, {
    title: chapterData.title,
    header: false,
    footer: false,
    dark: true
  }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { simple: "true", spacing: "double" }, {}, {
        default: () => {
          return `<header class="${"svelte-dhxyj"}"><nav class="${"svelte-dhxyj"}"><a class="${"back svelte-dhxyj"}" href="${"/comics/" + escape($page.params.comic)}">Chapters</a>
        <h1 style="${"color:white"}" class="${"svelte-dhxyj"}">${escape(comicData.type == "multi_volume" ? "Ch. " + chapterData.index + " - " : "")}
          ${escape(chapterData.title)}</h1></nav></header>

    ${each(chapterData.pageImgURLs, (pageImgURL) => {
            return `${validate_component(Image, "Image").$$render($$result, {
              src: "https://api.graciebell.art" + pageImgURL,
              style: "width: 100%",
              alt: "",
              lazy: true
            }, {}, {})}`;
          })}

    <footer><nav class="${"svelte-dhxyj"}">
        ${chapterData.index > 1 ? `<a sveltekit:reload href="${"/comics/" + escape($page.params.comic) + "/" + escape(chapterData.index - 1)}" class="${"svelte-dhxyj"}"><img src="${"/images/icons/b_line_arrow.svg"}" alt="${""}" class="${"svelte-dhxyj"}">
            <span>Previous</span></a>` : `
          <span></span>`}

        
        <a href="${"/comics/" + escape($page.params.comic)}" class="${"svelte-dhxyj"}"><img src="${"/images/icons/b_hamburger.svg"}" alt="${""}" class="${"svelte-dhxyj"}">
          <span>Chapters</span></a>

        
        ${comicData.lastChapterIndex != chapterData.index ? `<a sveltekit:reload href="${"/comics/" + escape($page.params.comic) + "/" + escape(chapterData.index + 1)}" class="${"svelte-dhxyj"}"><img src="${"/images/icons/b_line_arrow.svg"}" alt="${""}" style="${"transform: scaleX(-1)"}" class="${"svelte-dhxyj"}">
            <span>Next</span></a>` : ``}</nav></footer>`;
        }
      })}`;
    }
  })}`;
});
export { U5Bchapteru5D as default, load };
