const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        app: ["./src/js/main.js"]
    },
    output: {
        path: `${__dirname}/build`,
        filename: "[name].[hash].js"
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["env"]
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.s[a|c]ss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "postcss-loader"
                        },
                        {
                            loader: "sass-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(eot|ttf|woff|svg)?$/,
                loader: "file-loader",
                query: {
                    name: "[hash].[ext]"
                }
            },
            {
                test: /\.html$/,
                loader: "html-loader?attrs[]=video:src&attrs[]=img:src&attrs[]=a:data-href",
                include: [path.resolve(__dirname, "src/")],
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(jpe?g|png|gif|mp4|pdf|ico)$/i,
                loader: "url-loader",
                exclude: /app.js/,
                query: {
                    limit: 1024,
                    name: "[hash].[ext]"
                }
            }
        ]
    }
};
