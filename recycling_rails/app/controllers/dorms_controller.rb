class DormsController < ApplicationController
    
    # GET /dorm/:id/getName
    def getName
        @dorm = Dorm.find(params[:id])
        render json: {name: @dorm.name}
    end

    # GET /dorm/index
    def index
        @dorm = Dorm.find(params[:id])
    end

    # GET /dorm/new
    def new
        @dorm = Dorm.new
    end

    # Creates dorm
    def create
        @dorm = Dorm.create(dorm_parms)
    end

    # Dorm parameters
    def dorm_params
        params.permit(:name, :num_students)
    end
end
