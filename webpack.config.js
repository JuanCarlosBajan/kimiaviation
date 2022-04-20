const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use : {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.(woff(2)?|ttf|otf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'fonts/'
                        }
                    }
                ]
            },
            {
                test: /\.mp4$/,
                use: [
                  {
                    loader: require.resolve('file-loader'),
                    options: {
                      //name: 'static/media/[name].[hash:8].[ext]'
                      name: 'media/[name].[hash:8].[ext]'
                    }
                  }
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "html-loader",
                        options: {
                            sources: {
                                list: [
                                    {
                                        tag: "source",
                                        attribute: "src",
                                        type: "src"
                                    }
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}