export default {
    name: 'story',
    type: 'document',
    title: 'Story',
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
            name: 'leadText',
            type: 'string',
            title: 'Lead Text',
            description: 'This field will be displayed on the thumbnail in the story gallery'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true,
            }
        },
        {
            title: "Builder",
            name: "builder",
            type: "storyBuilder"
        },
    ]
}