import { c as create_ssr_component, f as add_attribute, e as escape, n as null_to_empty, v as validate_component } from "../../chunks/index-0ee30357.js";
import { P as Page, S as Section } from "../../chunks/Page-b367a379.js";
import { s as socialLinks } from "../../chunks/social-links-dba47162.js";
import { F as FlexCols } from "../../chunks/FlexCols-7124888f.js";
import { S as SpacedDiv } from "../../chunks/SpacedDiv-a3cc0b62.js";
var Button_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "button.svelte-d48683:hover{transform:scale(1.15)}button.svelte-d48683:active{transform:scale(1)}button.svelte-d48683{transition:transform 0.1s;padding:3px 12px 5px;font-weight:bold}.big.svelte-d48683{font-size:1.2rem;padding:5px 25px 7px 25px}",
  map: null
};
const Button = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "var(--dark-blue)" } = $$props;
  let { background = "white" } = $$props;
  let { border = "0" } = $$props;
  let { borderColor = "none" } = $$props;
  let { id = "" } = $$props;
  let { size = "small" } = $$props;
  let { rounded = "var(--rounded-2)" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.background === void 0 && $$bindings.background && background !== void 0)
    $$bindings.background(background);
  if ($$props.border === void 0 && $$bindings.border && border !== void 0)
    $$bindings.border(border);
  if ($$props.borderColor === void 0 && $$bindings.borderColor && borderColor !== void 0)
    $$bindings.borderColor(borderColor);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.rounded === void 0 && $$bindings.rounded && rounded !== void 0)
    $$bindings.rounded(rounded);
  $$result.css.add(css$2);
  return `<button${add_attribute("id", id, 0)} class="${escape(null_to_empty(size)) + " svelte-d48683"}"${add_attribute("style", `color: ${color};background: ${background};border: ${border} ${borderColor} solid;border-radius: ${rounded};`, 0)}>${slots.default ? slots.default({}) : ``}
</button>`;
});
var ContactForm_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".required.svelte-a7aypw.svelte-a7aypw:after{content:'*';color:var(--red)}form.svelte-a7aypw.svelte-a7aypw{display:flex;flex-direction:column}form.svelte-a7aypw >*:not(:first-child){margin-top:var(--margin)}form.svelte-a7aypw #submit{width:-webkit-min-content;width:-moz-min-content;width:min-content}.horizontal.svelte-a7aypw.svelte-a7aypw{display:flex}.horizontal.svelte-a7aypw>.svelte-a7aypw:not(:last-child){margin-right:var(--margin)}label.svelte-a7aypw.svelte-a7aypw,input.svelte-a7aypw.svelte-a7aypw,textarea.svelte-a7aypw.svelte-a7aypw,fieldset.svelte-a7aypw.svelte-a7aypw{display:block;width:100%}input.svelte-a7aypw.svelte-a7aypw,textarea.svelte-a7aypw.svelte-a7aypw{border-color:var(--blue);margin-top:4px}textarea.svelte-a7aypw.svelte-a7aypw{height:200px}label.svelte-a7aypw.svelte-a7aypw{color:var(--dark-blue)}",
  map: null
};
const ContactForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<form target="${"_blank"}" action="${"https://formsubmit.co/mail@graciebell.art"}" method="${"post"}" class="${"svelte-a7aypw"}"><fieldset class="${"horizontal svelte-a7aypw"}"><fieldset class="${"svelte-a7aypw"}"><label class="${"required svelte-a7aypw"}" for="${"name"}">Name</label>
      <input type="${"text"}" id="${"name"}" placeholder="${"Your name..."}" required class="${"svelte-a7aypw"}"></fieldset>

    <fieldset class="${"svelte-a7aypw"}"><label for="${"pronouns"}" class="${"svelte-a7aypw"}">Pronouns</label>
      <input type="${"text"}" id="${"pronouns"}" name="${"pronouns"}" placeholder="${"They/she/he..."}" class="${"svelte-a7aypw"}"></fieldset></fieldset>

  <fieldset class="${"svelte-a7aypw"}"><label class="${"required svelte-a7aypw"}" for="${"email"}">Email</label>
    <input type="${"text"}" id="${"email"}" name="${"email"}" placeholder="${"yourname@example.com"}" required class="${"svelte-a7aypw"}"></fieldset>

  <fieldset class="${"svelte-a7aypw"}"><label class="${"required svelte-a7aypw"}" for="${"message"}">Message</label>
    <textarea id="${"message"}" name="${"message"}" placeholder="${"Write something..."}" required class="${"svelte-a7aypw"}"></textarea></fieldset>

  <small style="${"color: var(--red);"}">*Required field</small>

  ${validate_component(Button, "Button").$$render($$result, {
    id: "submit",
    background: "var(--dark-blue)",
    color: "white",
    size: "big",
    rounded: "var(--rounded-1)"
  }, {}, {
    default: () => {
      return `Send
  `;
    }
  })}
</form>`;
});
var contact_svelte_svelte_type_style_lang = "";
const css = {
  code: ".email-form.svelte-e62e5b{width:100%}.col-1.svelte-e62e5b{flex:2 1;min-width:75%}.col-1.svelte-e62e5b h2+*{margin-top:var(--half-margin)}.col-2.svelte-e62e5b{flex:1 1;justify-content:left}dt.svelte-e62e5b{font-weight:bold;margin-top:var(--half-margin)}",
  map: null
};
const Contact = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(Page, "Dfs.Page").$$render($$result, { title: "Contact" }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { simple: "true", spacing: "double" }, {}, {
        default: () => {
          return `<p>Contact me any way you&#39;d like! However, if you are looking to get a commission, I would prefer it if you would contact me on either Telegram, Twitter, or Discord\u2014if you use any of those services\u2014because it will be much easier to discuss the details and to send work-in-progress pictures over direct messages rather than email, but that is not required.</p>

    ${validate_component(FlexCols, "FlexCols").$$render($$result, {
            colGap: "var(--double-margin)",
            rowGap: "var(--double-margin)"
          }, {}, {
            default: () => {
              return `<div class="${"col-1 svelte-e62e5b"}"><div class="${"email-form svelte-e62e5b"}"><h2>Email</h2>
          ${validate_component(ContactForm, "ContactForm").$$render($$result, {}, {}, {})}</div></div>

      <div class="${"col-2 svelte-e62e5b"}"><dl class="${"other-contacts"}"><h2>Social</h2>${validate_component(SpacedDiv, "SpacedDiv").$$render($$result, { spacing: "half" }, {}, {
                default: () => {
                  return `<div class="${"contact-item"}"><dt class="${"svelte-e62e5b"}">Twitter</dt>
              <dd><a${add_attribute("href", socialLinks.twitter, 0)}>@GracieArt</a></dd></div>
            <div class="${"contact-item"}"><dt class="${"svelte-e62e5b"}">Telegram</dt>
              <dd><a${add_attribute("href", socialLinks.telegram, 0)}>@GracieArt</a></dd></div>
            <div class="${"contact-item"}"><dt class="${"svelte-e62e5b"}">Discord</dt>
              <dd><a${add_attribute("href", socialLinks.discord, 0)}>GracieArt#1312</a></dd></div>`;
                }
              })}</dl></div>`;
            }
          })}`;
        }
      })}`;
    }
  })}`;
});
export { Contact as default };
