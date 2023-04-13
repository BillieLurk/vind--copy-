export default {
  name: "pageBuilder",
  type: "object",
  title: "Page builder",
  fields: [
    {
      name: "navBright",
      type: "boolean",
      title: "Bright navbar",
    },
    {
      name: "builder",
      type: "array",
      title: " ",
      of: [
        {
          type: "hero",
        }, // hero.js (same applies for the other types)
        {
          type: "textAndImage",
        },
        {
          type: "textBlock",
        },

        {
          type: "greeting",
        },
        {
          type: "linkBlock",
        },
        {
          type: "download",
        },
        {
          type: "explosion",
        },
        {
          type: "simpleHeader",
        },
        {
          type: "header",
        },
        {
          type: "gallery"
        },
        {
          type: "owners",
        },
        {
          type: "timeline",
        },
        // etc...
      ],
    },
  ],
};
