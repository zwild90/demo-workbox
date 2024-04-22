module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,js,html,ico}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	],
	runtimeCaching: [
		{
			urlPattern: /^http:\/\/localhost:3001\/*/,
			// handler: 'StaleWhileRevalidate', // Choose your caching strategy here
			handler: 'CacheFirst',
			options: {
				cacheName: 'site-cache', // Specify a name for your cache
				cacheableResponse: {
					statuses: [0, 200] // Cache responses with status 0 and 200
				},
			},
		},
	],
};