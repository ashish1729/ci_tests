// this file isn't transpiled so must use commonJS or ES5

// Regster babel to transpile before our tests run
require('babel-register')();


// Disable webpack features that Mocha doesn't understand
// webpack allows to import `.css` files, mocha doesn't understand it
// so we ignore it
require.extensions['.css'] = function(){}
