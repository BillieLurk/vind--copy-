export default {
  name: "storyGallery",
  type: "object",
  title: "Story Gallery",
  fields: [
    {
      name: "displayName",
      title: "Display Name",
      type: "string",
      initialValue: "Story Gallery",
      readOnly: true,
      hidden: true,
    },    
    {
      name: "component",
      title: "Component",
      type: "string",
      initialValue: "stories",
      readOnly: true,
      hidden: true,
    },
    {
      name: "title",
      type: "string",
      title: "Title",
    },
  ],
};
