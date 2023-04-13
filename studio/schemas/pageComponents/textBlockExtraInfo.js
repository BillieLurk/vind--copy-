export default {
    name: "textBlockExtraInfo",
    type: "object",
    title: "Text block with extra info",
    fields: [
        {
            name: "displayName",
            title: "Display Name",
            type: "string",
            initialValue: "Text block with extra info",
            readOnly: true,
            hidden: true,
        },
        {
            name: "component",
            title: "Component",
            type: "string",
            initialValue: "textBlockExtraInfo",
            readOnly: true,
            hidden: true,
        },
        {
            name: 'headerText',
            title: 'Header Text',
            type: 'text',
        },
        {
            name: "information",
            title: "Information",
            description: 'Left Column may be "Location:", right column: "Gotland" ',
            type: "object",
            fields: [
                {
                    name: "leftColumn",
                    title: "Left Column",
                    type: "text",
                },
                {
                    name: "rightColumn",
                    title: "Right Column",
                    type: "text",
                }
            ],
            preview: {
                select: {
                    title: 'leftColumn',
                    subtitle: 'rightColumn'
                }
            }
        },
        {
            name: 'builder',
            type: 'array',
            title: 'Builder',
            of: [
                {
                    type: 'ingress',
                }, // hero.js (same applies for the other types)

            ]
        }
    ]
}