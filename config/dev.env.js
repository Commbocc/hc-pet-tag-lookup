var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

// dev CORs proxy
var cors_proxy = require('cors-anywhere')
var host = '127.0.0.1'
var cors_proxy_port = 8081
cors_proxy.createServer({
	originWhitelist: [] // all
}).listen(cors_proxy_port, host, function() {
	console.log(`Running CORS Anywhere on ${host}:${cors_proxy_port}`)
})

module.exports = merge(prodEnv, {
	NODE_ENV: '"development"',
	// PET_API_ENDPOINT: `"http://localhost:${cors_proxy_port}/http://webappsnet-dev.hillsboroughcounty.org/pettagsearch/api/Animals"`
	PET_API_ENDPOINT: `"http://localhost:${cors_proxy_port}/https://webappsnet.hillsboroughcounty.org/pettagsearch/api/Animals"`
})
