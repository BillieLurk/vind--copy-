export default {
  name: "event",
  type: "object",
  title: "Event",
  fields: [
    {
      name: "date",
      type: "string",
      title: "Date",
    },
    {
        name: "eventText",
        type: "text",
        title: "Event text"
    },
    {
      name: "displayName",
      title: "Display Name",
      type: "string",
      initialValue: "Event",
      readOnly: true,
      hidden: true,
    },
    {
      name: "component",
      title: "Component",
      type: "string",
      initialValue: "event",
      readOnly: true,
      hidden: true,
    },
  ],
};
