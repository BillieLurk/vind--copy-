export default {
    name: "bodyText",
    type: "object",
    title: "Body text",
    fields: [
      {
        name: "displayName",
        title: "Display Name",
        type: "string",
        initialValue: "Body Text",
        readOnly: true,
        hidden: true,
      },    
      {
        name: "component",
        title: "Component",
        type: "string",
        initialValue: "bodyText",
        readOnly: true,
        hidden: true,
      },
      {
        name: "text",
        title: "Text",
        type: "text",
      }
    ]
  }