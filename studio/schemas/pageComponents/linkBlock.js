export default {
    name: "linkBlock",
    type: "object",
    title: "Link block",
    fields: [
        {
            name: "displayName",
            title: "Display Name",
            type: "string",
            initialValue: "Link Block",
            readOnly: true,
            hidden: true,
          },      
      
      {
        name: "title",
        title: "Link title",
        type: "string",
      },
      {
        name: "linkText",
        title: "Link text",
        type: "string",
        
      },
      {
        name: "to",
        title: "URL",
        type: "url",
        validation: Rule => Rule.uri({
            allowRelative: "true"
          })
      },
      {
        name: "component",
        title: "Component",
        type: "string",
        initialValue: "linkBlock",
        readOnly: true,
        hidden: true,
      },
    ],
  };
  