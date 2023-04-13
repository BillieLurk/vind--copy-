export default {
  name: "textAndImage",
  type: "object",
  title: "Text and image",
  fields: [
    {
      name: "displayName",
      title: "Display Name",
      type: "string",
      initialValue: "Text and image",
      readOnly: true,
      hidden: true,
    },
    {
      name: "component",
      title: "Component",
      type: "string",
      initialValue: "textAndImage",
      readOnly: true,
      hidden: true,
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "portableText",
      type: "simpleText",
      title: "Content",
      
    },
    {
      name: "background",
      type: "image",
      title: "background",
      options: {
        hotspot: true,
      },
    },
    {
      name: "alignText",
      type: "string",
      title: "Text alignment",
      options: {
        list: ["left", "right"],
      },
    },
    {
      name: "alt",
      type: "string",
      title: "Alternative text",
    },
    {
      name: "callToActionField",
      type: "callToAction",
      title: "Call To Action",
    },
  ],
};
