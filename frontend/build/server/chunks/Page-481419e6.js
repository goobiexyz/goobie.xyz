import { c as create_ssr_component, f as add_attribute, e as escape, v as validate_component } from "./index-3ede4686.js";
var Section_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "@-webkit-keyframes svelte-18sz2eh-scroll{100%{background-position-x:-60px}}@keyframes svelte-18sz2eh-scroll{100%{background-position-x:-60px}}@-webkit-keyframes svelte-18sz2eh-bouncy{50%{background-position-y:-80px\n    }}@keyframes svelte-18sz2eh-bouncy{50%{background-position-y:-80px\n    }}section.svelte-18sz2eh.svelte-18sz2eh{overflow:auto;padding:calc(var(--margin)*4) 0}section.simple.svelte-18sz2eh.svelte-18sz2eh{padding:var(--double-margin) 0}section.bg-blue-stripes.svelte-18sz2eh.svelte-18sz2eh{background:url('/images/backgrounds/blue_stripes.png') repeat;background-attachment:fixed;-webkit-animation:1s svelte-18sz2eh-scroll infinite linear;animation:1s svelte-18sz2eh-scroll infinite linear}section.bg-gracie.svelte-18sz2eh.svelte-18sz2eh{background:url('/images/backgrounds/gracie-pattern.png');background-attachment:fixed;-webkit-animation:2s svelte-18sz2eh-scroll infinite linear, 5s svelte-18sz2eh-bouncy infinite ease-in-out;animation:2s svelte-18sz2eh-scroll infinite linear, 5s svelte-18sz2eh-bouncy infinite ease-in-out}section.top-border-clouds.svelte-18sz2eh.svelte-18sz2eh{border-image-source:url('/images/borders/clouds.svg');border-top:3rem solid;border-image-slice:100% 0 0 0;border-image-repeat:repeat;border-image-outset:2px}.section-heading.svelte-18sz2eh.svelte-18sz2eh{font-size:2.5rem;font-weight:normal;font-family:'freude';text-align:center}.section-heading.blue.svelte-18sz2eh.svelte-18sz2eh{color:var(--dark-blue)}.section-heading.white.svelte-18sz2eh.svelte-18sz2eh{color:white}.section-heading.svelte-18sz2eh.svelte-18sz2eh{display:table;width:100%}.section-heading.svelte-18sz2eh>span.svelte-18sz2eh,.section-heading.svelte-18sz2eh.svelte-18sz2eh:before,.section-heading.svelte-18sz2eh.svelte-18sz2eh:after{display:table-cell}.section-heading.blue.svelte-18sz2eh.svelte-18sz2eh:before,.section-heading.blue.svelte-18sz2eh.svelte-18sz2eh:after{background:var(--blue)}.section-heading.white.svelte-18sz2eh.svelte-18sz2eh:before,.section-heading.white.svelte-18sz2eh.svelte-18sz2eh:after{background:white}.section-heading.black.svelte-18sz2eh.svelte-18sz2eh:before,.section-heading.black.svelte-18sz2eh.svelte-18sz2eh:after{background:var(--black)}.section-heading.svelte-18sz2eh.svelte-18sz2eh:before,.section-heading.svelte-18sz2eh.svelte-18sz2eh:after{-webkit-mask-image:url('/images/borders/blue_dot.svg');-webkit-mask-size:contain;-webkit-mask-position:center;-webkit-mask-size:10px;-webkit-mask-repeat:space no-repeat;mask-image:url('/images/borders/blue_dot.svg');mask-size:contain;mask-position:center;mask-size:10px;mask-repeat:space no-repeat;width:50%;content:' '}.section-heading.svelte-18sz2eh>span.svelte-18sz2eh{white-space:nowrap;padding:0 9px}.section-contents.svelte-18sz2eh.svelte-18sz2eh{padding:0 var(--margin);margin:auto;width:calc(var(--m) - var(--double-margin))}section.svelte-18sz2eh .section-body.spacing-normal.svelte-18sz2eh >*{margin-top:var(--margin) }section.svelte-18sz2eh .section-body.spacing-double.svelte-18sz2eh >*{margin-top:var(--double-margin) }section.no-heading.svelte-18sz2eh .section-body.svelte-18sz2eh >*:first-child{margin-top:0}@media only screen and (max-width: 900px){.section-contents.svelte-18sz2eh.svelte-18sz2eh{width:calc(var(--s) - var(--double-margin))}}@media only screen and (max-width: 768px){section.svelte-18sz2eh.svelte-18sz2eh{padding:calc(var(--margin)*3) 0}.section-contents.svelte-18sz2eh.svelte-18sz2eh{width:calc(var(--ss) - var(--double-margin))}}@media only screen and (max-width: 600px){section.svelte-18sz2eh.svelte-18sz2eh{padding:var(--margin) 0}.section-contents.svelte-18sz2eh.svelte-18sz2eh{width:auto}}",
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
    "bg-" + escape(bg) + " top-border-" + escape(topBorder) + " svelte-18sz2eh",
    (simple ? "simple" : "") + " " + (!heading ? "no-heading" : "")
  ].join(" ").trim()}"><div class="${"section-contents svelte-18sz2eh"}">${heading ? `<h2 class="${"section-heading " + escape(headingColor) + " svelte-18sz2eh"}"><span class="${"svelte-18sz2eh"}">${escape(heading)}</span></h2>` : ``}
    <div class="${"section-body spacing-" + escape(spacing) + " svelte-18sz2eh"}">${slots.default ? slots.default({}) : ``}</div></div>
</section>`;
});
var IconButton_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-1xajdal:hover{transform:scale(1.2)}button.svelte-1xajdal:active{transform:scale(1)}button.svelte-1xajdal{transition:transform 0.1s;display:block;position:relative;width:2rem;height:2rem}button.medium.svelte-1xajdal{width:3rem;height:3rem}button.big.svelte-1xajdal{width:4rem;height:4rem}button.svelte-1xajdal{border:none;padding:0;margin:0;-webkit-mask-size:contain;-webkit-mask-position:center;-webkit-mask-repeat:no-repeat;mask-size:contain;mask-position:center;mask-repeat:no-repeat;background:var(--color)}button.logo.svelte-1xajdal{mask-image:url('/images/icons/b_logo.svg');-webkit-mask-image:url('/images/icons/b_logo.svg')}button.twitter.svelte-1xajdal{mask-image:url('/images/icons/b_twitter.svg');-webkit-mask-image:url('/images/icons/b_twitter.svg')}button.youtube.svelte-1xajdal{mask-image:url('/images/icons/b_youtube.svg');-webkit-mask-image:url('/images/icons/b_youtube.svg')}button.soundcloud.svelte-1xajdal{mask-image:url('/images/icons/b_soundcloud.svg');-webkit-mask-image:url('/images/icons/b_soundcloud.svg')}button.github.svelte-1xajdal{mask-image:url('/images/icons/b_github.svg');-webkit-mask-image:url('/images/icons/b_github.svg')}button.tumblr.svelte-1xajdal{mask-image:url('/images/icons/b_tumblr.svg');-webkit-mask-image:url('/images/icons/b_tumblr.svg')}button.spacehey.svelte-1xajdal{mask-image:url('/images/icons/b_spacehey.svg');-webkit-mask-image:url('/images/icons/b_spacehey.svg')}button.mastodon.svelte-1xajdal{mask-image:url('/images/icons/b_mastodon.svg');-webkit-mask-image:url('/images/icons/b_mastodon.svg')}button.newgrounds.svelte-1xajdal{mask-image:url('/images/icons/b_newgrounds.svg');-webkit-mask-image:url('/images/icons/b_newgrounds.svg')}button.close.svelte-1xajdal{mask-image:url('/images/icons/b_close.svg');-webkit-mask-image:url('/images/icons/b_close.svg')}button.right-arrow.svelte-1xajdal{mask-image:url('/images/icons/b_arrow_r.svg');-webkit-mask-image:url('/images/icons/b_arrow_r.svg')}button.left-arrow.svelte-1xajdal{mask-image:url('/images/icons/b_arrow_l.svg');-webkit-mask-image:url('/images/icons/b_arrow_l.svg')}button.back-circle.svelte-1xajdal{background:none;background-image:url('/images/icons/b_back_circle.svg')}",
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
  return `<button class="${escape(type) + " " + escape(size) + " svelte-1xajdal"}" style="${"--color: " + escape(color2) + ";"}"${add_attribute("title", title, 0)}></button>`;
});
const twitter = "https://twitter.com/gracieart";
const youtube = "https://youtube.com/graciebell";
const soundcloud = "https://soundcloud.com/gracieart";
const github = "https://github.com/gracieart";
const deviantart = "https://deviantart.com/graciebunfluff/gallery";
const discord = "https://discordapp.com/users/262387681474904065";
const telegram = "https://t.me/GracieArt";
const tumblr = "https://tumblr.com/graciebellart";
const spacehey = "https://spacehey.com/graciebell";
const mastodon = "https://mastodon.art/@GracieArt";
const newgrounds = "https://graciebellart.newgrounds.com/";
var socialLinks = {
  twitter,
  youtube,
  soundcloud,
  github,
  deviantart,
  discord,
  telegram,
  tumblr,
  spacehey,
  mastodon,
  newgrounds
};
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
      location = socialLinks.twitter;
      break;
    case "youtube":
      title = "YouTube";
      location = socialLinks.youtube;
      break;
    case "soundcloud":
      title = "SoundCloud";
      location = socialLinks.soundcloud;
      break;
    case "github":
      title = "GitHub";
      location = socialLinks.github;
      break;
    case "tumblr":
      title = "Tumblr";
      location = socialLinks.tumblr;
      break;
    case "spacehey":
      title = "SpaceHey";
      location = socialLinks.spacehey;
      break;
    case "mastodon":
      title = "Mastodon";
      location = socialLinks.mastodon;
      break;
    case "newgrounds":
      title = "Newgrounds";
      location = socialLinks.newgrounds;
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
  code: "footer.svelte-a6uwan{display:flex;justify-content:center;padding:var(--margin);height:var(--footer-height);position:absolute;bottom:0;width:100%;background-color:var(--black)}footer.svelte-a6uwan >*{margin:0 var(--half-margin)}@media only screen and (max-width: 600px){footer.svelte-a6uwan{display:grid;grid-template-rows:1fr 1fr;grid-template-columns:1fr 1fr 1fr 1fr;align-items:center}footer.svelte-a6uwan >*{display:flex;justify-content:center}}",
  map: null
};
let color = "white";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="${"svelte-a6uwan"}">${validate_component(IconLink, "IconLink").$$render($$result, { type: "youtube", color }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "newgrounds", color }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "github", color }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "soundcloud", color }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "tumblr", color }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "mastodon", color }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "spacehey", color }, {}, {})}
  ${validate_component(IconLink, "IconLink").$$render($$result, { type: "twitter", color }, {}, {})}

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
  let { footer = true } = $$props;
  let { dark = false } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.footer === void 0 && $$bindings.footer && footer !== void 0)
    $$bindings.footer(footer);
  if ($$props.dark === void 0 && $$bindings.dark && dark !== void 0)
    $$bindings.dark(dark);
  return `${$$result.head += `${$$result.title = `<title>${escape(title ? title + " | " : "")}Gracie Bell</title>`, ""}<meta name="${"description"}" content="${"Multimedia artist specializing in graphic design, illustration, coding, video editing, and music composition"}" data-svelte="svelte-us5jnb"><meta name="${"author"}" content="${"Gracie Bell"}" data-svelte="svelte-us5jnb"><meta property="${"og:image"}" content="${"/images/gbell_social_image.jpg"}" data-svelte="svelte-us5jnb"><meta property="${"og:image:width"}" content="${"1000"}" data-svelte="svelte-us5jnb"><meta property="${"og:image:height"}" content="${"500"}" data-svelte="svelte-us5jnb"><meta property="${"og:image:type"}" content="${"image/jpg"}" data-svelte="svelte-us5jnb"><meta property="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-us5jnb"><link rel="${"alternate icon"}" type="${"image/png"}" href="${"/images/favicons/favicon.png"}" data-svelte="svelte-us5jnb"><link rel="${"icon"}" type="${"image/svg"}" href="${"/images/favicons/favicon.svg"}" data-svelte="svelte-us5jnb">${dark ? `<style data-svelte="svelte-us5jnb">body {
        background: var(--black);
      }</style>` : ``}`, ""}



${header ? `${validate_component(Header, "Header").$$render($$result, {}, {}, {
    default: () => {
      return `${escape(title)}`;
    }
  })}` : ``}
<main>${slots.default ? slots.default({}) : ``}</main>

${footer ? `${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}` : ``}`;
});
export { IconButton as I, Page as P, Section as S, socialLinks as s };
