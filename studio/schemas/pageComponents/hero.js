export default {
    name: "hero",
    type: "object",
    title: "Hero",
    fields: [
      {
        name: "displayName",
        title: "Display Name",
        type: "string",
        initialValue: "Hero",
        readOnly: true,
        hidden: true,
      },      
      {
        name: 'tagline',
        type: 'string',
        title: 'Tagline'
      },
      {
        name: "component",
        title: "Component",
        type: "string",
        initialValue: "hero",
        readOnly: true,
        hidden: true,
      },
    ]
  }