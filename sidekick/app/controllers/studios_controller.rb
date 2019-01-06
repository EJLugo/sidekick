class StudiosController < ApplicationController
  before_action :set_studio, only: [:show, :update, :destroy]

  # GET /studios
  def index
    @studios = Studio.all

    render json: @studios, include: :workouts
  end

  # GET /studios/1
  def show
    render json: @studio, include: :workouts
  end

  # POST /studios
  def create
    @studio = Studio.new(studio_params)

    if @studio.save
      render json: @studio, status: :created, location: @studio
    else
      render json: @studio.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /studios/1
  def update
    if @studio.update(studio_params)
      render json: @studio
    else
      render json: @studio.errors, status: :unprocessable_entity
    end
  end

  # DELETE /studios/1
  def destroy
    @studio.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_studio
      @studio = Studio.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def studio_params
      params.require(:studio).permit(:studio_location, :studio_name, :studio_contact_info)
    end
end
