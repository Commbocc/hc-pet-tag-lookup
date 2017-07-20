var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

var devEnvVars = {
	NODE_ENV: '"development"',
	CORS_PROXY_PORT: 8081,
	init: function() {
		// this.PET_API_ENDPOINT = `http://localhost:${this.CORS_PROXY_PORT}/http://webappsnet-dev.hillsboroughcounty.org/pettagsearch/api/Animals"`
		this.PET_API_ENDPOINT = `"http://localhost:${this.CORS_PROXY_PORT}/https://webappsnet.hillsboroughcounty.org/pettagsearch/api/Animals"`
		return this
	}
}.init()

module.exports = merge(prodEnv, devEnvVars)
