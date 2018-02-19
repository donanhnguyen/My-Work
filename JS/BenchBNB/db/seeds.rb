# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Bench.delete_all
User.delete_all

bench1 = Bench.create!(lat: 47.558984, lng: -122.385891, description: 'brown bench')

bench2 = Bench.create!(lat: 47.610258, lng: -122.336798, description: 'green bench')

bench3 = Bench.create!(lat: 47.614400, lng: -122.202632, description: 'ass bench')

# user1 = User.create!(
#   username: 'guest',
#   password: 'password'
# )