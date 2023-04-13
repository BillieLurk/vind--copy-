export default {
    name: "download",
    type: "object",
    title: "Download button",
    fields: [
      {
        name: "text",
        type: "string",
        title: "Text",
      },
      {
        name: "file",
        title: "File",
        type: "file",
      },
      {
        title: "Color",
        type: "string",
        name: "color",
        options: {
          list: ["white", "dark"],
        },
      },
      {
        name: "displayName",
        title: "Display Name",
        type: "string",
        initialValue: "Download",
        readOnly: true,
        hidden: true,
      },
      {
        name: "component",
        title: "Component",
        type: "string",
        initialValue: "download",
        readOnly: true,
        hidden: true,
      },
    ],
  };
  