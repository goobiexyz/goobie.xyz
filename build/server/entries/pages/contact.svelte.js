import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component } from "../../chunks/index-1c4ec740.js";
import { P as Page, S as Section } from "../../chunks/Page-c010a59d.js";
import { s as socialLinks } from "../../chunks/Button.svelte_svelte_type_style_lang-99cd0359.js";
/* empty css                                                            *//* empty css                                                             */const css$2 = {
  code: "button.s-QT9FG2S3JQjG{transition:transform 0.1s;color:var(--dark-blue);background:white;border-radius:6px;padding:3px 6px 5px;font-weight:bold}button.s-QT9FG2S3JQjG:hover{transform:scale(1.2)}button.s-QT9FG2S3JQjG:active{transform:scale(1)}button.bg-white.s-QT9FG2S3JQjG{background:white}button.bg-blue.s-QT9FG2S3JQjG{background:var(--dark-blue)}button.text-white.s-QT9FG2S3JQjG{color:white}button.text-blue.s-QT9FG2S3JQjG{color:var(--dark-blue)}button.bg-white.s-QT9FG2S3JQjG{background:white}button.bg-blue.s-QT9FG2S3JQjG{background:var(--dark-blue)}.big.s-QT9FG2S3JQjG{font-size:1.2rem;padding:5px 25px 7px 25px}.s-QT9FG2S3JQjG{}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "blue" } = $$props;
  let { bg = "white" } = $$props;
  let { id = "" } = $$props;
  let { size = "" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css$2);
  return `<button${add_attribute("id", id, 0)} class="${"text-" + escape(color) + " bg-" + escape(bg) + " " + escape(size) + " s-QT9FG2S3JQjG"}">${slots.default ? slots.default({}) : ``}</button>`;
});
var ContactForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.required.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv:after{content:"*";color:var(--red)}form.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv{display:flex;flex-direction:column}form.s-V8qKnnzZzPIv >*:not(:first-child){margin-top:1.5rem}form.s-V8qKnnzZzPIv #submit{width:min-content}.horizontal.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv{display:flex}.horizontal.s-V8qKnnzZzPIv>.s-V8qKnnzZzPIv:not(:last-child){margin-right:1.5rem}label.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv,input.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv,textarea.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv,fieldset.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv{display:block;width:100%}input.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv,textarea.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv{border-color:var(--blue);margin-top:4px}textarea.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv{height:200px}label.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv{color:var(--dark-blue)}.s-V8qKnnzZzPIv.s-V8qKnnzZzPIv{}',
  map: null
};
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<form target="${"_blank"}" action="${"https://formsubmit.co/mail@graciebell.art"}" method="${"post"}" class="${"s-V8qKnnzZzPIv"}"><fieldset class="${"horizontal s-V8qKnnzZzPIv"}"><fieldset class="${"s-V8qKnnzZzPIv"}"><label class="${"required s-V8qKnnzZzPIv"}" for="${"name"}">Name</label>
      <input type="${"text"}" id="${"name"}" placeholder="${"Your name..."}" required class="${"s-V8qKnnzZzPIv"}"></fieldset>

    <fieldset class="${"s-V8qKnnzZzPIv"}"><label for="${"pronouns"}" class="${"s-V8qKnnzZzPIv"}">Pronouns</label>
      <input type="${"text"}" id="${"pronouns"}" name="${"pronouns"}" placeholder="${"They/she/he..."}" class="${"s-V8qKnnzZzPIv"}"></fieldset></fieldset>

  <fieldset class="${"s-V8qKnnzZzPIv"}"><label class="${"required s-V8qKnnzZzPIv"}" for="${"email"}">Email</label>
    <input type="${"text"}" id="${"email"}" name="${"email"}" placeholder="${"yourname@example.com"}" required class="${"s-V8qKnnzZzPIv"}"></fieldset>

  <fieldset class="${"s-V8qKnnzZzPIv"}"><label class="${"required s-V8qKnnzZzPIv"}" for="${"message"}">Message</label>
    <textarea id="${"message"}" name="${"message"}" placeholder="${"Write something..."}" required class="${"s-V8qKnnzZzPIv"}"></textarea></fieldset>

  <small style="${"color: var(--red);"}" class="${"s-V8qKnnzZzPIv"}">*Required field</small>

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
var contact_svelte_svelte_type_style_lang = "";
const css = {
  code: "h2 + *{margin-top:calc(1.5rem / 2)}.grid-2-col.s-8jg-3RXHNduc{display:grid;grid-template-columns:auto 30%;grid-column-gap:1.5rem}.col-2.s-8jg-3RXHNduc{border-left:1px dashed var(--blue);padding-left:1.5rem;font-size:0.9rem}dt.s-8jg-3RXHNduc{font-weight:bold}dt.s-8jg-3RXHNduc:not(:first-child){margin-top:calc(1.5rem / 2)}@media only screen and (max-width: 768px){.grid-2-col.s-8jg-3RXHNduc{grid-template-columns:auto;grid-template-rows:auto auto;grid-row-gap:calc(1.5rem * 2)}.col-2.s-8jg-3RXHNduc{border:none;padding:0}}.s-8jg-3RXHNduc{}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Contact" }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { simple: "true", spacing: "double" }, {}, {
        default: () => {
          return `<p class="${"s-8jg-3RXHNduc"}">Contact me any way you&#39;d like! However, if you are looking to get a commission, I would prefer it if you would contact me on either Telegram, Twitter, or Discord\u2014if you use any of those services\u2014because it will be much easier to discuss the details and to send work-in-progress pictures over direct messages rather than email, but that is not required.</p>
    <div class="${"grid-2-col s-8jg-3RXHNduc"}"><div class="${"s-8jg-3RXHNduc"}"><h2 class="${"s-8jg-3RXHNduc"}">Email</h2>
        ${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}</div>
      <dl class="${"col-2 s-8jg-3RXHNduc"}"><h2 class="${"s-8jg-3RXHNduc"}">Social</h2><dt class="${"s-8jg-3RXHNduc"}">Twitter</dt><dd class="${"s-8jg-3RXHNduc"}"><a${add_attribute("href", socialLinks.twitter, 0)} class="${"s-8jg-3RXHNduc"}">@GracieArt</a></dd><dt class="${"s-8jg-3RXHNduc"}">Telegram</dt><dd class="${"s-8jg-3RXHNduc"}"><a${add_attribute("href", socialLinks.telegram, 0)} class="${"s-8jg-3RXHNduc"}">@GracieArt</a></dd><dt class="${"s-8jg-3RXHNduc"}">Discord</dt><dd class="${"s-8jg-3RXHNduc"}"><a${add_attribute("href", socialLinks.discord, 0)} class="${"s-8jg-3RXHNduc"}">GracieArt#1312</a></dd></dl></div>`;
        }
      })}`;
    }
  })}`;
});
export { Contact as default };
