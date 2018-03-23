var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require("open-browser-webpack-plugin");

module.exports={
	 entry: './app/index.js',
	 output:{
	 	filename:'build.js',
	 	path:'/app/dist'
	 },
	 module: {
	    rules: [
	      { 
	      	test: /\.css$/, 
	      	use: [
	      	'style-loader',
	      	'css-loader'
	      	] 
	      },
	      { 
	      	test: /\.vue$/, 
	      	use: 'vue-loader'
	      },
	      {
	      	test:/\.(png|jpg)$/,
	      	use:'url-loader?limit=2048'
	      }
	    ]
	  },
     plugins: [
	    new HtmlWebpackPlugin({template: './index.html'}),

	    new webpack.HotModuleReplacementPlugin(),

	    new OpenBrowserPlugin({
	    	url:"http://localhost:8080"
	    })

	    // new webpack.DefinePlugin({
	    // 	_DEV_:JSON.stringify(JSON.parse(process.env.NODE_ENV == 'dev' || false))
	    // })
	  ]
}