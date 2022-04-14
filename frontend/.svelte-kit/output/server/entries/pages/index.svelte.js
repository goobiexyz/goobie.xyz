import { c as create_ssr_component, e as escape, a as add_attribute, v as validate_component, b as createEventDispatcher, n as null_to_empty, d as each } from "../../chunks/index-bbc75d3b.js";
import { P as Page, S as Section } from "../../chunks/Page-02a8f5df.js";
import { s as socialLinks } from "../../chunks/social-links-dba47162.js";
import { S as ScrollBox, F as Flex2Col } from "../../chunks/ScrollBox-4771f83d.js";
import { I as Image, M as MediaModal, S as SpacedDiv } from "../../chunks/MediaModal-4f1aa2f0.js";
/* empty css                                                            *//* empty css                                                          */import { c as convertDate } from "../../chunks/convert-date-64d95c73.js";
/* empty css                                                             */import "../../chunks/SvelteMarkdown-bfd616a7.js";
var NavButton_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: 'a.svelte-nss9fm.svelte-nss9fm,a.svelte-nss9fm.svelte-nss9fm:hover,a.svelte-nss9fm.svelte-nss9fm:focus,a.svelte-nss9fm.svelte-nss9fm:active{text-decoration:none;color:inherit}.nav-button.svelte-nss9fm.svelte-nss9fm{transition:transform 0.1s;box-sizing:content-box;display:block;position:relative;border:0.4rem white solid;border-radius:1rem;width:4rem;height:4rem;background:0;background-position:center;background-repeat:no-repeat;text-align:center;transition:transform 0.25s, opacity 0.25s;text-decoration:none}.nav-button.svelte-nss9fm.svelte-nss9fm:hover{transform:scale(1.2)}.nav-button.svelte-nss9fm.svelte-nss9fm:active{transform:scale(1)}.nav-button.hidden.svelte-nss9fm.svelte-nss9fm{transform:perspective(500px) rotateX(90deg);perspective:500px;opacity:0;pointer-events:none;z-index:-1}.nav-button.svelte-nss9fm span.svelte-nss9fm{display:inline-block;line-height:4rem;white-space:nowrap;color:white;font-family:"urbane";font-weight:600;transform:translateY(3.5rem);position:relative}.nav-button.work.svelte-nss9fm.svelte-nss9fm{background-image:url("/images/icons/b_star.svg")}.nav-button.comms.svelte-nss9fm.svelte-nss9fm{background-image:url("/images/icons/b_money.svg")}.nav-button.contact.svelte-nss9fm.svelte-nss9fm{background-image:url("/images/icons/b_at.svg")}.nav-button.image.svelte-nss9fm.svelte-nss9fm{background-image:url("/images/icons/b_brush.svg")}.nav-button.design.svelte-nss9fm.svelte-nss9fm{background-image:url("/images/icons/b_shapes.svg")}.nav-button.music.svelte-nss9fm.svelte-nss9fm{background-image:url("/images/icons/b_music.svg")}.nav-button.code.svelte-nss9fm.svelte-nss9fm{background-image:url("/images/icons/b_code.svg")}.nav-button.video.svelte-nss9fm.svelte-nss9fm{background-image:url("/images/icons/b_video.svg")}.nav-button.comics.svelte-nss9fm.svelte-nss9fm{background-image:url("/images/icons/b_book.svg")}.nav-button.close.svelte-nss9fm.svelte-nss9fm{background-image:url("/images/icons/b_close.svg");border:none}.nav-button.back.svelte-nss9fm.svelte-nss9fm{background-image:url("/images/icons/b_back.svg");border:none;position:absolute;left:calc(-1 * 3rem - 76px)}@media only screen and (min-width: 601px){.nav-button.svelte-nss9fm.svelte-nss9fm::before{content:"";margin-left:-100%}.nav-button.svelte-nss9fm.svelte-nss9fm::after{content:"";margin-right:-100%}}@media only screen and (max-width: 600px){.nav-button.svelte-nss9fm.svelte-nss9fm{width:3rem;height:3rem;text-align:left;font-size:1.5rem;border:none;text-decoration:underline}.nav-button.back.svelte-nss9fm.svelte-nss9fm{position:static}.nav-button.svelte-nss9fm span.svelte-nss9fm{text-indent:4rem;height:min-content;line-height:3rem;transform:none}}',
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
  $$result.css.add(css$5);
  return `${href ? `<a class="${["nav-button " + escape(icon) + " svelte-nss9fm", hidden ? "hidden" : ""].join(" ").trim()}"${add_attribute("href", href, 0)}><span class="${"svelte-nss9fm"}">${slots.default ? slots.default({}) : ``}</span></a>` : `<button class="${["nav-button " + escape(icon) + " svelte-nss9fm", hidden ? "hidden" : ""].join(" ").trim()}"><span class="${"svelte-nss9fm"}">${slots.default ? slots.default({}) : ``}</span></button>`}`;
});
var NavBGroup_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".bgroup.svelte-smngwl{display:grid;position:relative;z-index:0;justify-content:center;align-items:center;grid-template-columns:76px 76px 76px;grid-column-gap:3rem;grid-row-gap:3rem;width:min-content;margin:auto}.bgroup.hidden.svelte-smngwl{display:none;z-index:-100}@media only screen and (max-width: 600px){.bgroup.svelte-smngwl{grid-template-columns:1fr;grid-row-gap:1rem;margin:0}}",
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
  $$result.css.add(css$4);
  return `<div class="${["bgroup svelte-smngwl", hidden ? "hidden" : ""].join(" ").trim()}">${slots.default ? slots.default({}) : ``}
</div>`;
});
var HomeHeader_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: '@keyframes svelte-1t9aygh-scroll{100%{background-position:400px 173.2px}}header.svelte-1t9aygh{background:url("/images/backgrounds/bg-dots.png") repeat;background-attachment:fixed;animation:8s svelte-1t9aygh-scroll infinite linear;height:max-content;margin-top:0;padding:calc(1.5rem * 2) 1.5rem;overflow:hidden;border-bottom:5rem solid;border-image-slice:0 0 100% 0;border-image-repeat:repeat;border-image-outset:2px;border-image-source:url("/images/borders/benday_inverted.svg")}h1.svelte-1t9aygh{margin-top:1.5rem;text-align:center}nav.svelte-1t9aygh{margin-top:1.5rem;height:224px}.header-body.svelte-1t9aygh{transform:translateY(58px);transition:transform 0.25s;position:relative}.header-body.expanded.svelte-1t9aygh{transform:translateY(0px)}.logo.svelte-1t9aygh{width:32rem}@media only screen and (max-width: 768px){header.svelte-1t9aygh{padding-top:1.5rem;padding-bottom:calc(1.5rem + 1rem)}}@media only screen and (max-width: 600px){.header-body.svelte-1t9aygh{width:80vw;margin:auto;transform:translateY(0)}nav.svelte-1t9aygh{display:block;height:min-content}.logo.svelte-1t9aygh{width:100%}}',
  map: null
};
const HomeHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let b0, b1, b2, b3, b4, b5, b6, b7, b8, b9;
  let bgroup0, bgroup1;
  $$result.css.add(css$3);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<header class="${"svelte-1t9aygh"}"><div class="${"header-bg"}"></div>
  <div class="${["header-body svelte-1t9aygh", ""].join(" ").trim()}"><h1 id="${"logo"}" class="${"svelte-1t9aygh"}"><picture><source media="${"(max-width: 600px)"}" srcset="${"/images/logo_no_cloud.svg"}">
        <img class="${"logo svelte-1t9aygh"}" src="${"/images/logo.svg"}" alt="${"Gracie Bell: Multimedia Artist"}"></picture></h1>

    <nav class="${"svelte-1t9aygh"}">${validate_component(NavBGroup, "NavBGroup").$$render($$result, { hidden: "true", this: bgroup1 }, {
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
const css$2 = {
  code: "div.svelte-1sbujwg{overflow:hidden}figcaption.svelte-1sbujwg{margin-top:6px;font-family:'urbane';font-size:small;color:var(--black)}",
  map: null
};
const ImgSCaption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { width } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  $$result.css.add(css$2);
  return `<figure><div class="${"rounded-more svelte-1sbujwg"}" style="${"width:" + escape(width)}">${validate_component(Image, "Image").$$render($$result, { src, alt }, {}, {})}</div>

  <figcaption class="${"svelte-1sbujwg"}">${slots.default ? slots.default({}) : ``}</figcaption>
</figure>`;
});
var PostSummary_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: 'article.svelte-1v5p7s6.svelte-1v5p7s6{background:white;padding:calc(1.5rem / 2);border-radius:16px;color:var(--dark-blue);display:flex;width:512px}article.svelte-1v5p7s6 .col-1.svelte-1v5p7s6{margin-right:calc(1.5rem / 2)}article.svelte-1v5p7s6 .content-type.svelte-1v5p7s6{display:block;text-transform:uppercase;font-size:0.8rem;letter-spacing:4px;font-weight:bold}article.svelte-1v5p7s6 h3.svelte-1v5p7s6{font-family:"urbane-bold";font-size:1.25rem}article.svelte-1v5p7s6 img.svelte-1v5p7s6{border-radius:10px;height:123px;width:123px;display:block}article.svelte-1v5p7s6 time.svelte-1v5p7s6{margin-top:8px;display:block;font-family:monospace}@media only screen and (max-width: 768px){article.svelte-1v5p7s6.svelte-1v5p7s6{width:100%}}@media only screen and (max-width: 600px){article.svelte-1v5p7s6.svelte-1v5p7s6{padding:0 0 1.5rem 0;background:none;border-bottom:1px white dashed;border-radius:0;color:white}article.svelte-1v5p7s6 img.svelte-1v5p7s6{height:80px;width:80px}}',
  map: null
};
const PostSummary = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { post } = $$props;
  let thumbnail = "https://api.graciebell.art" + post.attributes.thumbnail.data.attributes.formats.thumbnail.url;
  let type = post.attributes.media_type;
  let title = post.attributes.title;
  let date = post.attributes.date;
  if ($$props.post === void 0 && $$bindings.post && post !== void 0)
    $$bindings.post(post);
  $$result.css.add(css$1);
  return `<article class="${"svelte-1v5p7s6"}"><div class="${"col-1 svelte-1v5p7s6"}"><img${add_attribute("src", thumbnail, 0)} alt="${""}" class="${"svelte-1v5p7s6"}"></div>

  <div class="${"col-2"}"><span class="${"content-type svelte-1v5p7s6"}">${escape(type)}</span>
    <h3 class="${"svelte-1v5p7s6"}">${escape(title)}</h3>
    <time class="${"svelte-1v5p7s6"}">${escape(convertDate(date))}</time></div>
</article>`;
});
var LatestPosts_svelte_svelte_type_style_lang = "";
const css = {
  code: "div.svelte-1ooito1{transition:0.25s opacity}div.hide.svelte-1ooito1{opacity:0}button.svelte-1ooito1{width:100%;text-align:left;transition:0.1s transform}button.svelte-1ooito1:hover{transform:scale(1.05)}button.svelte-1ooito1:active{transform:scale(1)}@media only screen and (max-width: 768px){button.svelte-1ooito1:hover,button.svelte-1ooito1:active{transform:scale(0.95)}}",
  map: null
};
const LatestPosts = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { style = "big" } = $$props;
  createEventDispatcher();
  let posts = [];
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css);
  return `<div class="${escape(null_to_empty("hide")) + " svelte-1ooito1"}">${validate_component(ScrollBox, "ScrollBox").$$render($$result, {}, {}, {
    default: () => {
      return `${each(posts, (post) => {
        return `<button class="${"svelte-1ooito1"}">${validate_component(PostSummary, "PostSummary").$$render($$result, { post, style }, {}, {})}</button>`;
      })}`;
    }
  })}
</div>`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mediaModal;
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
            return `${validate_component(Flex2Col, "Flex2Col").$$render($$result, {}, {}, {
              "col-2": () => {
                return `${validate_component(SpacedDiv, "SpacedDiv").$$render($$result, { slot: "col-2" }, {}, {
                  default: () => {
                    return `<p>Hi there! My name is Grace and I call myself a multimedia artist because I&#39;m always looking to challenge myself, try new things, and apply skills I learn in one medium to other mediums. My specialties include graphic design, illustration, coding, video editing, and music composition.
        </p>
        <p>My commissions for character art and graphic design are currently OPEN! <a href="${"comms"}">Click here for more information</a>. And don&#39;t hesitate to contact me about any other ideas and projects you may have.
        </p>`;
                  }
                })}`;
              },
              "col-1": () => {
                return `<div slot="${"col-1"}">${validate_component(ImgSCaption, "ImgSCaption").$$render($$result, {
                  src: "/images/gracie4.png",
                  width: "220px",
                  alt: ""
                }, {}, {
                  default: () => {
                    return `Art by <a href="${"https://twitter.com/ponycide"}">Ponycide.</a>`;
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
            return `${validate_component(LatestPosts, "LatestPosts").$$render($$result, { style: "big" }, {}, {})}`;
          }
        })}`;
      }
    })}`;
  } while (!$$settled);
  return $$rendered;
});
export { Routes as default };
