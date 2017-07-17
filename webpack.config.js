const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const TARGET = process.env.npm_lifecycle_event; // npm run start || npm run build

const common = {
  entry: {
    app: [
      // 'babel-polyfill', // if need polyfill for old browsers
      path.resolve(__dirname, 'src/edith.js')
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
    filename: 'edith.js'
  },
  module: {    
    rules: [
      { 
        test: /\.js$/, 
        use: 'babel-loader?presets[]=es2015',
        include: path.join(__dirname, 'src'), // source dir        
      },  
            {
        test: /\.css$/,
        use: ['css-loader' ],
        include: path.join(__dirname, 'src'),
      }    
    ],
      },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
};

if (TARGET === 'build') { // prod config
  module.exports = merge(common, {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        drop_console: true,
        sourceMap: true,
        output: {
          comments: false
        }
      }),
    ]
  });
} else { // DEV config
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    watch: true,
    output: {
      pathinfo: true,
    },
    plugins: [
      new BrowserSyncPlugin({ // Server
        host: process.env.IP || 'localhost',
        port: process.env.PORT || 3001,
        server: { baseDir: ['./'] },
      })
    ]
  });
}