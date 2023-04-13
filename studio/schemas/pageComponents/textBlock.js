export default {
  name: "textBlock",
  type: "object",
  title: "Text block",
  fields: [
    {
      name: "displayName",
      title: "Display Name",
      type: "string",
      initialValue: "Text block",
      readOnly: true,
      hidden: true,
    },
    {
      name: "component",
      title: "Component",
      type: "string",
      initialValue: "textBlock",
      readOnly: true,
      hidden: true,
    },
    {
      name: "headerText",
      title: "Header Text",
      type: "text",
      description:
        "The text that will be displayed in the header of the text block",
    },
    {
      name: "builder",
      type: "array",
      title: "Builder",
      description:
        "Here you can add the different ingress components that will be displayed in the text block",
      of: [
        {
          type: "ingress",
        },
        {
          type: "callToAction",
        },
        {
          type: "download",
        }, // hero.js (same applies for the other types)
        
      ],
    },
  ],
};
