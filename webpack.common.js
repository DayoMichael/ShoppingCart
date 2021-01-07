const path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    plugins:[new HtmlWebpackPlugin({
        template: "./src/template.html"
    })],
    
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: [
                    //Creates `style` nodes from JS strings
                    "style-loader",
                    //Translates CSS into CommonJS
                    "css-loader",
                    //Compiles Sass to css
                    "sass-loader"
                ],
            },
            {
                test:/\.html$/,
                use: [
                    "html-loader"
                ],

                test:/\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash][ext]",
                        outputPath:"images"
                    }
                }

            },
        ],
    },
    
}