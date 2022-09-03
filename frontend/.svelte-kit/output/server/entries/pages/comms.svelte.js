import { c as create_ssr_component, v as validate_component, e as escape, i as is_promise, j as noop, d as each } from "../../chunks/index-3ede4686.js";
import { P as Page, S as Section } from "../../chunks/Page-3b245b46.js";
import { I as Image } from "../../chunks/Image-de277fa9.js";
import { F as FlexCols } from "../../chunks/FlexCols-9f55f005.js";
import { S as ScrollBox } from "../../chunks/ScrollBox-7d1e4b05.js";
import "../../chunks/Box-7abaf6cf.js";
const queueUrl = "https://api.trello.com/1/lists/5f63a1e27578fe449b995c56/cards";
const thumbsDir = "/images/thumbs/comms/";
const charArt = {
  extraCharPrice: "10",
  options: [
    {
      name: "View",
      choices: [
        {
          name: "Close-up",
          price: "25",
          thumb: "view_closeup.jpg",
          notes: "",
          code: "CU"
        },
        {
          name: "Medium",
          price: "30",
          thumb: "view_medium.jpg",
          notes: "",
          code: "M"
        },
        {
          name: "Wide",
          price: "40",
          thumb: "view_wide.jpg",
          notes: "",
          code: "W"
        }
      ]
    },
    {
      name: "Background",
      choices: [
        {
          name: "Simple",
          price: "0",
          thumb: "bg_simple.jpg",
          notes: "",
          code: ""
        },
        {
          name: "Detailed",
          price: "10",
          thumb: "bg_detailed.jpg",
          notes: "May cost more or less depending on the complexity of the order",
          code: "BG"
        },
        {
          name: "Photo",
          price: "0",
          thumb: "bg_photo.jpg",
          notes: "You have to provide the photo",
          code: "PH"
        }
      ]
    },
    {
      name: "Render",
      choices: [
        {
          name: "Sketch",
          price: "0",
          thumb: "render_sketch.jpg",
          notes: "",
          code: "SK"
        },
        {
          name: "Flat Color",
          price: "5",
          thumb: "render_flat.jpg",
          notes: "",
          code: "FC"
        },
        {
          name: "Shaded",
          price: "10",
          thumb: "render_shaded.jpg",
          notes: "",
          code: "S"
        }
      ]
    }
  ]
};
const extras = [
  {
    name: "Vector Face",
    price: "20",
    thumb: "xtra_vector_face.jpg",
    notes: "Choose between lined or lineless",
    code: "VEC"
  },
  {
    name: "Social Stickers",
    price: "20",
    unit: "sticker",
    thumb: "xtra_stickers.jpg",
    notes: "First order must have at least 3 stickers, but may have fewer in future purchases.",
    code: "SS"
  },
  {
    name: "Ref Sheet",
    price: "50",
    thumb: "xtra_ref.jpg",
    notes: "May cost more or less depending on the complexity of the order",
    code: "REF"
  },
  {
    name: "Graphic Design",
    price: "40",
    thumb: "xtra_graphic_design.jpg",
    notes: "May cost more or less depending on the complexity of the order"
  }
];
var commsData = {
  queueUrl,
  thumbsDir,
  charArt,
  extras
};
var CommCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".comm-card.svelte-1u80wih.svelte-1u80wih{width:-webkit-min-content;width:-moz-min-content;width:min-content}.info.svelte-1u80wih>.svelte-1u80wih{margin-top:var(--half-margin)}.notes.svelte-1u80wih.svelte-1u80wih{display:block;font-size:small}h4.svelte-1u80wih.svelte-1u80wih{color:var(--dark-pink)}",
  map: null
};
const CommCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { thumb } = $$props;
  let { name } = $$props;
  let { price } = $$props;
  let { notes } = $$props;
  if ($$props.thumb === void 0 && $$bindings.thumb && thumb !== void 0)
    $$bindings.thumb(thumb);
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.notes === void 0 && $$bindings.notes && notes !== void 0)
    $$bindings.notes(notes);
  $$result.css.add(css$2);
  return `<div class="${"comm-card svelte-1u80wih"}">${validate_component(Image, "Image").$$render($$result, {
    src: thumb,
    alt: "",
    style: "display:block; width:200px; border-radius:var(--rounded-3);"
  }, {}, {})}
  <div class="${"info svelte-1u80wih"}"><h4 class="${"svelte-1u80wih"}">${escape(name)}</h4>
    <span class="${"price svelte-1u80wih"}">${escape(price)}</span>
    ${notes ? `<span class="${"notes svelte-1u80wih"}">${escape(notes)}</span>` : ``}</div>
</div>`;
});
var CommsQueue_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".queue-container.svelte-10gqgtj.svelte-10gqgtj{width:75%;margin:auto}.queue-item.svelte-10gqgtj.svelte-10gqgtj{width:100%}.queue-item.svelte-10gqgtj.svelte-10gqgtj:not(:first-child){margin-top:var(--half-margin);border-top:1px dashed var(--black);padding-top:var(--half-margin)}.queue-item.svelte-10gqgtj .name.svelte-10gqgtj,.queue-item.svelte-10gqgtj .labels.svelte-10gqgtj{display:block}.queue-item.svelte-10gqgtj .labels.svelte-10gqgtj{font-size:small;color:var(--dark-pink)}@media only screen and (max-width: 768px){.queue-container.svelte-10gqgtj.svelte-10gqgtj{width:100%}}",
  map: null
};
const CommsQueue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="${"queue-container svelte-10gqgtj"}">${validate_component(ScrollBox, "ScrollBox").$$render($$result, {
    accent: "var(--black)",
    height: "320px",
    border: "var(--border-thin)"
  }, {}, {
    default: () => {
      return `${function(__value) {
        if (is_promise(__value)) {
          __value.then(null, noop);
          return `
      <p>Loading...</p>
    `;
        }
        return function(queue) {
          return `
      ${each(queue, (comm) => {
            return `<div class="${"queue-item svelte-10gqgtj"}"><span class="${"name svelte-10gqgtj"}">${escape(comm.name)}</span>
          <span class="${"labels svelte-10gqgtj"}">${escape(comm.labels.map((l) => l.name).join(", "))}</span>
        </div>`;
          })}
    `;
        }(__value);
      }(fetch(commsData.queueUrl).then((res) => res.json()))}`;
    }
  })}
</div>`;
});
var comms_svelte_svelte_type_style_lang = "";
const css = {
  code: ".column.svelte-av9zi3.svelte-av9zi3{flex:1 1 50%;min-width:25ch}li.svelte-av9zi3+li.svelte-av9zi3,ul.svelte-av9zi3.svelte-av9zi3{margin-top:var(--half-margin)}.list.svelte-av9zi3.svelte-av9zi3{font-size:small}.list.svelte-av9zi3.svelte-av9zi3:not(:first-child){margin-top:var(--margin)}.comm-option.svelte-av9zi3.svelte-av9zi3{display:flex;flex-direction:column;align-items:center}.option-title.svelte-av9zi3+.svelte-av9zi3{margin-top:var(--half-margin)}.choices.svelte-av9zi3.svelte-av9zi3{display:flex;justify-content:center;flex-wrap:wrap}.choices.svelte-av9zi3 >*{margin:var(--half-margin)}",
  map: null
};
const Comms = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let innerWidth;
  $$result.css.add(css);
  innerWidth = 0;
  return `


${validate_component(Page, "Dfs.Page").$$render($$result, {
    title: innerWidth < 600 ? "Comms." : "Commissions"
  }, {}, {
    default: () => {
      return `${validate_component(Section, "Dfs.Section").$$render($$result, { heading: "Queue", simple: "true" }, {}, {
        default: () => {
          return `${validate_component(CommsQueue, "CommsQueue").$$render($$result, {}, {}, {})}`;
        }
      })}


  ${validate_component(Section, "Dfs.Section").$$render($$result, { heading: "Info", simple: "true" }, {}, {
        default: () => {
          return `${validate_component(FlexCols, "FlexCols").$$render($$result, { colGap: "var(--double-margin)" }, {}, {
            default: () => {
              return `<div class="${"column svelte-av9zi3"}" style="${"flex: 1;"}"><div class="${"list svelte-av9zi3"}"><h3>General Terms:</h3>
        <ul class="${"svelte-av9zi3"}"><li class="${"svelte-av9zi3"}">I will not start working until I am paid in full.</li>
          <li class="${"svelte-av9zi3"}">You have the right to use the finished work however you want, as long as you give me credit for creating it.</li>
          <li class="${"svelte-av9zi3"}">The finished work will be public and I may use it to advertise my commissions.</li>
          <li class="${"svelte-av9zi3"}">During the sketching process, I will share work-in-progress screenshots. This will be your opportunity to provide feedback. Please be specific and concise.</li>
          <li class="${"svelte-av9zi3"}">I will not accept any additions to the scene, changes to anything that differs from the sketch, or requests for alternate versions once the final sketch has been approved and I&#39;ve already moved forward with the final render.</li></ul></div></div>

    <div class="${"column svelte-av9zi3"}" style="${"flex: 1; flex-direction: column;"}"><div class="${"list svelte-av9zi3"}"><h3>I Can Draw:</h3>
        <ul class="${"svelte-av9zi3"}"><li class="${"svelte-av9zi3"}">Characters you have permission to use</li>
          <li class="${"svelte-av9zi3"}">Fan characters and OCs</li>
          <li class="${"svelte-av9zi3"}">Anthropomorphic characters</li>
          <li class="${"svelte-av9zi3"}">Safe content or adult content</li></ul></div>

      <div class="${"list svelte-av9zi3"}"><h3>I Cannot Draw:</h3>
        <ul class="${"svelte-av9zi3"}"><li class="${"svelte-av9zi3"}">Characters you don&#39;t have permission to use</li>
          <li class="${"svelte-av9zi3"}">Most non-anthro characters</li>
          <li class="${"svelte-av9zi3"}">Anything that grosses me out or makes me uncomfortable</li>
          <li class="${"svelte-av9zi3"}">I&#39;m not going to make a comprehensive list of things that make me uncomfortable, so please send me your idea and I&#39;ll tell you whether I&#39;d be willing to draw it or not.</li></ul></div></div>`;
            }
          })}`;
        }
      })}

  ${validate_component(Section, "Dfs.Section").$$render($$result, {
        heading: "Pricing",
        spacing: "double",
        simple: "true"
      }, {}, {
        default: () => {
          return `${each(commsData.charArt.options, (opt, i) => {
            return `<div class="${"comm-option svelte-av9zi3"}"><h3 class="${"option-title svelte-av9zi3"}">${escape(i + 1)}. Choose the ${escape(opt.name)}</h3>
        <div class="${"choices svelte-av9zi3"}">${each(opt.choices, (choice) => {
              return `${validate_component(CommCard, "CommCard").$$render($$result, {
                name: choice.name,
                thumb: commsData.thumbsDir + choice.thumb,
                notes: choice.notes,
                price: (i > 0 ? "+ " : "") + "$" + choice.price
              }, {}, {})}`;
            })}</div>
      </div>`;
          })}
    <div class="${"comm-option svelte-av9zi3"}"><h3 class="${"option-title svelte-av9zi3"}">4. Extra Characters</h3>
      <p class="${"svelte-av9zi3"}">+ $10 for each additional character</p></div>`;
        }
      })}

  ${validate_component(Section, "Dfs.Section").$$render($$result, {
        heading: "Other Prices",
        spacing: "double",
        simple: "true"
      }, {}, {
        default: () => {
          return `<div class="${"comm-option svelte-av9zi3"}"><div class="${"choices svelte-av9zi3"}">${each(commsData.extras, (opt, i) => {
            return `${validate_component(CommCard, "CommCard").$$render($$result, {
              name: opt.name,
              thumb: commsData.thumbsDir + opt.thumb,
              notes: opt.notes,
              price: "$" + opt.price + (opt.unit ? " per " + opt.unit : "")
            }, {}, {})}`;
          })}
        ${validate_component(CommCard, "CommCard").$$render($$result, {
            name: "Other Ideas?",
            thumb: commsData.thumbsDir + "xtra_other_ideas.png",
            notes: "",
            price: "Contact Me"
          }, {}, {})}</div></div>`;
        }
      })}`;
    }
  })}`;
});
export { Comms as default };
