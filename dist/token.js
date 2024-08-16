export const RULE = {
    bold: [
        /\*\*(.*?)\*\*/,
        "<b>${it}</b>"
    ],
    italic: [
        /%%(.*?)%%/,
        "<i>${it}</i>"
    ],
};
