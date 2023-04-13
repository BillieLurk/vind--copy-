export default {
    name: "owners",
    type: "object",
    title: "Owners",
    fields: [
      {
        name: "displayName",
        title: "Display Name",
        type: "string",
        initialValue: "Owners",
        readOnly: true,
        hidden: true,
      },    
      {
        name: "component",
        title: "Component",
        type: "string",
        initialValue: "owners",
        readOnly: true,
        
      },
    ]
  }