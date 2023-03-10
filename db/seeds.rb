# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
Movie.destroy_all
Spot.destroy_all

g = ["action", "horreur", "comédie", "drame"]

100.times do
    Movie.create!(
        name: Faker::Movie.title,
        year: rand(1930..2023), #Faker::Number.between(from: 1930, to: 2023),
        genre: rand(0..g.length), #Faker::Number.between(from: 0, to: g.length),  #g[rand(0..g.length)]
        synopsis: Faker::Lorem.sentence(word_count: 10),
        director: Faker::Name.name,
        allocine_rating: rand(0..5), #Faker::Number.decimal(r_digits: 1).within(range: 0..5),
        my_rating: nil,
        already_seen: false
    )
end

Spot.create!(
    name: "Ximen reverside", 
    latitude: 25.0494512, 
    longitude: 121.5016743
)

Spot.create!(
    name: "Daan Park", 
    latitude: 25.032463, 
    longitude: 121.5208464
)

Spot.create!(
    name: "Youth Park", 
    latitude: 25.0207203, 
    longitude: 121.4869551
)

Spot.create!(
    name: "Huashan Creative Park", 
    latitude: 25.043782, 
    longitude: 121.5277514
)