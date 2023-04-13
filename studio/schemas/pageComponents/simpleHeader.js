export default {
    name: "simpleHeader",
    type: "object",
    title: "Simple Header",
    fields: [
      {
        name: "displayName",
        title: "Display Name",
        type: "string",
        initialValue: "Simple Header",
        readOnly: true,
        hidden: true,
      },      
      {
        name: "component",
        title: "Component",
        type: "string",
        initialValue: "simpleHeader",
        readOnly: true,
        hidden: true,
      },
      {
        name: "title",
        type: "string",
        title: "Title",
      },
    
    ]
  }