const HtmlWebpack    = require('html-webpack-plugin')
const MiniCssExtract = require("mini-css-extract-plugin");
const CopyPlugin     = require("copy-webpack-plugin");



module.exports = {
    mode: 'development', //envia los archivos a desarrollo

    output: { // salida de los arhivos en el dist
        clean: true // limpia los arhivos finales antes de crear los nuevos cuando hago el run build
    },
    
    module: {
        rules: [
            {
                test: /\.html$/, //estoy significa que targetea a los archivos html
                loader: 'html-loader', //el plugin que utiliza
                options: {
                    sources: false
                }
            },
            {
                test: /\.css$/,
                exclude: /styles.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]
            },
            {
                test: /\.(png|jpe?g|gif)/,
                loader: 'file-loader'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({ //aca puedo hacer configuraciones del archivo html final
            title: 'Udemy curso',// cambia el titulo
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: '[name].[fullhash].css',
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
                { from: 'src/assets/', to: 'assets/' }
            ]
        })
    ],
}   