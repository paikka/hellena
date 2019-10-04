/**
 * Copyright Paikka. 2019, 2019
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        "packages/**/src/**/*.js",
        "!packages/{bundler,cli,components,sketch}/**",
        "!packages/**/{examples,stories}/**",
        "!**/*-story.js"
    ],
    moduleFileExtensions: [
        "js"
    ],
    reporters: [
        "default",
        "jest-junit"
    ],
    //
    // A map from regular expressions to paths to transformers. A transformer is a module that provides a synchronous
    // function for transforming source files. For example, if you wanted to be able to use a new language feature in
    // your modules or tests that isn't yet supported by node, you might plug in one of many compilers that compile a
    // future version of JavaScript to a current one.
    // DOC: https://jestjs.io/docs/en/configuration#transform-object-string-pathtotransformer-pathtotransformer-object
    //
    transform: {
        "^.+\\.(js|jsx)$": "./tasks/jest/jsTransform.js",
        "^.+\\.css$": "./tasks/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|css|json)$)": "./tasks/jest/fileTransform.js"
    },
    testPathIgnorePatterns: [
        "/dist/",
        "e2e",
        "examples"
    ],
    transformIgnorePatterns: [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"
    ],
    watchPathIgnorePatterns: [
        "/dist/",
        "/examples/",
        "/storybook/"
    ]
};