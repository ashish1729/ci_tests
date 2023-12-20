import path from 'path';

// object exported from config file is used as configuration
export default {
    // enables some debugging information
    debug: true,
    // many options for sourcemaps
    // compromise is speed vs quality of generated map
    devtool: 'inline-source-map',
    // noInfo -> false means show info
    // shows list of files webpack is bundling
    // can turn off during development to reduce noise
    noInfo: false,
    // you can pass array of entry points
    // we can inject middleware and hotreloading ?
    entry: [
        path.resolve(__dirname, 'src/index'),
    ],
    // we can set target to 'node' or 'electron', and bundling is according to target
    target: 'web',
    // webpack by default dont' generate any file
    // it servers from in-memory server
    // but it uses these values to simulate the file's physical existence ?
    output: {
        path: path.resolve(__dirname, 'src'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    // we can add plugins for enhancing functionality
    // like hot reloading, catching errors, linting, etc
    plugins: [],
    // what is modules ??
    module: {
        // how to handle a particular filetype
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
            {test: /\.css$/, loaders: ['style', 'css']}
        ]
    }
}
