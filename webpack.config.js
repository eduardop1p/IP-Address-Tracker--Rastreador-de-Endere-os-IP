const path = require('path') 
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    entry: './FrontEnd/main.js', 
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                exclude: /node-modules/,
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    },
    plugins: [
        new Dotenv()
    ],
    devtool: 'source-map'
}