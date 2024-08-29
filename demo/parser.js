const parseByLine = (md = "") => {
    md = md.replaceAll(/'''(.*?)'''/g, '<em>$1</em>');
    md = md.replaceAll(/''(.*?)''/g, '<strong>$1</strong>');
    md = md.replaceAll(/^###(.*)/g, "<h4>$1</h4>");
    md = md.replaceAll(/^##(.*)/g, "<h3>$1</h3>");
    md = md.replaceAll(/^#(.*)/g, "<h2>$1</h2>");

    return md;
}
const parseAll = (md = "") => {
    let html = "";

    const LINES = md.split(/\n\r?|\r/);
    LINES.forEach(l => {
        const RES = parseByLine(l);

        html += `${RES}<br>`;
    });

    return html;
}

const update = (elm, md) => {
    elm.innerHTML = parseAll(md);
}

function main() {
    const PARSED = document.getElementById("parsed");
    const RAW = document.getElementById("input");

    update(PARSED, RAW.value);

    RAW.addEventListener("keyup", e => {
        update(PARSED, e.target.value);
    });
}

main();