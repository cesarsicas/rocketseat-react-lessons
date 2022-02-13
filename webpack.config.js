const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname,'src','index.jsx'),
  mode: 'development',
  devtool: 'eval-source-map',
  output:{
      path: path.resolve(__dirname,'dist'),
      filename:'bundle.js'
  },

  resolve:{
      extensions:['.js','.jsx'],
  },

  plugins:[
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public','index.html')
    })
  ],

  devServer: {
    static: path.resolve(__dirname, 'public')
  },

  module:{ //como cada arquivo vai se comportar, integração do webpack com o babel
      rules:[
          {
              test:/\.jsx$/,
              exclude: /node_modules/,
              use: 'babel-loader'
          },
          {
            test:/\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader','css-loader', 'sass-loader']
        }          
      ]
  }
};