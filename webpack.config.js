import {resolve} from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
export default  (mode)=>{
    return {
        mode:"development",
        entry:{
            main:resolve('/src/index.js')
        },
        output:{
            filename:'[name].[contenthash].js',
            path:resolve('dist'),
            clean:true
        },
        plugins:[
            new HtmlWebpackPlugin({template:resolve('./public/index.html')}),
            new webpack.HotModuleReplacementPlugin(),
        ],
        devServer:{
            port:3002,
            hot:true
        },
        module:{
            rules:[
                {
                    test:/\.(js|jsx)$/,
                    exclude:/node_modules/,
                    use:["babel-loader"]
                }
            ]
        },
        resolve:{
            extensions:[".*",".js",".jsx"]
        },

    }
}