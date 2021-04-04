const { hasDeps } = require('./hasDeps');
const { readjson } = require('./readjson');
const { getArrayDeps } = require('./getArrayDeps');

let allDeps = [];

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

async function getAllDeps(module) {
    let currentLayer = module;
    let hasDepsHolder = await hasDeps(currentLayer);

    allDeps.push(module);
    
    while(hasDepsHolder) {
        const arrayDepsHolder = await getArrayDeps(currentLayer);
        currentLayer = arrayDepsHolder;

        currentLayer.forEach(element => allDeps.push(element));

        const hasDepsInnerHolder = await hasDeps(currentLayer);
        hasDepsHolder = hasDepsInnerHolder;
    }

    const unique = allDeps.filter(onlyUnique);
    console.log(`Your package.json has ${unique.length} unique dependencies`);
}

console.log('Finding dependencies ... ');
getAllDeps(readjson());