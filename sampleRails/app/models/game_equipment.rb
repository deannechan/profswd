class GameEquipment < ActiveRecord::Base
	belongs_to:user

	def total_weight
		if weight.present? && quantity.present?
			weight*quantity
		else
			nil
		end
	end

	def self.kamote
		puts "kamote"
	end

end
