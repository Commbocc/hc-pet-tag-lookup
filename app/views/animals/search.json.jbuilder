# json.array! @animals, partial: 'animals/animal', as: :animal

json.array! @animals.each do |animal_id, group|
	json.animal group.first, partial: 'animals/animal', as: :animal

	json.owner group.first, partial: 'animals/owner', as: :owner

	json.tags do
		json.array! group.first(1), partial: 'animals/tag', as: :tag
		# json.array! group, partial: 'animals/tag', as: :tag
	end
end
