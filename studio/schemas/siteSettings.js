export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Site Title",
      type: "string",
      description: "This is the title of the site",
    },
    {
      name: "description",
      title: "Meta Description",
      type: "text",
      description: "Description for search engines and social media",
    },
    {
      name: "navBarRoutes",
      title: "Nav Bar Routes",
      type: "array",
      description: "These are the pages that will appear in the nav bar",
      of: [
        {
          name: "page",
          type: "reference",
          title: "Page",
          to: [{ type: "page" }],
        },
      ],
    },
    {
      name: "footer",
      title: "Footer",
      type: "object",
      description: "Settings for the footer",
      fields: [
        {
          name: "copyright",
          title: "Copyright text",
          type: "string",
        },
        {
          name: "portableText",
          type: "simpleText",
          title: "Bottom text for the footer",
          
        },
        {
          name: "footerRoutes",
          title: "Footer Routes",
          type: "array",
          description: "These are the pages that will appear in the footer",
          of: [
            {
              name: "page",
              type: "reference",
              title: "Page",
              to: [{ type: "page" }],
            },
          ],
        },
      ],
    },
  ],
};
