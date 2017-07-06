class ApplicationController < ActionController::Base
	protect_from_forgery with: :exception

	def cors_set_access_control_headers
		headers['Access-Control-Allow-Origin'] = '*'
	end

end
