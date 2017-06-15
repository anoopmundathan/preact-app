
const path = require('path');

module.exports = {
	
	entry: './src',

	output: {
		path: path.join(__dirname, '/build'),
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				options: {
					presets: ['env'],
					plugins: [
						['transform-react-jsx', { pragma: 'h' }]
					]
				}
				
			}
		]
	},

	//sourcemaps
	devtool: 'source-map',

	//server
	devServer: {
		contentBase: path.join(__dirname, 'src'),
		compress: true,
		historyApiFallback: true
	}
}