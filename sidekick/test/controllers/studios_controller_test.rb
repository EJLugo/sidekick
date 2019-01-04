require 'test_helper'

class StudiosControllerTest < ActionDispatch::IntegrationTest
  setup do
    @studio = studios(:one)
  end

  test "should get index" do
    get studios_url, as: :json
    assert_response :success
  end

  test "should create studio" do
    assert_difference('Studio.count') do
      post studios_url, params: { studio: { studio_contact_info: @studio.studio_contact_info, studio_location: @studio.studio_location, studio_name: @studio.studio_name } }, as: :json
    end

    assert_response 201
  end

  test "should show studio" do
    get studio_url(@studio), as: :json
    assert_response :success
  end

  test "should update studio" do
    patch studio_url(@studio), params: { studio: { studio_contact_info: @studio.studio_contact_info, studio_location: @studio.studio_location, studio_name: @studio.studio_name } }, as: :json
    assert_response 200
  end

  test "should destroy studio" do
    assert_difference('Studio.count', -1) do
      delete studio_url(@studio), as: :json
    end

    assert_response 204
  end
end
