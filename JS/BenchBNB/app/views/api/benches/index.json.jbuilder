# @all_benches.each do |single_bench|

#     json.set! :benches do
#         json.set! :lat, single_bench.lat
#         json.set! :lng, single_bench.lng
#     end

# end


json.array! @all_benches, :lat, :lng, :description, :id, :number_of_seats