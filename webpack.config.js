const webpack = require('webpack');
const path = require('path');
require('dotenv').config();

module.exports = {
    entry: './websiteScripts/index.js',
    output: {
        // Webpack prefers an absolute path:
        path: path.resolve(__dirname, './bundle'),
        filename: 'bundle.js'
    },
    devServer: {
        inline:true,
        port: process.env.DEV_PORT
      },
    watch: true,
    module: {
        rules: [
            {
                // Uses regex to test for a file type - in this case, ends with `.css`
                test: /\.css$/,
                // Apply these loaders if test returns true
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}