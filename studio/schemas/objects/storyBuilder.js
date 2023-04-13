export default {
  name: "storyBuilder",
  type: "object",
  title: "Story builder",
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
          type: "explosion",
        },
        {
          type: "linkBlock",
        },
        {
          type: "simpleHeader",
        },
        {
          type: "gallery",
        },
        {
          type: "header",
        },
        {
          type: "owners",
        },
        {
          type: "download",
        },
        {
          type: "timeline",
        },
        {
          type: "textBlockExtraInfo",
        },
        // etc...
      ],
    },
  ],
};
