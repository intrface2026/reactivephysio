const fs = require('fs');

const html = fs.readFileSync('template.html', 'utf-8');

const regex = /<([^>]+?data-framer-name="([^"]+)"[^>]*)>/g;
let match;
let result = [];
while ((match = regex.exec(html)) !== null) {
    if (!match[1].includes('ssr-variant')) {
        result.push(match[2]);
    }
}
fs.writeFileSync('structure_utf8.txt', result.join('\n'), 'utf8');
