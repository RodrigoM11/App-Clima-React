const HtmlWebPackPlugin = require('html-webpack-plugin')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const path = require ('path')

module.exports = {
 
mode: 'development',

output: {

filename: 'app.bundle.js',
path: path.resolve(__dirname, 'public'),
publicPath: '/',

},

devServer: {
  historyApiFallback: true,
},

plugins: [
  new HtmlWebPackPlugin({
    template: 'src/index.html'
  }),
  new WorkboxWebpackPlugin.GenerateSW({
    swDest: 'service-worker.js', 
    clientsClaim: true,
    skipWaiting: true,
    maximumFileSizeToCacheInBytes: 6 * 1024 * 1024, 
    runtimeCaching: [
      {
        urlPattern: new RegExp('/app.bundle.js'),
        handler: 'CacheFirst',
        options: {
          cacheName: 'cache-de-app-bundle',
          cacheableResponse: {
            statuses: [0, 200]
          }
        }
      }
    
    ]
  })
],

module: {
  rules: [
     {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {

            loader: 'babel-loader',
            options: {
                 presets:['@babel/preset-env', '@babel/preset-react']

            }
        }
     },
     {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            outputPath: 'images/',
            publicPath: '/images/',
          },
        },
      ],
    },
    {
      test: /\.svg$/,
      use:['@svgr/webpack', 'url-loader'],
      
    },
  ]
}
} 



 // [
      //   {
      //     loader: 'react-svg-loader',
      //     options: {
      //       jsx: true,
      //     },
      //   },
      // ]

      // {
      //   test: /\.svg$/,
      //   use: ['svg-loader'],
      // },