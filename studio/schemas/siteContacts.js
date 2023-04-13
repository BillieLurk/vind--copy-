export default {
    name: 'siteContacts',
    type: 'document',
    title: 'Site Contacts',
    description: "This is the content of the contact page",
    fields: [
        {
            name: "address",
            title: "Address",
            type: "array",
            of: [{
                type: "document",
                fields: [
                    {
                        name: "label",
                        title: "Label",
                        type: "string",
                    },
                    {
                        name: "street",
                        title: "Street",
                        type: "string",
                    },
                    {
                        name: "postal",
                        title: "Postal code",
                        type: "string",
                    },
                    {
                        name: "city",
                        title: "City",
                        type: "string",
                    },
                    {
                        name: "country",
                        title: "Country",
                        type: "string",
                    },
                ]
            }]

        },
        {
            name: "email",
            title: "Email",
            type: "array",
            of: [{ type: "string" }]
        },
        {
            name: "person",
            title: "Person",
            type: "array",
            of: [{
                type: "document",
                fields: [
                    {
                        name: "title",
                        title: "Title",
                        type: "string",
                    },
                    {
                        name: "name",
                        title: "Name",
                        type: "string",
                    },
                    {
                        name: "email",
                        title: "Email",
                        type: "string",
                    },
                    {
                        name: "phone",
                        title: "Phone Nummer",
                        type: "string",
                    },
                ]
            }]

        }
    ]
}