export default {
    name: "timeline",
    type: "object",
    title: "Timeline",
    fields: [
      {
        name: "displayName",
        title: "Display Name",
        type: "string",
        initialValue: "Timeline",
        readOnly: true,
        hidden: true,
      },    
      {
        name: "title",
        type: "string",
        title: "Title"
      },
      {
        name: "component",
        title: "Component",
        type: "string",
        initialValue: "timeline",
        readOnly: true,
        hidden: true,
      },
      {
        name: 'events',
        type: 'array',
        title: 'Events',
        description: "Here all the entries in the timeline will be displayed",
        of: [
          {
            type: 'event',
          }, // hero.js (same applies for the other types)
          
        ]
      }
    ]
  }