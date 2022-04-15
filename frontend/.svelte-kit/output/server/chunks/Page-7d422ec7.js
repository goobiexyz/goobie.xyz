import { c as create_ssr_component, f as add_attribute, e as escape, v as validate_component } from "./index-3ede4686.js";
var Section_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "@-webkit-keyframes svelte-i1xj0v-scroll{100%{background-position-x:-60px}}@keyframes svelte-i1xj0v-scroll{100%{background-position-x:-60px}}@-webkit-keyframes svelte-i1xj0v-bouncy{50%{background-position-y:-80px\n    }}@keyframes svelte-i1xj0v-bouncy{50%{background-position-y:-80px\n    }}section.svelte-i1xj0v.svelte-i1xj0v{overflow:auto;padding:calc(var(--margin)*4) 0}section.simple.svelte-i1xj0v.svelte-i1xj0v{padding:var(--double-margin) 0}section.bg-blue-stripes.svelte-i1xj0v.svelte-i1xj0v{background:url('/images/backgrounds/blue_stripes.png') repeat;background-attachment:fixed;-webkit-animation:1s svelte-i1xj0v-scroll infinite linear;animation:1s svelte-i1xj0v-scroll infinite linear}section.bg-gracie.svelte-i1xj0v.svelte-i1xj0v{background:url('/images/backgrounds/gracie-pattern.png');background-attachment:fixed;-webkit-animation:2s svelte-i1xj0v-scroll infinite linear, 5s svelte-i1xj0v-bouncy infinite ease-in-out;animation:2s svelte-i1xj0v-scroll infinite linear, 5s svelte-i1xj0v-bouncy infinite ease-in-out}section.top-border-clouds.svelte-i1xj0v.svelte-i1xj0v{border-image-source:url('/images/borders/clouds.svg');border-top:3rem solid;border-image-slice:100% 0 0 0;border-image-repeat:repeat;border-image-outset:2px}.section-heading.svelte-i1xj0v.svelte-i1xj0v{font-size:2.5rem;font-weight:normal;font-family:'freude';text-align:center}.section-heading.blue.svelte-i1xj0v.svelte-i1xj0v{color:var(--dark-blue)}.section-heading.white.svelte-i1xj0v.svelte-i1xj0v{color:white}.section-heading.svelte-i1xj0v.svelte-i1xj0v{display:table;width:100%}.section-heading.svelte-i1xj0v>span.svelte-i1xj0v,.section-heading.svelte-i1xj0v.svelte-i1xj0v:before,.section-heading.svelte-i1xj0v.svelte-i1xj0v:after{display:table-cell}.section-heading.blue.svelte-i1xj0v.svelte-i1xj0v:before,.section-heading.blue.svelte-i1xj0v.svelte-i1xj0v:after{background:var(--blue)}.section-heading.white.svelte-i1xj0v.svelte-i1xj0v:before,.section-heading.white.svelte-i1xj0v.svelte-i1xj0v:after{background:white}.section-heading.black.svelte-i1xj0v.svelte-i1xj0v:before,.section-heading.black.svelte-i1xj0v.svelte-i1xj0v:after{background:var(--black)}.section-heading.svelte-i1xj0v.svelte-i1xj0v:before,.section-heading.svelte-i1xj0v.svelte-i1xj0v:after{-webkit-mask-image:url('/images/borders/blue_dot.svg');-webkit-mask-size:contain;-webkit-mask-position:center;-webkit-mask-size:10px;-webkit-mask-repeat:space no-repeat;mask-image:url('/images/borders/blue_dot.svg');mask-size:contain;mask-position:center;mask-size:10px;mask-repeat:space no-repeat;width:50%;content:' '}.section-heading.svelte-i1xj0v>span.svelte-i1xj0v{white-space:nowrap;padding:0 9px}.section-contents.svelte-i1xj0v.svelte-i1xj0v{padding:0 var(--margin);margin:auto;width:calc(var(--m) - var(--double-margin))}section.svelte-i1xj0v .section-body.spacing-normal.svelte-i1xj0v >*{margin-top:var(--margin) }section.svelte-i1xj0v .section-body.spacing-double.svelte-i1xj0v >*{margin-top:var(--double-margin) }section.no-heading.svelte-i1xj0v .section-body.svelte-i1xj0v >*:first-child{margin-top:0}@media only screen and (max-width: 900px){.section-contents.svelte-i1xj0v.svelte-i1xj0v{width:calc(var(--s) - var(--double-margin))}}@media only screen and (max-width: 768px){section.svelte-i1xj0v.svelte-i1xj0v{padding:calc(var(--margin)*3) 0}.section-contents.svelte-i1xj0v.svelte-i1xj0v{width:calc(var(--ss) - var(--double-margin))}}@media only screen and (max-width: 600px){section.svelte-i1xj0v.svelte-i1xj0v{padding:var(--margin) 0}.section-contents.svelte-i1xj0v.svelte-i1xj0v{width:auto}}",
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
    "bg-" + escape(bg) + " top-border-" + escape(topBorder) + " svelte-i1xj0v",
    (simple ? "simple" : "") + " " + (!heading ? "no-heading" : "")
  ].join(" ").trim()}"><div class="${"section-contents svelte-i1xj0v"}">${heading ? `<h2 class="${"section-heading " + escape(headingColor) + " svelte-i1xj0v"}"><span class="${"svelte-i1xj0v"}">${escape(heading)}</span></h2>` : ``}
    <div class="${"section-body spacing-" + escape(spacing) + " svelte-i1xj0v"}">${slots.default ? slots.default({}) : ``}</div></div>
</section>`;
});
var IconButton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-2j1as8:hover{transform:scale(1.2)}button.svelte-2j1as8:active{transform:scale(1)}button.svelte-2j1as8{transition:transform 0.1s;display:block;position:relative;width:2rem;height:2rem}button.medium.svelte-2j1as8{width:3rem;height:3rem}button.big.svelte-2j1as8{width:4rem;height:4rem}button.svelte-2j1as8{border:none;padding:0;margin:0;-webkit-mask-size:contain;-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;mask-size:contain;mask-position:center;mask-repeat:no-repeat;background:var(--color)}button.logo.svelte-2j1as8{mask-image:url('/images/icons/b_logo.svg');-webkit-mask-image:url('/images/icons/b_logo.svg')}button.twitter.svelte-2j1as8{mask-image:url('/images/icons/b_twitter.svg');-webkit-mask-image:url('/images/icons/b_twitter.svg')}button.youtube.svelte-2j1as8{mask-image:url('/images/icons/b_youtube.svg');-webkit-mask-image:url('/images/icons/b_youtube.svg')}button.soundcloud.svelte-2j1as8{mask-image:url('/images/icons/b_soundcloud.svg');-webkit-mask-image:url('/images/icons/b_soundcloud.svg')}button.github.svelte-2j1as8{mask-image:url('/images/icons/b_github.svg');-webkit-mask-image:url('/images/icons/b_github.svg')}button.close.svelte-2j1as8{mask-image:url('/images/icons/b_close.svg');-webkit-mask-image:url('/images/icons/b_close.svg')}button.right-arrow.svelte-2j1as8{mask-image:url('/images/icons/b_arrow_r.svg');-webkit-mask-image:url('/images/icons/b_arrow_r.svg')}button.left-arrow.svelte-2j1as8{mask-image:url('/images/icons/b_arrow_l.svg');-webkit-mask-image:url('/images/icons/b_arrow_l.svg')}button.back-circle.svelte-2j1as8{background:none;background-image:url('/images/icons/b_back_circle.svg')}",
  map: null
};
const IconButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { size = "" } = $$props;
  let { title } = $$props;
  let { color: color2 = "white" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.color === void 0 && $$bindings.color && color2 !== void 0)
    $$bindings.color(color2);
  $$result.css.add(css$2);
  return `<button class="${escape(type) + " " + escape(size) + " svelte-2j1as8"}" style="${"--color: " + escape(color2) + ";"}"${add_attribute("title", title, 0)}></button>`;
});
const IconLink = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { type } = $$props;
  let { size } = $$props;
  let { color: color2 } = $$props;
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
  if ($$props.color === void 0 && $$bindings.color && color2 !== void 0)
    $$bindings.color(color2);
  return `<a${add_attribute("title", title, 0)}${add_attribute("href", location, 0)}>${validate_component(IconButton, "IconButton").$$render($$result, { type, size, color: color2 }, {}, {})}</a>`;
});
var Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1kxjoq3{display:flex;justify-content:center;padding:var(--margin);height:var(--footer-height);position:absolute;bottom:0;width:100%;background-color:var(--black)}footer.svelte-1kxjoq3 >*{margin:0 var(--half-margin)}",
  map: null
};
let color = "white";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-1kxjoq3"}">${validate_component(IconLink, "IconLink").$$render($$result, { type: "twitter", color }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "youtube", color }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "soundcloud", color }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "github", color }, {}, {})}
</footer>`;
});
var Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "header.svelte-1c95d3m{background:var(--pink);padding:var(--margin);padding-bottom:var(--half-margin);border-bottom:5rem solid;-o-border-image:url('/images/borders/benday_pink.svg');border-image:url('/images/borders/benday_pink.svg');border-image-slice:0 0 100% 0;border-image-repeat:repeat;border-image-outset:-2px;background-clip:padding-box}header.svelte-1c95d3m >a{position:absolute}h1.svelte-1c95d3m{color:white;font-size:2.6rem;text-align:center;font-family:'urbane-bold';font-weight:normal}@media only screen and (max-width: 768px){h1.svelte-1c95d3m{font-size:2rem;line-height:1.4}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="${"svelte-1c95d3m"}">${validate_component(IconLink, "IconLink").$$render($$result, {
    type: "logo",
    size: "medium",
    color: "white"
  }, {}, {})}
  <h1 class="${"svelte-1c95d3m"}">${slots.default ? slots.default({}) : ``}</h1>
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
