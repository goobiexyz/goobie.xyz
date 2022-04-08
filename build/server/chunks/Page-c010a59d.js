import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "./index-1c4ec740.js";
var styles = "";
var Section_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '@keyframes s-gWEnQYc41sf5-scroll{100%{background-position-x:-60px}}section.s-gWEnQYc41sf5.s-gWEnQYc41sf5{overflow:auto;padding:calc(1.5rem * 4) 0}section.simple.s-gWEnQYc41sf5.s-gWEnQYc41sf5{padding:calc(1.5rem * 2) 0}section.bg-blue-stripes.s-gWEnQYc41sf5.s-gWEnQYc41sf5{background:url("/images/backgrounds/blue_stripes.png") repeat;background-attachment:fixed;animation:1s s-gWEnQYc41sf5-scroll infinite linear}section.top-border-clouds.s-gWEnQYc41sf5.s-gWEnQYc41sf5{border-image-source:url("/images/borders/clouds.svg");border-top:3rem solid;border-image-slice:100% 0 0 0;border-image-repeat:repeat;border-image-outset:2px}.section-heading.s-gWEnQYc41sf5.s-gWEnQYc41sf5{font-size:2.5rem;font-weight:normal;font-family:"freude";text-align:center;display:table;width:100%}.section-heading.blue.s-gWEnQYc41sf5.s-gWEnQYc41sf5{color:var(--dark-blue)}.section-heading.white.s-gWEnQYc41sf5.s-gWEnQYc41sf5{color:white}.section-heading.s-gWEnQYc41sf5>span.s-gWEnQYc41sf5,.section-heading.s-gWEnQYc41sf5.s-gWEnQYc41sf5:before,.section-heading.s-gWEnQYc41sf5.s-gWEnQYc41sf5:after{display:table-cell}.section-heading.blue.s-gWEnQYc41sf5.s-gWEnQYc41sf5:before,.section-heading.blue.s-gWEnQYc41sf5.s-gWEnQYc41sf5:after{background:var(--blue)}.section-heading.white.s-gWEnQYc41sf5.s-gWEnQYc41sf5:before,.section-heading.white.s-gWEnQYc41sf5.s-gWEnQYc41sf5:after{background:white}.section-heading.black.s-gWEnQYc41sf5.s-gWEnQYc41sf5:before,.section-heading.black.s-gWEnQYc41sf5.s-gWEnQYc41sf5:after{background:var(--black)}.section-heading.s-gWEnQYc41sf5.s-gWEnQYc41sf5:before,.section-heading.s-gWEnQYc41sf5.s-gWEnQYc41sf5:after{mask-image:url("/images/borders/blue_dot.svg");mask-size:contain;mask-position:center;mask-size:10px;mask-repeat:space no-repeat;width:50%;content:" "}.section-heading.s-gWEnQYc41sf5>span.s-gWEnQYc41sf5{white-space:nowrap;padding:0 9px}.section-contents.s-gWEnQYc41sf5.s-gWEnQYc41sf5{padding:0 1.5rem;margin:auto;width:calc(900px - calc(1.5rem * 2))}section.s-gWEnQYc41sf5 .section-body.spacing-normal.s-gWEnQYc41sf5 >*{margin-top:1.5rem}section.s-gWEnQYc41sf5 .section-body.spacing-double.s-gWEnQYc41sf5 >*{margin-top:calc(1.5rem * 2)}section.no-heading.s-gWEnQYc41sf5 .section-body.s-gWEnQYc41sf5 >*:first-child{margin-top:0}@media only screen and (max-width: 900px){.section-contents.s-gWEnQYc41sf5.s-gWEnQYc41sf5{width:calc(768px - calc(1.5rem * 2))}}@media only screen and (max-width: 768px){section.s-gWEnQYc41sf5.s-gWEnQYc41sf5{padding:calc(1.5rem * 3) 0}.section-contents.s-gWEnQYc41sf5.s-gWEnQYc41sf5{width:calc(600px - calc(1.5rem * 2))}}@media only screen and (max-width: 600px){section.s-gWEnQYc41sf5.s-gWEnQYc41sf5{padding:1.5rem 0}.section-contents.s-gWEnQYc41sf5.s-gWEnQYc41sf5{width:auto}}.s-gWEnQYc41sf5.s-gWEnQYc41sf5{}',
  map: null
};
const Section = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = "" } = $$props;
  let { heading = "" } = $$props;
  let { bg = "none" } = $$props;
  let { topBorder = "none" } = $$props;
  let { headingColor = "black" } = $$props;
  let { simple = false } = $$props;
  let { spacing = "normal" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.topBorder === void 0 && $$bindings.topBorder && topBorder !== void 0)
    $$bindings.topBorder(topBorder);
  if ($$props.headingColor === void 0 && $$bindings.headingColor && headingColor !== void 0)
    $$bindings.headingColor(headingColor);
  if ($$props.simple === void 0 && $$bindings.simple && simple !== void 0)
    $$bindings.simple(simple);
  if ($$props.spacing === void 0 && $$bindings.spacing && spacing !== void 0)
    $$bindings.spacing(spacing);
  $$result.css.add(css$3);
  return `<section${add_attribute("id", id, 0)} class="${[
    "bg-" + escape(bg) + " top-border-" + escape(topBorder) + " s-gWEnQYc41sf5",
    (simple ? "simple" : "") + " " + (!heading ? "no-heading" : "")
  ].join(" ").trim()}"><div class="${"section-contents s-gWEnQYc41sf5"}">${heading ? `<h2 class="${"section-heading " + escape(headingColor) + " s-gWEnQYc41sf5"}"><span class="${"s-gWEnQYc41sf5"}">${escape(heading)}</span></h2>` : ``}
    <div class="${"section-body spacing-" + escape(spacing) + " s-gWEnQYc41sf5"}">${slots.default ? slots.default({}) : ``}</div></div>
</section>`;
});
var IconButton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: 'button.s-xXoPgPMs7mmf{transition:transform 0.1s;display:block;position:relative;width:2rem;height:2rem;border:none;padding:0;margin:0;mask-size:contain;mask-position:center;mask-repeat:no-repeat}button.s-xXoPgPMs7mmf:hover{transform:scale(1.2)}button.s-xXoPgPMs7mmf:active{transform:scale(1)}button.big.s-xXoPgPMs7mmf{width:3rem;height:3rem}button.white.s-xXoPgPMs7mmf{background:white}button.dark-blue.s-xXoPgPMs7mmf{background:var(--dark-blue)}button.logo.s-xXoPgPMs7mmf{mask-image:url("/images/icons/b_logo.svg")}button.twitter.s-xXoPgPMs7mmf{mask-image:url("/images/icons/b_twitter.svg")}button.youtube.s-xXoPgPMs7mmf{mask-image:url("/images/icons/b_youtube.svg")}button.soundcloud.s-xXoPgPMs7mmf{mask-image:url("/images/icons/b_soundcloud.svg")}button.github.s-xXoPgPMs7mmf{mask-image:url("/images/icons/b_github.svg")}button.close.s-xXoPgPMs7mmf{mask-image:url("/images/icons/b_close.svg")}button.right-arrow.s-xXoPgPMs7mmf,button.left-arrow.s-xXoPgPMs7mmf{mask-image:url("/images/icons/b_arrow.svg")}button.left-arrow.s-xXoPgPMs7mmf{transform:scaleX(-1)}.s-xXoPgPMs7mmf{}',
  map: null
};
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { size = "" } = $$props;
  let { title } = $$props;
  let { color = "white" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  $$result.css.add(css$2);
  return `<button class="${escape(type) + " " + escape(size) + " " + escape(color) + " s-xXoPgPMs7mmf"}"${add_attribute("title", title, 0)}></button>`;
});
const IconLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { size } = $$props;
  let title = "";
  let location = "";
  switch (type) {
    case "logo":
      title = "Home";
      location = "/";
      break;
    case "twitter":
      title = "Twitter";
      location = "https://twitter.com/gracieart";
      break;
    case "youtube":
      title = "YouTube";
      location = "https://youtube.com/graciebell";
      break;
    case "soundcloud":
      title = "SoundCloud";
      location = "https://soundcloud.com/gracieart";
      break;
    case "github":
      title = "GitHub";
      location = "https://github.com/gracieart";
      break;
  }
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  return `<a${add_attribute("title", title, 0)}${add_attribute("href", location, 0)}>${validate_component(IconButton, "IconButton").$$render($$result, { type, size }, {}, {})}</a>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.s-eRqWb82tdAWO{display:flex;justify-content:center;padding:1.5rem;position:absolute;bottom:0;width:100%;background-color:var(--black)}footer.s-eRqWb82tdAWO >*{margin:0 calc(1.5rem / 2)}.s-eRqWb82tdAWO{}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"s-eRqWb82tdAWO"}">${validate_component(IconLink, "IconLink").$$render($$result, { type: "twitter" }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "youtube" }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "soundcloud" }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "github" }, {}, {})}
</footer>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: 'header.s-Er8cZJvOObu7{background:var(--pink);padding:1.5rem;padding-bottom:calc(1.5rem / 2);border-bottom:5rem solid;border-image:url("/images/borders/benday_pink.svg");border-image-slice:0 0 100% 0;border-image-repeat:repeat;border-image-outset:-2px;background-clip:padding-box}header.s-Er8cZJvOObu7 >a{position:absolute}h1.s-Er8cZJvOObu7{color:white;font-size:2.6rem;text-align:center;font-family:"urbane-bold";font-weight:normal}@media only screen and (max-width: 768px){h1.s-Er8cZJvOObu7{font-size:2rem;line-height:1.4}}.s-Er8cZJvOObu7{}',
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"s-Er8cZJvOObu7"}">${validate_component(IconLink, "IconLink").$$render($$result, { type: "logo", size: "big" }, {}, {})}
  <h1 class="${"s-Er8cZJvOObu7"}">${slots.default ? slots.default({}) : ``}</h1>
</header>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title = "" } = $$props;
  let { header = true } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  return `${$$result.head += `${$$result.title = `<title>${escape(title ? title + " | " : "")}Gracie Bell</title>`, ""}<meta name="${"description"}" content="${"Multimedia artist specializing in graphic design, illustration, coding, video editing, and music composition"}" data-svelte="svelte-1vhvi7o"><meta name="${"author"}" content="${"Gracie Bell"}" data-svelte="svelte-1vhvi7o"><meta property="${"og:image"}" content="${"/images/gbell_social_image.jpg"}" data-svelte="svelte-1vhvi7o"><meta property="${"og:image:width"}" content="${"1000"}" data-svelte="svelte-1vhvi7o"><meta property="${"og:image:height"}" content="${"500"}" data-svelte="svelte-1vhvi7o"><meta property="${"og:image:type"}" content="${"image/jpg"}" data-svelte="svelte-1vhvi7o"><meta property="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1vhvi7o"><link rel="${"alternate icon"}" type="${"image/png"}" href="${"/images/favicons/favicon.png"}" data-svelte="svelte-1vhvi7o"><link rel="${"icon"}" type="${"image/svg"}" href="${"/images/favicons/favicon.svg"}" data-svelte="svelte-1vhvi7o">`, ""}

${header ? `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(title)}`;
    }
  })}` : ``}
<main>${slots.default ? slots.default({}) : ``}</main>
${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export { IconButton as I, Page as P, Section as S };
