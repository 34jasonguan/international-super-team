class UsersController < ApplicationController

    def updatePoints
        @user = User.find(params[:id])
        @user.update(:points)
        render json: @user, status: :ok
    end

    def new
        @user = User.new
    end

    def index
        @user = User.find(params[:id])
        render json: @sources, status: :ok
    end

    def show
        @user = User.find(params[:id])
        render json: @user, status: :ok
    end

    def create
        @dorm = Dorm.find(params[:dorm_id])
        @user = @dorm.user.create(user_params)
    end

    def user_params
        params.permit(:name, :netid, :points, :reports)
    end
end
