import S from "@sanity/desk-tool/structure-builder";

export default () =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("Settings")
        .child(
          S.document()
            .title("Settings")
            .schemaType("siteSettings")
            .documentId("siteSettings")
        ),
      S.listItem()
        .title("Contacts")
        .child(
          S.document()
            .title("Contacts")
            .schemaType("siteContacts")
            .documentId("siteContacts")
        ),
      
      S.listItem()
        .title("Landing page")
        .child(
          S.document()
            .title("Landing page")
            .schemaType("siteLandingPage")
            .documentId("siteLandingPage")
        ),

      ...S.documentTypeListItems().filter(
        (item) =>
          ![
            "siteSettings",
            "siteContacts",
            "siteRoutes",
            "siteLandingPage",
          ].includes(item.getId())
      ),
    ]);
