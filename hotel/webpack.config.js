var webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');
const HtmlWebpackPathAssetsFix = require('html-webpack-plugin-assets-fix')
const path = require('path');

module.exports = {
  entry: {
    'UIKit/cards/cards' : './source/UI kit/cards/cards.js',
    'UIKit/colorsNtype/colorsNtype' : './source/UI kit/colors&type/colorsNtype.js',
    "UIKit/headersNfooters/headersNfooters" : './source/UI kit/headers&footers/headersNfooters.js',
    "UIKit/FormElements/FormElements" : './source/UI kit/FormElements/FormElements.js',
    "website/landing/landing" : "./source/Website Pages/landing/landing.js",
    "website/search-room/search-room" : "./source/Website Pages/search-room/search-room.js",
    "website/room-details/room-details" : "./source/Website Pages/room-details/room-details.js",
    'website/registration/registration' : './source/Website Pages/registration/registration.js',
    'website/signIn/signIn' : './source/Website Pages/signIn/signIn.js'
  },
  output: {
    path: path.resolve(__dirname, 'bundle'),
    publicPath: '',
    filename: '[name].js'
  },
module: {
  rules: [
    {
      test: /\.scss$/,
      use:
        ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
            options: {
      		  sourceMap: true
      	  }
        }
        ,
        {
          loader: 'sass-loader',
          options: {
      		  sourceMap: true
      	  }
        }
        ]
        })
    },
	{
      test: /\.pug$/,
      loader: 'pug-loader',
	  options: {
		  pretty: true
	  }
  },
     {
        test: /\.css$/,
        use:
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
           use: [
             {
               loader: 'css-loader',
           options: {
           sourceMap: true
         }
       }]
          })
       },
      /* { не подходит для работы
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
         loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
            emitFile: true,
            useRelativePath: true
       }
     },*/
     {
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
       loader: "url-loader",
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/',
          emitFile: true,
          useRelativePath: true
     }
   },
     /*{
      test: /\.(jpe?g|png|gif|svg)$/i,
       loader: 'file-loader?limit=100000',
        options: {
          fallback: 'url-loader',
          name: '[name].[ext]',
          outputPath: 'images/',
          emitFile: true,
          useRelativePath: true
     }
   },*/
 {
    test: /\.(jpe?g|png|gif|svg)$/i,
     loader: "url-loader",
      options: {
        limit: 8192,
        name: '[name].[ext]',
        outputPath: 'images/',
        publicPath: '../../images/',
        emitFile: true,
        useRelativePath: true
   }
 },
  ]
},
plugins: [
 new ExtractTextPlugin('[name].css'),
 new HtmlWebpackPlugin({
	 filename: 'UIKit/cards/cards.html',
   template: './source/UI kit/cards/cards.pug',
   chunks: ["UIKit/cards/cards"],
   fixAssets: true
 }),
 new HtmlWebpackPlugin({
  filename: 'UIKit/colorsNtype/colorsNtype.html',
  template: './source/UI kit/colors&type/colorsNtype.pug',
  fixAssets: true,
  chunks: ["UIKit/colorsNtype/colorsNtype"]
 }),
 new HtmlWebpackPlugin({
  filename: 'UIKit/FormElements/FormElements.html',
  template: './source/UI kit/FormElements/FormElements.pug',
  fixAssets: true,
  chunks: ["UIKit/FormElements/FormElements"]
 }),
 new HtmlWebpackPlugin({
  filename: 'UIKit/headersNfooters/headersNfooters.html',
  template: './source/UI kit/headers&footers/headersNfooters.pug',
  fixAssets: true,
  chunks: ["UIKit/headersNfooters/headersNfooters"]
 }),
 new HtmlWebpackPlugin({
  filename: 'website/landing/landing.html',
  template: './source/Website Pages/landing/landing.pug',
  fixAssets: true,
  chunks: ["website/landing/landing"]
 }),
 new HtmlWebpackPlugin({
  filename: 'website/search-room/search-room.html',
  template: './source/Website Pages/search-room/search-room.pug',
  fixAssets: true,
  chunks: ["website/search-room/search-room"]
 }),
 new HtmlWebpackPlugin({
   filename: 'website/room-details/room-details.html',
   template: './source/Website Pages/room-details/room-details.pug',
   fixAssets: true,
   chunks: ['website/room-details/room-details']
 }),
 new HtmlWebpackPlugin({
   filename: "website/registration/registration.html",
   template: "source/Website Pages/registration/registration.pug",
   fixAssets: true,
   chunks: ['website/registration/registration']
 }),
 new HtmlWebpackPlugin({
   filename: "website/signIn/signIn.html",
   template: "source/Website Pages/signIn/signIn.pug",
   fixAssets: true,
   chunks: ['website/signIn/signIn']
 }),
 new HtmlWebpackPathAssetsFix(),
 new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery'
})
],
resolve: {
  alias:{

  }
}
};
