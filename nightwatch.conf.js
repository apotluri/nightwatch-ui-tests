const baseConfig = require('./nightwatch.base.js');

const testConfig = Object.assign({}, baseConfig, {
    src_folders: ['tests/src'], //e2e-tests are existing nasu nightwatch tests
    output_folder: 'reports',
    custom_commands_path: [
    ],
    custom_assertions_path: [
    ],
    page_objects_path: ['tests/pageObjects'],
    globals_path: 'globals.js'
});

module.exports = testConfig;
