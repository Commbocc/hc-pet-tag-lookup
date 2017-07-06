class AnimalsController < ApplicationController

	before_action :cors_set_access_control_headers, only: [:search]

	# GET /api/animals/search/:term
	def search
		@animals = Animal.search(params[:term])
	end

end
