const path = require('path');
const fs = require('fs');

function readWordJs() {
    try {
        let words;
        const fileName = path.join(__dirname, '/../admin/words.js');
        if (fs.existsSync(fileName)) {
            words = fs.readFileSync(fileName).toString();
        }
        words = words.substring(words.indexOf('{'), words.length);
        words = words.substring(0, words.lastIndexOf(';'));

        const resultFunc = new Function('return ' + words + ';');

        return resultFunc();
    } catch (e) {
        return {};
    }
}

module.exports = readWordJs();