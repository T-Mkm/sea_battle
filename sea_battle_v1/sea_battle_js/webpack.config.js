const path = require('path');
 const HWP = require('html-webpack-plugin');
 module.exports = {
    entry: path.join(__dirname, '/src/index.js'),
    output: {
        filename: 'sea_battle_v1.js',
        path: path.join(__dirname, './production')},
    module:{
          rules:[
              {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader',
                    query: {
                      presets: ['@babel/react', '@babel/preset-env'],
                      plugins: ['@babel/proposal-class-properties']
                    }
                  }
                ],
              }]
      },
    plugins:[
          new HWP(
                 {template: path.join(__dirname,'/src/index.html')}
        )
    ]
 }