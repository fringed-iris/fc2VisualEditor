type Rule = Record<
    string, [
        RegExp,
        string
    ]
>;


export const RULE: Rule = {
    bold: [
        /\*\*(.*?)\*\*/,
        "<b>${it}</b>"
    ],
    italic: [
        /%%(.*?)%%/,
        "<i>${it}</i>"
    ],
} as const;