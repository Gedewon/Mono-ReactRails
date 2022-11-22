class Api::V1::GreetingsController < ApplicationController
  def index
    @lucky_greeting = Greeting.find((5 * rand).ceil)
    render json: @lucky_greeting, status: :ok
  end
end
