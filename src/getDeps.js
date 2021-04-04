const NpmApi = require('npm-api');

exports.getDeps = async function getDeps(module) {
    const npm = new NpmApi();
    const repo = npm.repo(module);

    const dependencies = await repo.dependencies();
    return dependencies;
}

async function asyncCall() {
    const result = await exports.getDeps('express');
    console.log(result);
}