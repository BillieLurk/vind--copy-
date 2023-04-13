

export default {
  name: 'siteRoutes',
  type: 'document',
  title: 'Site Routes',
  fields: [
 
    {
      name: 'routes',
      title: 'Routes',
      type: 'array',
      of: [{
        name: 'route',
        type: 'object',
        title: 'Route',
        fields: [
          {
            type: "string",
            name: "title",
            title: "Title"
          },
          {
            type: "url",
            title: "URL",
            name: "url",
            validation: Rule => Rule.uri({
              allowRelative: "true"
            })
          }
        ]
      }]
    }

  ]
}