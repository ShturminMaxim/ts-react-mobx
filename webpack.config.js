const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const devEnv = 'development'
const NODE_ENV = process.env.NODE_ENV || devEnv

module.exports = {
    entry: ['./src/index'],
    devtool: NODE_ENV === devEnv ? 'inline-source-map' : 'hidden-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'awesome-typescript-loader'
        }]
    },
    resolve: {
        extensions: ['.json', '.ts', '.tsx', '.js']
    },
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'static')
    }
}
