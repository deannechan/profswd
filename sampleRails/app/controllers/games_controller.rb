class GamesController < ApplicationController
	def connect4
	end
	def tictactoe
	end
	def users
		@names = User.all.to_a

	end
	def inventory
	end
	
end
