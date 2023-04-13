export default {
  name: "gallery",
  type: "object",
  title: "Image Gallery",
  fields: [
    {
      name: "displayName",
      title: "Display Name",
      type: "string",
      initialValue: "Image Gallery",
      readOnly: true,
      hidden: true,
    },
    {
      name: "component",
      title: "Component",
      type: "string",
      initialValue: "gallery",
      readOnly: true,
      hidden: true,
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          name: "image",
          title: "Image",
        },
      ],
    },
  ],
};
