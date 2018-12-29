var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")

var outputPath = path.resolve(__dirname, "./dist")

var conf = {
    mode: "development",
    entry: "./src/index.jsx",
    output: {
        path: outputPath,
        filename: "bundle.js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    babelrc: true,
                },
                exclude: /node_modules/,
            },

        ],
    },
    resolve: {
        extensions: [".js", ".jsx"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join("src", "template", "index.html"),
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
    },
}
exports.default = conf
