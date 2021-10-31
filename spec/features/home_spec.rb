require 'rails_helper'

describe 'the home page', js: true do
  before(:each) do
    visit '/'
  end

  it 'should have the content "Home"' do
    expect(page).to have_content('Home')
  end
end