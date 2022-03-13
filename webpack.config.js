const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

const isDevelopment = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: path.resolve(__dirname,'src','index.jsx'),
  mode: isDevelopment? 'development': 'production',
  devtool: 'eval-source-map',
  output:{
      path: path.resolve(__dirname,'dist'),
      filename:'bundle.js'
  },

  resolve:{
      extensions:['.js','.jsx'],
  },

  plugins:[
    isDevelopment && new ReactRefreshWebpackPlugin(),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public','index.html')
    })
  ].filter(Boolean), //hack, remove booleanos

  devServer: {
    static: path.resolve(__dirname, 'public'),
    hot:true
  },

  module:{ //como cada arquivo vai se comportar, integração do webpack com o babel
      rules:[
          {
              test:/\.jsx$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader',
                options: {
                  plugins:[
                    isDevelopment && require.resolve('react-refresh/babel')
                  ].filter(Boolean)
                }

              }
          },
          {
            test:/\.scss$/,
            exclude: /node_modules/,
            use: ['style-loader','css-loader', 'sass-loader']
        }          
      ]
  }
};