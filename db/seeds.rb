# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
# create theme parks
# disney_world = ThemePark.create(name: "Walt Disney World", city: "Orlando", state: "Florida", description: "The most magical place on earth")
# universal_orlando = ThemePark.create(name: "Universal Orlando Resort", city: "Orlando", state: "Florida", description: "Rides for the daring!")

# # create rides
# pirates = Ride.create(name: "Pirates of the Caribbean", thrill_level: 3, duration: 15, capacity: 16, description: "Embark on a swashbuckling voyage to a long-forgotten time and place when pirates and privateers ruled the seas.", theme_park: disney_world)
# haunted = Ride.create(name: "Haunted Mansion", thrill_level: 2, duration: 10, capacity: 20, description: "Board your doom buggy and travel through the chambers of the eerie estate, home to ghosts, ghouls and supernatural surprises.", theme_park: disney_world)
# hulk = Ride.create(name: "The Incredible Hulk Coaster", thrill_level: 5, duration: 2, capacity: 32, description: "Hang on tight for a thrilling ride as you rocket from zero to 40 mph in just two seconds flat.", theme_park: universal_orlando)
# rip_ride = Ride.create(name: "Hollywood Rip Ride Rockit", thrill_level: 4, duration: 3, capacity: 24, description: "Blast off on a high-speed journey that loops, twists and dives around the park.", theme_park: universal_orlando)

# # create users
# alice = User.create(name: "Alice", username: 'al1', email: "alice@example.com", password: "password")
# bob = User.create(name: "Bob", username: 'bo1',email: "bob@example.com", password: "password")

# # create itineraries
# itinerary1 = Itinerary.create(name: "Disney Vacation", group_size: 2, start_date: Date.new(2023, 3, 20), end_date: Date.new(2023, 3, 26), user: alice)
# itinerary2 = Itinerary.create(name: "Universal Trip", group_size: 2, start_date: Date.new(2023, 4, 15), end_date: Date.new(2023, 4, 20), user: bob)

# # create itinerary rides
# ItineraryRide.create(itinerary: itinerary1, ride: pirates)
# ItineraryRide.create(itinerary: itinerary1, ride: haunted)
# ItineraryRide.create(itinerary: itinerary2, ride: hulk)
# ItineraryRide.create(itinerary: itinerary2, ride: rip_ride)

# # create ride_users
# RideUser.create(ride: pirates, user: alice)
# RideUser.create(ride: pirates, user: bob)
# RideUser.create(ride: haunted, user: alice)
# RideUser.create(ride: hulk, user: bob)
# RideUser.create(ride: rip_ride, user: bob)


# create theme parks
magic_kingdom = ThemePark.create(name: "Magic Kingdom", city: "Orlando", state: "FL", description: "The most magical place on earth!")
disneyland = ThemePark.create(name: "Disneyland", city: "Anaheim", state: "CA", description: "Where the magic began!")
universal_orlando = ThemePark.create(name: "Universal Orlando Resort", city: "Orlando", state: "Florida", description: "Rides for the daring!")

# create rides
pirates_of_caribbean = Ride.create(name: "Pirates of the Caribbean", thrill_level: 2, duration: 8, capacity: 16, description: "Sail through a pirate-infested Caribbean town", theme_park: magic_kingdom)
haunted_mansion = Ride.create(name: "Haunted Mansion", thrill_level: 1, duration: 10, capacity: 20, description: "Take a spooky tour of a haunted house", theme_park: magic_kingdom)
space_mountain = Ride.create(name: "Space Mountain", thrill_level: 4, duration: 5, capacity: 12, description: "Blast off into space on a thrilling roller coaster", theme_park: magic_kingdom)
it_s_a_small_world = Ride.create(name: "It's a Small World", thrill_level: 1, duration: 15, capacity: 24, description: "A gentle boat ride around the world", theme_park: magic_kingdom)
splash_mountain = Ride.create(name: "Splash Mountain", thrill_level: 3, duration: 9, capacity: 18, description: "Plunge down a steep water slide", theme_park: magic_kingdom)
hulk = Ride.create(name: "The Incredible Hulk Coaster", thrill_level: 5, duration: 2, capacity: 32, description: "Hang on tight for a thrilling ride as you rocket from zero to 40 mph in just two seconds flat.", theme_park: universal_orlando)
rip_ride = Ride.create(name: "Hollywood Rip Ride Rockit", thrill_level: 4, duration: 3, capacity: 24, description: "Blast off on a high-speed journey that loops, twists and dives around the park.", theme_park: universal_orlando)

# create users
admin = User.create(name: "Admin User", username: "admin", email: "admin@example.com", password: "password", admin: true)
user1 = User.create(name: "John Smith", username: "johnsmith", email: "john@example.com", password: "password", admin: false)
user2 = User.create(name: "Jane Doe", username: "janedoe", email: "jane@example.com", password: "password", admin:false)

# create itineraries
itinerary1 = Itinerary.create(name: "Magical Vacation", group_size: 4, start_date: Date.today + 1, end_date: Date.today + 7, user: user1, rides:[pirates_of_caribbean, haunted_mansion, space_mountain])
itinerary2 = Itinerary.create(name: "Disney Adventure", group_size: 2, start_date: Date.today + 2, end_date: Date.today + 8, user: user2, rides:[it_s_a_small_world, splash_mountain])


