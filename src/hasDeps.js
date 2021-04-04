const { getArrayDeps } = require('./getArrayDeps');

exports.hasDeps = async function hasDeps(moduleArray) {
    const deps = await getArrayDeps(moduleArray);
    if (deps.length > 0) return true;
    else return false;
}