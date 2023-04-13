import callToAction from "../callToAction";

export default {
    name: "greeting",
    type: "object",
    title: "Greeting",
    description: "Tell us about yourself",
    fields: [
      {
        name: "displayName",
        title: "Display Name",
        type: "string",
        initialValue: "Greeting",
        readOnly: true,
        hidden: true,
      },      
      {
        name: "component",
        title: "Component",
        type: "string",
        initialValue: "greeting",
        readOnly: true,
        hidden: true,
      },
      {
        name: "headerText",
        type: "text",
        title: "Header Text",
      },
      {
        name: "callToActionPreText",
        type: "string",
        title: "Call to action pre-text"
      },
      {
        name: "callToAction",
        type: "callToAction"
      }
    ]
  }