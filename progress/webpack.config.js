module.exports = {
	entry:{
		app:'./index.js'
	},
	output:{
		path:'./dist',
		filename:'build.js'
	},
	module:{
		loaders:[
			{test:/\.css$/, loader:'style!css!autoprefixer'},
			{test:/\.html$/, loader:'html'},
			{test:/\.scss$/, loader:'style!css!autoprefixer!sass'},
			{test:/\.(png|jpg|ico|gif|woff|svg|eot|ttf)$/, loader:'url-loader'}
		]
	}

}