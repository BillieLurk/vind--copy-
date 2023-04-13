export default {
    name: "header",
    type: "object",
    title: "Header",
    fields: [
      {
        name: "displayName",
        title: "Display Name",
        type: "string",
        initialValue: "Header",
        readOnly: true,
        hidden: true,
      },      
      {
        name: "component",
        title: "Component",
        type: "string",
        initialValue: "header",
        readOnly: true,
        hidden: true,
      },
      {
        name: "title",
        type: "string",
        title: "Title",
      },
      {
        title: "Background",
        type: "image",
        name: "background",
        options: {
            hotspot: true
        }
      }
    
    ]
  }