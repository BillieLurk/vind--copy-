export default {
    name: "contentBox",
    type: "object",
    title: "Content box",
    fields: [
      {
        name: "displayName",
        title: "Display Name",
        type: "string",
        initialValue: "Content box",
        readOnly: true,
        hidden: true,
      },    
      {
        name: "component",
        title: "Component",
        type: "string",
        initialValue: "contentBox",
        readOnly: true,
        hidden: true,
      },
      {
        name: 'contentBuilder',
        type: 'array',
        title: 'Content builder',
        of: [
          {
            type: 'ingress',
          }, // hero.js (same applies for the other types)
          
        ]
      }
    ]
  }