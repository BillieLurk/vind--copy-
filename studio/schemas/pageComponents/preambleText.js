export default {
    name: "preambleText",
    type: "object",
    title: "Preamble Text",
    fields: [
      {
        name: "displayName",
        title: "Display Name",
        type: "string",
        initialValue: "Preamble Text",
        readOnly: true,
        hidden: true,
      },    
      {
        name: "component",
        title: "Component",
        type: "string",
        initialValue: "preambleText",
        readOnly: true,
        hidden: true,
      },
      {
        name: "text",
        title: "Preamble",
        type: "text",
      }
    ]
  }