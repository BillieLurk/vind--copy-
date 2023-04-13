export default {
  title: "LandingPage",
  name: "siteLandingPage",
  type: "document",
  description: "This is the content of the main landing page, all other pages are under the pages tab",

  fields: [
    {
      name: "tagline",
      type: "text",
      title: "Tagline",
      validation: Rule => Rule.required(),
      description: "This is the text that goes over the hero video",
    },
    {
      name: "pageBuilder",
      type: "pageBuilder",
      title: "Page builder",
      description: "This is where you create the content of the page",
    },
  ],
};
