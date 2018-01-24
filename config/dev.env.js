var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

var devEnvVars = {
	NODE_ENV: '"development"',
	PET_API_ENDPOINT: '"/pettagsearch/api/Animals"',
	PROXY_API_ENDPOINT: function() {
		var useProdApiInDev = false // server restart required
		return (useProdApiInDev) ? 'https://webappsnet.hillsboroughcounty.org/pettagsearch/api/Animals' : 'http://webappsnet-dev.hillsboroughcounty.org/pettagsearch/api/Animals'
	}
}

module.exports = merge(prodEnv, devEnvVars)
