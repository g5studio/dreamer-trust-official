const baseConfig = require('./.prettierrc.js');

const { plugins, tailwindAttributes, tailwindFunctions, ...cmdConfig } = baseConfig;

module.exports = cmdConfig;
