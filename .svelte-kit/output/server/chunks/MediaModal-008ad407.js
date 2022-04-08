import { c as create_ssr_component, b as createEventDispatcher, a as add_attribute, v as validate_component, e as escape } from "./index-bbc75d3b.js";
/* empty css                                                  */import { c as convertDate } from "./convert-date-825a956c.js";
import { S as SvelteMarkdown } from "./SvelteMarkdown-bfd616a7.js";
import { I as IconButton } from "./Page-3fef82e1.js";
var Image_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "img.svelte-lcj22s{opacity:0;transition:opacity 0.1s ease-out;display:block;max-width:100%;max-height:calc(100vh - 2 * 1.5rem)}img.loaded.svelte-lcj22s{opacity:1}",
  map: null
};
const Image = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt = "" } = $$props;
  createEventDispatcher();
  let thisImage = {};
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  $$result.css.add(css$6);
  return `<img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)} loading="${"lazy"}" class="${["svelte-lcj22s", ""].join(" ").trim()}"${add_attribute("this", thisImage, 0)}>`;
});
const css$5 = {
  code: "div.svelte-18bdprs >*:not(:first-child){margin-top:1.5rem}",
  map: null
};
const SpacedDiv = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$5);
  return `<div class="${"svelte-18bdprs"}">${slots.default ? slots.default({}) : ``}</div>`;
});
var BlogPost_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: 'article.svelte-zeox3o{background:white;border-radius:20px;width:768px;max-height:calc(100vh - 2 * 1.5rem);overflow:hidden;display:flex;flex-direction:column}.article-body.svelte-zeox3o{overflow-y:scroll;padding:1.5rem;--scrollbar-width:12px;scrollbar-width:var(--scrollbar-width);--mask-height:1.5rem;--mask-image-content:linear-gradient(\n      to bottom,\n      transparent,\n      black var(--mask-height),\n      black calc(100% - var(--mask-height)),\n      transparent\n  );--mask-size-content:calc(100% - var(--scrollbar-width)) 100%;--mask-image-scrollbar:linear-gradient(black, black);--mask-size-scrollbar:var(--scrollbar-width) 100%;mask-image:var(--mask-image-content), var(--mask-image-scrollbar);mask-size:var(--mask-size-content), var(--mask-size-scrollbar);mask-position:0 0, 100% 0;mask-repeat:no-repeat, no-repeat}header.svelte-zeox3o{border-bottom:1px dashed var(--black);padding-bottom:calc(1.5rem / 2)}h1.svelte-zeox3o{font-family:"urbane-bold";font-size:1.9rem}article.svelte-zeox3o h2{font-size:1.25rem}time.svelte-zeox3o{margin-top:8px;font-family:monospace;font-size:0.95rem}@media only screen and (max-width: 768px){article.svelte-zeox3o{width:auto}}',
  map: null
};
const BlogPost = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { meta } = $$props;
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  $$result.css.add(css$4);
  return `<article class="${"svelte-zeox3o"}"><div class="${"article-body svelte-zeox3o"}">${validate_component(SpacedDiv, "SpacedDiv").$$render($$result, {}, {}, {
    default: () => {
      return `<header class="${"svelte-zeox3o"}"><h1 class="${"svelte-zeox3o"}">${escape(meta.title)}</h1>
      <time${add_attribute("datetime", meta.date, 0)} class="${"svelte-zeox3o"}">${escape(convertDate(meta.date))}</time></header>

      ${validate_component(SvelteMarkdown, "SvelteMarkdown").$$render($$result, { source: meta.blog_body }, {}, {})}`;
    }
  })}</div>
</article>`;
});
var VideoCard_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".card.svelte-1ydym90{display:block;background:white;border-radius:20px;padding:calc(1.5rem / 2);font-size:0;width:calc(100vw - calc(1.5rem * 2));max-width:768px;transition:0.5s opacity}.card.hide.svelte-1ydym90{opacity:0}iframe.svelte-1ydym90{border-radius:10px;aspect-ratio:16/9;width:100%}",
  map: null
};
const VideoCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { videoID } = $$props;
  if ($$props.videoID === void 0 && $$bindings.videoID && videoID !== void 0)
    $$bindings.videoID(videoID);
  $$result.css.add(css$3);
  return `<div class="${"card " + escape("hide") + " svelte-1ydym90"}"><iframe src="${"https://www.youtube-nocookie.com/embed/" + escape(videoID)}" title="${"YouTube video player"}" frameborder="${"0"}" allow="${"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"}" allowfullscreen class="${"svelte-1ydym90"}"></iframe>
</div>`;
});
var MusicCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".card.svelte-1cl9i9n{background:white;border-radius:20px;padding:calc(1.5rem / 2);width:360px;display:grid;grid-auto-flow:column;grid-template-columns:50px 1fr;grid-template-rows:auto auto;grid-row-gap:calc(1.5rem / 2);transition:0.25s opacity}.card.hide.svelte-1cl9i9n{opacity:0}.cover.svelte-1cl9i9n{grid-column:span 2;width:100%;background:red;border-radius:10px}",
  map: null
};
const MusicCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { meta } = $$props;
  let cover = "/api" + meta.thumbnail.data.attributes.url;
  if ($$props.meta === void 0 && $$bindings.meta && meta !== void 0)
    $$bindings.meta(meta);
  $$result.css.add(css$2);
  return `${$$result.head += `<script src="${"https://unpkg.com/wavesurfer.js"}" data-svelte="svelte-okxju7"><\/script>`, ""}



<div class="${"card " + escape("hide") + " svelte-1cl9i9n"}"><img class="${"cover svelte-1cl9i9n"}"${add_attribute("src", cover, 0)} alt="${""}">
  <button>Play</button>
  <div id="${"waveform"}"></div>
</div>`;
});
var ModalContent_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".content.svelte-xjgstc{display:inline-block}",
  map: null
};
const ModalContent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let type = post.attributes.media_type;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `<div class="${"content svelte-xjgstc"}">${type == "art" ? `${validate_component(Image, "Image").$$render($$result, {
    src: "/api" + post.attributes.media_file.data.attributes.formats.medium.url
  }, {}, {})}` : `${type == "blog" ? `${validate_component(BlogPost, "BlogPost").$$render($$result, { meta: post.attributes }, {}, {})}` : `${type == "video" ? `${validate_component(VideoCard, "VideoCard").$$render($$result, { videoID: post.attributes.video_id }, {}, {})}` : `${type == "music" ? `${validate_component(MusicCard, "MusicCard").$$render($$result, { meta: post.attributes }, {}, {})}` : ``}`}`}`}
</div>`;
});
var MediaModal_svelte_svelte_type_style_lang = "";
const css = {
  code: '.modal.svelte-1slx9uh.svelte-1slx9uh{position:fixed;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.75);z-index:100;opacity:0;pointer-events:none;transition:opacity 0.25s}.modal.open.svelte-1slx9uh.svelte-1slx9uh{opacity:1;pointer-events:auto}.modal-controls.svelte-1slx9uh.svelte-1slx9uh,.modal-caption.svelte-1slx9uh.svelte-1slx9uh{z-index:200;opacity:1;transition:0.1s opacity}.modal-controls.hide.svelte-1slx9uh.svelte-1slx9uh,.modal-caption.hide.svelte-1slx9uh.svelte-1slx9uh{opacity:0;pointer-events:none}.modal-controls.svelte-1slx9uh.svelte-1slx9uh{position:absolute;top:calc(1.5rem / 2);right:calc(1.5rem / 2)}.modal-caption.svelte-1slx9uh.svelte-1slx9uh{position:absolute;bottom:0;background:rgba(0, 0, 0, 0.8);width:100%;padding:calc(1.5rem / 2);color:white}.modal-caption.svelte-1slx9uh .modal-title.svelte-1slx9uh{font-family:"urbane-bold";font-size:1.4rem;display:block}.modal-caption.svelte-1slx9uh time.svelte-1slx9uh{display:block;font-family:mono;margin-top:6px;font-size:0.9rem}.modal-body.svelte-1slx9uh.svelte-1slx9uh{display:flex;justify-content:center;align-items:center;width:100%;height:100%}.modal-body.svelte-1slx9uh >*{margin:1.5rem;z-index:150}@keyframes svelte-1slx9uh-loading-icon-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.loading-icon.svelte-1slx9uh.svelte-1slx9uh{z-index:300;width:4rem;height:4rem;pointer-events:none;position:fixed;left:50%;top:50%;margin-top:-2rem;margin-left:-2rem;animation:svelte-1slx9uh-loading-icon-spin 2s linear infinite;opacity:1;transition:opacity 0.1s}.loading-icon.loaded.svelte-1slx9uh.svelte-1slx9uh{opacity:0}.out-click-zone.svelte-1slx9uh.svelte-1slx9uh{position:absolute;height:100vh;width:100vw;z-index:125}',
  map: null
};
const MediaModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let open = false;
  let loaded = false;
  let showControls = true;
  let post = {};
  let body;
  function openModal(p) {
    open = true;
    showControls = true;
    loaded = false;
    post = p;
    body.style.overflow = "hidden";
  }
  function closeModal() {
    open = false;
    body.style.overflow = "auto";
  }
  if ($$props.openModal === void 0 && $$bindings.openModal && openModal !== void 0)
    $$bindings.openModal(openModal);
  if ($$props.closeModal === void 0 && $$bindings.closeModal && closeModal !== void 0)
    $$bindings.closeModal(closeModal);
  $$result.css.add(css);
  return `<div class="${["modal svelte-1slx9uh", open ? "open" : ""].join(" ").trim()}"><div class="${"modal-controls " + escape(showControls ? "" : "hide") + " svelte-1slx9uh"}">${validate_component(IconButton, "IconButton").$$render($$result, {
    type: "back-circle",
    title: "Back",
    size: "big"
  }, {}, {})}
    </div>

  ${open ? `${post.attributes.media_type == "art" ? `<div class="${"modal-caption " + escape(showControls ? "" : "hide") + " svelte-1slx9uh"}"><span class="${"modal-title svelte-1slx9uh"}">${escape(post.attributes.title)}</span>
        <time${add_attribute("datetime", post.attributes.date, 0)} class="${"svelte-1slx9uh"}">${escape(convertDate(post.attributes.date))}</time></div>` : ``}` : ``}

  <img class="${["loading-icon svelte-1slx9uh", loaded ? "loaded" : ""].join(" ").trim()}" src="${"/images/icons/loading.svg"}" alt="${"Loading"}">

  <div class="${"modal-body svelte-1slx9uh"}">${open ? `${validate_component(ModalContent, "ModalContent").$$render($$result, { post }, {}, {})}` : ``}
    <div class="${"out-click-zone svelte-1slx9uh"}"></div></div>


</div>`;
});
export { MediaModal as M, SpacedDiv as S };
