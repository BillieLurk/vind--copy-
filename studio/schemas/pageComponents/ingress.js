export default {
  name: "ingress",
  type: "object",
  title: "Ingress",
  fields: [
    {
      name: "displayName",
      title: "Display Name",
      type: "string",
      initialValue: "Ingress",
      readOnly: true,
      hidden: true,
    },      
    {
      name: "component",
      title: "Component",
      type: "string",
      initialValue: "ingress",
      readOnly: true,
      hidden: true,
    },
    {
      name: "title",
      title: "Title Text",
      type: "text",
    },
    {
      name: 'portableText',
      type: 'array',
      title: 'Content',
      of: [
        {
          type: 'block'
        },
        
      ]
    },
    {
      name: "builder",
      type: "array",
      title: " ",
      of: [
        {
          type: "callToAction",
        },
        {
          type: "download",
        }
        // etc...
      ],
    },
  ],
};
