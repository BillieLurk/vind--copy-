export const headQuery = `
    *[_type == "siteSettings"]{
        title,
        description,
        footer
      }
    `;

export const storiesQuery = `
*[_type == "story"]{
  title,
  bodyText,
  headerText,
  image,
  information,
  leadText,
  slug,
  _id
}
`;



export const navSlugsQuery = `
*[_type == "siteSettings"] {
  
  navBarRoutes[]-> {slug, title}
  
}
`;

export const footerSlugsQuery = `
*[_type == "siteSettings"] {
  footer {
  footerRoutes[]-> {slug, title}
}
}


`;
