import { c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, d as each } from "../../chunks/index-1c4ec740.js";
import { P as Page, S as Section } from "../../chunks/Page-c010a59d.js";
import { S as ScrollBox, F as Flex2Col } from "../../chunks/ScrollBox-763b0085.js";
/* empty css                                                            */const thumbsDir = "/images/thumbs/comms/";
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
  thumbsDir,
  charArt,
  extras
};
var CommCard_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".comm-card.s-vmhqFn4huYjj.s-vmhqFn4huYjj{width:min-content}img.s-vmhqFn4huYjj.s-vmhqFn4huYjj{display:block;width:200px;border-radius:20px}.info.s-vmhqFn4huYjj>.s-vmhqFn4huYjj{margin-top:calc(1.5rem / 2)}.notes.s-vmhqFn4huYjj.s-vmhqFn4huYjj{display:block;font-size:small}h4.s-vmhqFn4huYjj.s-vmhqFn4huYjj{color:var(--dark-pink)}.s-vmhqFn4huYjj.s-vmhqFn4huYjj{}",
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
  return `<div class="${"comm-card s-vmhqFn4huYjj"}"><img${add_attribute("src", thumb, 0)} alt="${""}" class="${"s-vmhqFn4huYjj"}">
  <div class="${"info s-vmhqFn4huYjj"}"><h4 class="${"s-vmhqFn4huYjj"}">${escape(name)}</h4>
    <span class="${"price s-vmhqFn4huYjj"}">${escape(price)}</span>
    ${notes ? `<span class="${"notes s-vmhqFn4huYjj"}">${escape(notes)}</span>` : ``}</div>
</div>`;
});
var CommsQueue_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".queue-container.s-NJ2MiJqFaJm6.s-NJ2MiJqFaJm6{transition:opacity 1s}.queue-container.hidden.s-NJ2MiJqFaJm6.s-NJ2MiJqFaJm6{opacity:0}.queue-item.s-NJ2MiJqFaJm6.s-NJ2MiJqFaJm6{width:400px}.queue-item.s-NJ2MiJqFaJm6.s-NJ2MiJqFaJm6:not(:first-child){margin-top:calc(1.5rem / 2);border-top:1px dashed var(--black);padding-top:calc(1.5rem / 2)}.queue-item.s-NJ2MiJqFaJm6 .name.s-NJ2MiJqFaJm6,.queue-item.s-NJ2MiJqFaJm6 .labels.s-NJ2MiJqFaJm6{display:block}.queue-item.s-NJ2MiJqFaJm6 .labels.s-NJ2MiJqFaJm6{font-size:small;color:var(--dark-pink)}@media only screen and (max-width: 768px){.queue-item.s-NJ2MiJqFaJm6.s-NJ2MiJqFaJm6{width:100%}}.s-NJ2MiJqFaJm6.s-NJ2MiJqFaJm6{}",
  map: null
};
const CommsQueue = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let queue = [];
  $$result.css.add(css$1);
  return `<div class="${"queue-container " + escape("hidden") + " s-NJ2MiJqFaJm6"}">${validate_component(ScrollBox, "ScrollBox").$$render($$result, {
    accent: "black",
    height: "short",
    style: "thin"
  }, {}, {
    default: () => {
      return `${each(queue, (comm) => {
        return `<div class="${"queue-item s-NJ2MiJqFaJm6"}"><span class="${"name s-NJ2MiJqFaJm6"}">${escape(comm.name)}</span>
        <span class="${"labels s-NJ2MiJqFaJm6"}">${escape(comm.labels.map((l) => l.name).join(","))}</span>
      </div>`;
      })}`;
    }
  })}
</div>`;
});
var comms_svelte_svelte_type_style_lang = "";
const css = {
  code: "li.s-sk8DhiaNvUCs+li.s-sk8DhiaNvUCs,ul.s-sk8DhiaNvUCs.s-sk8DhiaNvUCs{margin-top:calc(1.5rem / 2)}.list.s-sk8DhiaNvUCs.s-sk8DhiaNvUCs{font-size:small}.list.s-sk8DhiaNvUCs.s-sk8DhiaNvUCs:not(:first-child){margin-top:1.5rem}.comm-option.s-sk8DhiaNvUCs.s-sk8DhiaNvUCs{display:flex;flex-direction:column;align-items:center}.option-title.s-sk8DhiaNvUCs+.s-sk8DhiaNvUCs{margin-top:calc(1.5rem / 2)}.choices.s-sk8DhiaNvUCs.s-sk8DhiaNvUCs{display:flex;justify-content:center;flex-wrap:wrap}.choices.s-sk8DhiaNvUCs >*{margin:calc(1.5rem / 2)}.s-sk8DhiaNvUCs.s-sk8DhiaNvUCs{}",
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
          return `${validate_component(Flex2Col, "Flex2Col").$$render($$result, { halfnhalf: "true", margin: "double" }, {}, {
            "col-2": () => {
              return `<div slot="${"col-2"}" class="${"s-sk8DhiaNvUCs"}"><div class="${"list s-sk8DhiaNvUCs"}"><h3 class="${"s-sk8DhiaNvUCs"}">I Can Draw:</h3>
        <ul class="${"s-sk8DhiaNvUCs"}"><li class="${"s-sk8DhiaNvUCs"}">Characters you have permission to use</li>
          <li class="${"s-sk8DhiaNvUCs"}">Fan characters and OCs</li>
          <li class="${"s-sk8DhiaNvUCs"}">Anthropomorphic characters are my specialty, but I&#39;m open to most other types of creatures</li>
          <li class="${"s-sk8DhiaNvUCs"}">Safe content or adult content</li></ul></div>

      <div class="${"list s-sk8DhiaNvUCs"}"><h3 class="${"s-sk8DhiaNvUCs"}">I Cannot Draw:</h3>
        <ul class="${"s-sk8DhiaNvUCs"}"><li class="${"s-sk8DhiaNvUCs"}">Characters you don&#39;t have permission to use</li>
          <li class="${"s-sk8DhiaNvUCs"}">Feral animals (because I haven&#39;t learned how)</li>
          <li class="${"s-sk8DhiaNvUCs"}">Most illegal activities and offensive themes</li>
          <li class="${"s-sk8DhiaNvUCs"}">If you are unsure if your idea is something I can draw, don&#39;t be shy to ask me about it</li></ul></div></div>`;
            },
            "col-1": () => {
              return `<div slot="${"col-1"}" class="${"s-sk8DhiaNvUCs"}"><div class="${"list s-sk8DhiaNvUCs"}"><h3 class="${"s-sk8DhiaNvUCs"}">General Terms:</h3>
        <ul class="${"s-sk8DhiaNvUCs"}"><li class="${"s-sk8DhiaNvUCs"}">I will not start working on the drawing until I am paid in full</li>
          <li class="${"s-sk8DhiaNvUCs"}">You can use the final drawing however you want as long as I&#39;m credited where appropriate</li>
          <li class="${"s-sk8DhiaNvUCs"}">Unless you request to keep the drawing private, there is a good chance I will be posting it online, including it in my portfolio, and using it to advertise my commissions</li>
          <li class="${"s-sk8DhiaNvUCs"}">I will show you work-in-progress pictures as I am sketching, giving you the opportunity to provide feedback</li>
          <li class="${"s-sk8DhiaNvUCs"}">Once I finish the final sketch, I will wait until you&#39;ve explicitly approved it before proceeding, after which I will not make any more adjustments to the character&#39;s pose</li></ul></div></div>`;
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
            return `<div class="${"comm-option s-sk8DhiaNvUCs"}"><h3 class="${"option-title s-sk8DhiaNvUCs"}">${escape(i + 1)}. Choose the ${escape(opt.name)}</h3>
        <div class="${"choices s-sk8DhiaNvUCs"}">${each(opt.choices, (choice) => {
              return `${validate_component(CommCard, "CommCard").$$render($$result, {
                name: choice.name,
                thumb: commsData.thumbsDir + choice.thumb,
                notes: choice.notes,
                price: (i > 0 ? "+ " : "") + "$" + choice.price
              }, {}, {})}`;
            })}</div>
      </div>`;
          })}
    <div class="${"comm-option s-sk8DhiaNvUCs"}"><h3 class="${"option-title s-sk8DhiaNvUCs"}">4. Extra Characters</h3>
      <p class="${"s-sk8DhiaNvUCs"}">+ $10 for each additional character</p></div>`;
        }
      })}

  ${validate_component(Section, "Dfs.Section").$$render($$result, {
        heading: "Other Prices",
        spacing: "double",
        simple: "true"
      }, {}, {
        default: () => {
          return `<div class="${"comm-option s-sk8DhiaNvUCs"}"><div class="${"choices s-sk8DhiaNvUCs"}">${each(commsData.extras, (opt, i) => {
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
