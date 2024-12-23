//path vai resolver o caminho para acessar determinada pasta
const path = require('path')

module.exports = {
    mode:'development',
    entry:'./src/index.js',
    output:{  //dirname se refere ao documento atual
        path: path.resolve(__dirname,'public','assets','js'),
        filename:'bundle.js'
    },
    module: {  
        rules: [{
            exclude:/node_modules/,
            test: /\.js$/,
            use:{
                loader:'babel-loader',
                options:{
                    presets: ['@babel/env']
                }
            }
        }]          
    },
    devtool:'source-map'       
}