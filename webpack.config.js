module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname + '/dist/js',
        filename: 'game.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }]
    },
    watch: true,
    devtool: 'source-map'
};
