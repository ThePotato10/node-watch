const { getDeps } = require('./getDeps');
const { flatten } = require('array-flatten');

exports.getArrayDeps = async function getArrayDeps(moduleArray) {
    const arrayDeps = moduleArray.map(async (module) => {
        return await getDeps(module);
    });

    const settled = await Promise.allSettled(arrayDeps);
    // This is the kind of fucked up shit that would make a functional programmer cry, even if it adheres to functional principals
    return flatten(settled.map(result => result.value).filter(Boolean).map(item => Object.keys(item)));
}