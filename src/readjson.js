const fs = require('fs');

exports.readjson = function readjson() {
    try {
        const data = JSON.parse(fs.readFileSync('./package.json'));
        return Object.keys(data.dependencies);
    } catch {
        throw new Error("Error: No local package.json file detected")
    }
}