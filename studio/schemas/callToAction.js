export default {
  name: "callToAction",
  type: "object",
  title: "Call To Action",
  fields: [
    {
      name: "displayName",
      title: "Display Name",
      type: "string",
      initialValue: "Call to action",
      readOnly: true,
      hidden: true,
    },    
    {
      name: "component",
      title: "Component",
      type: "string",
      initialValue: "callToAction",
      readOnly: true,
      hidden: true,
    },
    {
      title: "Text",
      type: "string",
      name: "label",
    },
    {
      title: "To",
      type: "url",
      name: "to",
      validation: Rule => Rule.uri({
        allowRelative: "true"
      })
    },
    {
      title: "Color",
      type: "string",
      name: "color",
      options: {
        list: ["white", "dark"],
      },
    },
  ],
};
