class Api::BenchesController < ApplicationController

    def index
        @all_benches = Bench.all
        render :index

    end

    def show
        @bench = Bench.find(params[:id])
    end

    def create
        @bench = Bench.create!(bench_params)
        render :show
    end

    def destroy

        @bench = Bench.find(params[:id])
        @bench.destroy


    end

    private

    def bench_params
        params.require(:bench).permit(
          :lat,
          :lng,
          :description,
          :number_of_seats
        )
      end

end
