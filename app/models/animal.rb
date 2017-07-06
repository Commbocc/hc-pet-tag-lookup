class Animal < ApplicationRecord

	self.table_name = ENV['ANIMAL_DB_TABLE']

	def self.search(term)
		# License #: 022577, 022057
		# Microchip #: 095014023, 981010001884010

		results = where("TagNumber LIKE ? OR tattoo LIKE ?", "%#{term}%", "%#{term}%").order(TagExpire: :desc)
		return results.group_by(&:animal_id)
	end

end
