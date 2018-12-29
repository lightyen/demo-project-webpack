var path = require("path")
var HtmlWebpackPlugin = require("html-webpack-plugin")
var { TsConfigPathsPlugin } = require("awesome-typescript-loader")

var outputPath = path.resolve(__dirname, "./dist")

var conf = {
    mode: "development",
    entry: "./src/index.tsx",
    output: {
        path: outputPath,
        filename: "bundle.js",
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader",
                options: {
                    configFileName: "tsconfig.json",
                    silent: true,
                },
                exclude: /node_modules/,
            },

        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        plugins: [
            new TsConfigPathsPlugin({
                configFile: "tsconfig.json",
            }),
        ],
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
