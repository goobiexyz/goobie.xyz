import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/index-bbc75d3b.js";
import { P as Page, S as Section } from "../../chunks/Page-d1a218d7.js";
import { s as socialLinks } from "../../chunks/social-links-dba47162.js";
/* empty css                                                          *//* empty css                                                            *//* empty css                                                             */const css$3 = {
  code: "button.svelte-145akts{transition:transform 0.1s;color:var(--dark-blue);background:white;border-radius:6px;padding:3px 6px 5px;font-weight:bold}button.svelte-145akts:hover{transform:scale(1.2)}button.svelte-145akts:active{transform:scale(1)}button.bg-white.svelte-145akts{background:white}button.bg-blue.svelte-145akts{background:var(--dark-blue)}button.text-white.svelte-145akts{color:white}button.text-blue.svelte-145akts{color:var(--dark-blue)}button.bg-white.svelte-145akts{background:white}button.bg-blue.svelte-145akts{background:var(--dark-blue)}button.outline-blue.svelte-145akts{outline:2px var(--dark-blue) solid}.big.svelte-145akts{font-size:1.2rem;padding:5px 25px 7px 25px}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "blue" } = $$props;
  let { bg = "white" } = $$props;
  let { outline = "none" } = $$props;
  let { id = "" } = $$props;
  let { size = "" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.outline === void 0 && $$bindings.outline && outline !== void 0)
    $$bindings.outline(outline);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$3);
  return `<button${add_attribute("id", id, 0)} class="${"text-" + escape(color) + " bg-" + escape(bg) + " outline-" + escape(outline) + " " + escape(size) + " svelte-145akts"}">${slots.default ? slots.default({}) : ``}</button>`;
});
var ContactForm_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: '.required.svelte-1upl4wq.svelte-1upl4wq:after{content:"*";color:var(--red)}form.svelte-1upl4wq.svelte-1upl4wq{display:flex;flex-direction:column}form.svelte-1upl4wq >*:not(:first-child){margin-top:1.5rem}form.svelte-1upl4wq #submit{width:min-content}.horizontal.svelte-1upl4wq.svelte-1upl4wq{display:flex}.horizontal.svelte-1upl4wq>.svelte-1upl4wq:not(:last-child){margin-right:1.5rem}label.svelte-1upl4wq.svelte-1upl4wq,input.svelte-1upl4wq.svelte-1upl4wq,textarea.svelte-1upl4wq.svelte-1upl4wq,fieldset.svelte-1upl4wq.svelte-1upl4wq{display:block;width:100%}input.svelte-1upl4wq.svelte-1upl4wq,textarea.svelte-1upl4wq.svelte-1upl4wq{border-color:var(--blue);margin-top:4px}textarea.svelte-1upl4wq.svelte-1upl4wq{height:200px}label.svelte-1upl4wq.svelte-1upl4wq{color:var(--dark-blue)}',
  map: null
};
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<form target="${"_blank"}" action="${"https://formsubmit.co/mail@graciebell.art"}" method="${"post"}" class="${"svelte-1upl4wq"}"><fieldset class="${"horizontal svelte-1upl4wq"}"><fieldset class="${"svelte-1upl4wq"}"><label class="${"required svelte-1upl4wq"}" for="${"name"}">Name</label>
      <input type="${"text"}" id="${"name"}" placeholder="${"Your name..."}" required class="${"svelte-1upl4wq"}"></fieldset>

    <fieldset class="${"svelte-1upl4wq"}"><label for="${"pronouns"}" class="${"svelte-1upl4wq"}">Pronouns</label>
      <input type="${"text"}" id="${"pronouns"}" name="${"pronouns"}" placeholder="${"They/she/he..."}" class="${"svelte-1upl4wq"}"></fieldset></fieldset>

  <fieldset class="${"svelte-1upl4wq"}"><label class="${"required svelte-1upl4wq"}" for="${"email"}">Email</label>
    <input type="${"text"}" id="${"email"}" name="${"email"}" placeholder="${"yourname@example.com"}" required class="${"svelte-1upl4wq"}"></fieldset>

  <fieldset class="${"svelte-1upl4wq"}"><label class="${"required svelte-1upl4wq"}" for="${"message"}">Message</label>
    <textarea id="${"message"}" name="${"message"}" placeholder="${"Write something..."}" required class="${"svelte-1upl4wq"}"></textarea></fieldset>

  <small style="${"color: var(--red);"}">*Required field</small>

  ${validate_component(Button, "Button").$$render($$result, {
    id: "submit",
    bg: "blue",
    color: "white",
    size: "big"
  }, {}, {
    default: () => {
      return `Send`;
    }
  })}
</form>`;
});
var ContentAndSidebar_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".grid.svelte-qpgd3a{display:grid;grid-template-columns:auto 30%;grid-column-gap:1.5rem}.sidebar.svelte-qpgd3a{border-left:1px dashed var(--blue);padding-left:1.5rem}@media only screen and (max-width: 768px){.grid.svelte-qpgd3a{grid-template-columns:auto;grid-template-rows:auto auto;grid-row-gap:calc(1.5rem * 2)}.content.svelte-qpgd3a{order:2}.sidebar.svelte-qpgd3a{border:none;padding:0;order:1}}",
  map: null
};
const ContentAndSidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"grid svelte-qpgd3a"}"><div class="${"content svelte-qpgd3a"}">${slots.content ? slots.content({}) : ``}</div>

  <div class="${"sidebar svelte-qpgd3a"}">${slots.sidebar ? slots.sidebar({}) : ``}</div>
</div>`;
});
var contact_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2 + *{margin-top:calc(1.5rem / 2)}dt.svelte-22xooz{font-weight:bold}dt.svelte-22xooz:not(:first-child){margin-top:calc(1.5rem / 2)}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Contact" }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { simple: "true", spacing: "double" }, {}, {
        default: () => {
          return `<p>Contact me any way you&#39;d like! However, if you are looking to get a commission, I would prefer it if you would contact me on either Telegram, Twitter, or Discord\u2014if you use any of those services\u2014because it will be much easier to discuss the details and to send work-in-progress pictures over direct messages rather than email, but that is not required.</p>

    ${validate_component(ContentAndSidebar, "ContentAndSidebar").$$render($$result, {}, {}, {
            sidebar: () => {
              return `<dl slot="${"sidebar"}"><h2>Social</h2><dt class="${"svelte-22xooz"}">Twitter</dt><dd><a${add_attribute("href", socialLinks.twitter, 0)}>@GracieArt</a></dd><dt class="${"svelte-22xooz"}">Telegram</dt><dd><a${add_attribute("href", socialLinks.telegram, 0)}>@GracieArt</a></dd><dt class="${"svelte-22xooz"}">Discord</dt><dd><a${add_attribute("href", socialLinks.discord, 0)}>GracieArt#1312</a></dd></dl>`;
            },
            content: () => {
              return `<div slot="${"content"}"><h2>Email</h2>
        ${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}</div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Contact as default };
