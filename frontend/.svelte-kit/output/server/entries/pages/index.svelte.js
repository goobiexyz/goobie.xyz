import { c as create_ssr_component, e as escape, f as add_attribute, v as validate_component, a as createEventDispatcher, d as each } from "../../chunks/index-0ee30357.js";
import { P as Page, S as Section } from "../../chunks/Page-b367a379.js";
import { s as socialLinks } from "../../chunks/social-links-dba47162.js";
import { F as FlexCols } from "../../chunks/FlexCols-75cd31a5.js";
import { I as Image } from "../../chunks/Image-e7ebf645.js";
import { c as convertDate, M as MediaModal } from "../../chunks/MediaModal-f5a88e57.js";
import { B as Box } from "../../chunks/Box-76cefffb.js";
import { S as ScrollBox } from "../../chunks/ScrollBox-663f56d0.js";
import { S as SpacedDiv } from "../../chunks/SpacedDiv-a3cc0b62.js";
function truncateString(s, limit) {
  if (s.length > limit) {
    return s.substring(0, limit) + " ...";
  } else {
    return s;
  }
}
var NavButton_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: `a.svelte-1uv9swr.svelte-1uv9swr,a.svelte-1uv9swr.svelte-1uv9swr:hover,a.svelte-1uv9swr.svelte-1uv9swr:focus,a.svelte-1uv9swr.svelte-1uv9swr:active{text-decoration:none;color:inherit}.nav-button.svelte-1uv9swr.svelte-1uv9swr:hover{transform:scale(1.2)}.nav-button.svelte-1uv9swr.svelte-1uv9swr:active{transform:scale(1)}.nav-button.svelte-1uv9swr.svelte-1uv9swr{transition:transform 0.1s;box-sizing:content-box;display:block;position:relative;border:0.4rem white solid;border-radius:1rem;width:4rem;height:4rem;background:0;background-position:center;background-repeat:no-repeat;text-align:center;transition:transform 0.25s, opacity 0.25s;text-decoration:none}.nav-button.hidden.svelte-1uv9swr.svelte-1uv9swr{transform:perspective(500px) rotateX(90deg);perspective:500px;opacity:0;pointer-events:none;z-index:-1}.nav-button.svelte-1uv9swr span.svelte-1uv9swr{display:inline-block;line-height:4rem;white-space:nowrap;color:white;font-family:'urbane';font-weight:600;transform:translateY(3.5rem);position:relative}.nav-button.work.svelte-1uv9swr.svelte-1uv9swr{background-image:url("/images/icons/b_star.svg")}.nav-button.comms.svelte-1uv9swr.svelte-1uv9swr{background-image:url("/images/icons/b_money.svg")}.nav-button.contact.svelte-1uv9swr.svelte-1uv9swr{background-image:url("/images/icons/b_at.svg")}.nav-button.image.svelte-1uv9swr.svelte-1uv9swr{background-image:url("/images/icons/b_brush.svg")}.nav-button.design.svelte-1uv9swr.svelte-1uv9swr{background-image:url("/images/icons/b_shapes.svg")}.nav-button.music.svelte-1uv9swr.svelte-1uv9swr{background-image:url("/images/icons/b_music.svg")}.nav-button.code.svelte-1uv9swr.svelte-1uv9swr{background-image:url("/images/icons/b_code.svg")}.nav-button.video.svelte-1uv9swr.svelte-1uv9swr{background-image:url("/images/icons/b_video.svg")}.nav-button.comics.svelte-1uv9swr.svelte-1uv9swr{background-image:url("/images/icons/b_book.svg")}.nav-button.close.svelte-1uv9swr.svelte-1uv9swr{background-image:url("/images/icons/b_close.svg");border:none}.nav-button.back.svelte-1uv9swr.svelte-1uv9swr{background-image:url("/images/icons/b_back.svg");border:none;position:absolute;left:calc(-3rem - 76px)}@media only screen and (min-width: 601px){.nav-button.svelte-1uv9swr.svelte-1uv9swr::before{content:"";margin-left:-100%}.nav-button.svelte-1uv9swr.svelte-1uv9swr::after{content:"";margin-right:-100%}}@media only screen and (max-width: 600px){.nav-button.svelte-1uv9swr.svelte-1uv9swr{width:3rem;height:3rem;text-align:left;font-size:1.5rem;border:none;text-decoration:underline}.nav-button.back.svelte-1uv9swr.svelte-1uv9swr{position:static}.nav-button.svelte-1uv9swr span.svelte-1uv9swr{text-indent:4rem;height:-webkit-min-content;height:-moz-min-content;height:min-content;line-height:3rem;transform:none}}`,
  map: null
};
const NavButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { href } = $$props;
  let { hidden = false } = $$props;
  function hide() {
    hidden = true;
  }
  function show() {
    hidden = false;
  }
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css$6);
  return `${href ? `<a class="${["nav-button " + escape(icon) + " svelte-1uv9swr", hidden ? "hidden" : ""].join(" ").trim()}"${add_attribute("href", href, 0)}><span class="${"svelte-1uv9swr"}">${slots.default ? slots.default({}) : ``}</span></a>` : `<button class="${["nav-button " + escape(icon) + " svelte-1uv9swr", hidden ? "hidden" : ""].join(" ").trim()}"><span class="${"svelte-1uv9swr"}">${slots.default ? slots.default({}) : ``}</span></button>`}`;
});
var NavBGroup_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".bgroup.svelte-d3ey9j{display:grid;position:relative;z-index:0;justify-content:center;align-items:center;grid-template-columns:76px 76px 76px;grid-column-gap:3rem;grid-row-gap:3rem;width:-webkit-min-content;width:-moz-min-content;width:min-content;margin:auto}.bgroup.hidden.svelte-d3ey9j{display:none;z-index:-100}@media only screen and (max-width: 600px){.bgroup.svelte-d3ey9j{grid-template-columns:1fr;grid-row-gap:1rem;margin:0}}",
  map: null
};
const NavBGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { hidden = false } = $$props;
  function hide() {
    hidden = true;
  }
  function show() {
    hidden = false;
  }
  if ($$props.hidden === void 0 && $$bindings.hidden && hidden !== void 0)
    $$bindings.hidden(hidden);
  if ($$props.hide === void 0 && $$bindings.hide && hide !== void 0)
    $$bindings.hide(hide);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  $$result.css.add(css$5);
  return `<div class="${["bgroup svelte-d3ey9j", hidden ? "hidden" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
var HomeHeader_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "@-webkit-keyframes svelte-9xc59j-scroll{100%{background-position:400px 173.2px}}@keyframes svelte-9xc59j-scroll{100%{background-position:400px 173.2px}}header.svelte-9xc59j{background:url('/images/backgrounds/bg-dots.png') repeat;background-attachment:fixed;-webkit-animation:8s svelte-9xc59j-scroll infinite linear;animation:8s svelte-9xc59j-scroll infinite linear;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin-top:0;padding:var(--double-margin) var(--margin);overflow:hidden;border-bottom:5rem solid;border-image-slice:0 0 100% 0;border-image-repeat:repeat;border-image-outset:2px;border-image-source:url('/images/borders/benday_inverted.svg')}h1.svelte-9xc59j{margin-top:var(--margin);text-align:center}nav.svelte-9xc59j{margin-top:var(--margin);height:224px}.header-body.svelte-9xc59j{transform:translateY(58px);transition:transform 0.25s;position:relative}.header-body.expanded.svelte-9xc59j{transform:translateY(0px)}.logo.svelte-9xc59j{width:32rem}@media only screen and (max-width: 768px){header.svelte-9xc59j{padding-top:var(--margin);padding-bottom:calc(var(--margin) + 1rem)}}@media only screen and (max-width: 600px){.header-body.svelte-9xc59j{width:80vw;margin:auto;transform:translateY(0)}nav.svelte-9xc59j{display:block;height:-webkit-min-content;height:-moz-min-content;height:min-content}.logo.svelte-9xc59j{width:100%}}",
  map: null
};
const HomeHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let b0, b1, b2, b3, b4, b5, b6, b7, b8, b9;
  let bgroup0, bgroup1;
  $$result.css.add(css$4);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<header class="${"svelte-9xc59j"}"><div class="${"header-bg"}"></div>
  <div class="${["header-body svelte-9xc59j", ""].join(" ").trim()}"><h1 id="${"logo"}" class="${"svelte-9xc59j"}"><picture><source media="${"(max-width: 600px)"}" srcset="${"/images/logo_no_cloud.svg"}">
        <img class="${"logo svelte-9xc59j"}" src="${"/images/logo.svg"}" alt="${"Gracie Bell: Multimedia Artist"}"></picture></h1>

    <nav class="${"svelte-9xc59j"}">${validate_component(NavBGroup, "NavBGroup").$$render($$result, { hidden: "true", this: bgroup1 }, {
      this: ($$value) => {
        bgroup1 = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(NavButton, "NavButton").$$render($$result, { icon: "back", hidden: "true", this: b3 }, {
          this: ($$value) => {
            b3 = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `Back`;
          }
        })}
        ${validate_component(NavButton, "NavButton").$$render($$result, {
          icon: "image",
          href: "art",
          hidden: "true",
          this: b4
        }, {
          this: ($$value) => {
            b4 = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `Art`;
          }
        })}
        ${validate_component(NavButton, "NavButton").$$render($$result, {
          icon: "design",
          href: "design",
          hidden: "true",
          this: b5
        }, {
          this: ($$value) => {
            b5 = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `Design`;
          }
        })}
        ${validate_component(NavButton, "NavButton").$$render($$result, {
          icon: "comics",
          href: "comics",
          hidden: "true",
          this: b6
        }, {
          this: ($$value) => {
            b6 = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `Comics`;
          }
        })}
        ${validate_component(NavButton, "NavButton").$$render($$result, {
          icon: "music",
          href: socialLinks.soundcloud,
          hidden: "true",
          this: b7
        }, {
          this: ($$value) => {
            b7 = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `Music`;
          }
        })}
        ${validate_component(NavButton, "NavButton").$$render($$result, {
          icon: "code",
          href: socialLinks.github,
          hidden: "true",
          this: b8
        }, {
          this: ($$value) => {
            b8 = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `Code`;
          }
        })}
        ${validate_component(NavButton, "NavButton").$$render($$result, {
          icon: "video",
          href: socialLinks.youtube,
          hidden: "true",
          this: b9
        }, {
          this: ($$value) => {
            b9 = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `Videos`;
          }
        })}`;
      }
    })}

      ${validate_component(NavBGroup, "NavBGroup").$$render($$result, { this: bgroup0 }, {
      this: ($$value) => {
        bgroup0 = $$value;
        $$settled = false;
      }
    }, {
      default: () => {
        return `${validate_component(NavButton, "NavButton").$$render($$result, { icon: "work", this: b0 }, {
          this: ($$value) => {
            b0 = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `My Work`;
          }
        })}
        ${validate_component(NavButton, "NavButton").$$render($$result, { icon: "comms", href: "comms", this: b1 }, {
          this: ($$value) => {
            b1 = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `Commissions`;
          }
        })}
        ${validate_component(NavButton, "NavButton").$$render($$result, {
          icon: "contact",
          href: "contact",
          this: b2
        }, {
          this: ($$value) => {
            b2 = $$value;
            $$settled = false;
          }
        }, {
          default: () => {
            return `Contact`;
          }
        })}`;
      }
    })}</nav></div>
</header>`;
  } while (!$$settled);
  return $$rendered;
});
var ImgSCaption_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "figcaption.svelte-1tlalfw{margin-top:6px;font-family:'urbane';font-size:small;color:var(--black)}",
  map: null
};
const ImgSCaption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { style } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css$3);
  return `<figure>${validate_component(Image, "Image").$$render($$result, { src, alt, style }, {}, {})}
  <figcaption class="${"svelte-1tlalfw"}">${slots.default ? slots.default({}) : ``}</figcaption>
</figure>`;
});
var PostSummary_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".col-1.svelte-v1u8kr,.col-2.svelte-v1u8kr{display:block}.col-2.svelte-v1u8kr{flex:1}.content-type.svelte-v1u8kr{display:block;text-transform:uppercase;font-size:0.8rem;letter-spacing:4px;font-weight:bold}h3.svelte-v1u8kr{font-family:'urbane-bold';font-size:1.25rem}time.svelte-v1u8kr{margin-top:2px;display:block;font-family:monospace;font-size:0.9rem}.description.svelte-v1u8kr{margin-top:var(--margin)}@media only screen and (max-width: 768px){.col-1.svelte-v1u8kr img{width:200px}}",
  map: null
};
const PostSummary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let thumbnail = "https://api.graciebell.art" + post.attributes.thumbnail.data.attributes.formats.thumbnail.url;
  let type = post.attributes.media_type;
  let title = post.attributes.title;
  let date = post.attributes.date;
  let desc = truncateString(post.attributes.description, 125);
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$2);
  return `


${validate_component(Box, "Box").$$render($$result, {
    tag: "article",
    style: "color: white; background: none; border-radius: 0;"
  }, {}, {
    default: () => {
      return `${validate_component(FlexCols, "FlexCols").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="${"col-1 svelte-v1u8kr"}">${validate_component(Image, "Image").$$render($$result, {
            src: thumbnail,
            alt: "",
            style: "border-radius: var(--rounded-2);"
          }, {}, {})}</div>

    <div class="${"col-2 svelte-v1u8kr"}"><span class="${"content-type svelte-v1u8kr"}">${escape(type)}</span>
      <h3 class="${"svelte-v1u8kr"}">${escape(title)}</h3>
      <time class="${"svelte-v1u8kr"}">${escape(convertDate(date))}</time>
      <p class="${"description svelte-v1u8kr"}">${escape(desc)}</p></div>`;
        }
      })}`;
    }
  })}`;
});
var LatestPosts_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "hr.svelte-1y1hff8{border:none;border-top:1px white dashed}hr.svelte-1y1hff8:last-child{display:none}button.svelte-1y1hff8{width:100%;text-align:left;transition:0.1s transform}button.svelte-1y1hff8:hover{transform:scale(1.03)}button.svelte-1y1hff8:active{transform:scale(1)}@media only screen and (max-width: 768px){.wrapper.svelte-1y1hff8{width:-webkit-min-content;width:-moz-min-content;width:min-content;margin:auto}}",
  map: null
};
const LatestPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  createEventDispatcher();
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css$1);
  return `<div class="${"wrapper svelte-1y1hff8"}">${validate_component(ScrollBox, "ScrollBox").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(SpacedDiv, "SpacedDiv").$$render($$result, {}, {}, {
        default: () => {
          return `${each(posts, (post) => {
            return `<button class="${"svelte-1y1hff8"}">${validate_component(PostSummary, "PostSummary").$$render($$result, { post }, {}, {})}</button>
        <hr class="${"svelte-1y1hff8"}">`;
          })}`;
        }
      })}`;
    }
  })}
</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".col-1.svelte-1hh3xca{flex:1 1 20%;display:flex;justify-content:space-evenly}.col-2.svelte-1hh3xca{flex:1 1 60%;min-width:35ch}@media only screen and (max-width: 600px){.col-2.svelte-1hh3xca{min-width:100%}}",
  map: null
};
async function load() {
  let url = "https://api.graciebell.art/api/posts";
  let params = [
    "sort=date:desc",
    "populate[0]=thumbnail",
    "populate[1]=media_file",
    "pagination[limit]=5"
  ];
  let res = await fetch(`${url}?${params.join("&")}`).then((r) => r.json());
  return { props: { posts: res.data } };
}
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { posts } = $$props;
  let mediaModal;
  if ($$props.posts === void 0 && $$bindings.posts && posts !== void 0)
    $$bindings.posts(posts);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `${validate_component(MediaModal, "MediaModal").$$render($$result, { this: mediaModal }, {
      this: ($$value) => {
        mediaModal = $$value;
        $$settled = false;
      }
    }, {})}
${validate_component(HomeHeader, "HomeHeader").$$render($$result, {}, {}, {})}
${validate_component(Page, "Dfs.Page").$$render($$result, { header: false }, {}, {
      default: () => {
        return `${validate_component(Section, "Dfs.Section").$$render($$result, {
          id: "about",
          heading: "Meet Gracie",
          headingColor: "blue"
        }, {}, {
          default: () => {
            return `${validate_component(FlexCols, "FlexCols").$$render($$result, {}, {}, {
              default: () => {
                return `<div class="${"col-1 svelte-1hh3xca"}">${validate_component(ImgSCaption, "ImgSCaption").$$render($$result, {
                  src: "/images/gracie4.png",
                  style: "width:100%; max-width:16rem; border-radius:var(--rounded-2);",
                  alt: ""
                }, {}, {
                  default: () => {
                    return `Art by <a href="${"https://twitter.com/ponycide"}">Ponycide.</a>`;
                  }
                })}</div>
      <div class="${"col-2 svelte-1hh3xca"}">${validate_component(SpacedDiv, "SpacedDiv").$$render($$result, {}, {}, {
                  default: () => {
                    return `<p>Hi there! My name is Grace and I call myself a multimedia artist because I&#39;m always looking to challenge myself, try new things, and apply skills I learn in one medium to other mediums. My specialties include graphic design, illustration, coding, video editing, and music composition.
          </p>
          <p>My commissions for character art and graphic design are currently OPEN! <a href="${"comms"}">Click here for more information</a>. And don&#39;t hesitate to contact me about any other ideas and projects you may have.
          </p>`;
                  }
                })}</div>`;
              }
            })}`;
          }
        })}


  ${validate_component(Section, "Dfs.Section").$$render($$result, {
          id: "updates",
          heading: "What's New?",
          headingColor: "white",
          bg: "blue-stripes",
          topBorder: "clouds"
        }, {}, {
          default: () => {
            return `${validate_component(LatestPosts, "LatestPosts").$$render($$result, { posts }, {}, {})}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Routes as default, load };
