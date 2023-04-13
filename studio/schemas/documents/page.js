export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    description: "Here you can create the pages of the site",
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            required: true,
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            required: true,
            description: "Needed for the page to be generated",
            options: {
                source: "title",
                maxLength: 96,
            }
        },
        
        {
            title: "Builder",
            name: "builder",
            type: "storyBuilder"
        },
    ]
}