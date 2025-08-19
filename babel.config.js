module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current",
				},
			},
		],
	],
	// Add React preset if using React
	// '@babel/preset-react'
};
