# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts 'seeding'

dorm1 = Dorm.create(name: "Kilgo")
user1 = User.create(name: "Jason", netid: "jg123", points: 1, reports: 1)

puts 'seeded'