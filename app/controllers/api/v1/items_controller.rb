class Api::V1::ItemsController < ApplicationController
  def index
    render json: [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }]
  end
end
