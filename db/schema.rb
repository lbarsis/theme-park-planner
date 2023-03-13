# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_03_07_014916) do
  create_table "itineraries", force: :cascade do |t|
    t.string "name"
    t.integer "group_size"
    t.date "start_date"
    t.date "end_date"
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_itineraries_on_user_id"
  end

  create_table "itinerary_rides", force: :cascade do |t|
    t.integer "itinerary_id", null: false
    t.integer "ride_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["itinerary_id"], name: "index_itinerary_rides_on_itinerary_id"
    t.index ["ride_id"], name: "index_itinerary_rides_on_ride_id"
  end

  create_table "ride_users", force: :cascade do |t|
    t.integer "ride_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["ride_id"], name: "index_ride_users_on_ride_id"
    t.index ["user_id"], name: "index_ride_users_on_user_id"
  end

  create_table "rides", force: :cascade do |t|
    t.string "name"
    t.integer "thrill_level"
    t.integer "duration"
    t.integer "capacity"
    t.text "description"
    t.integer "theme_park_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["theme_park_id"], name: "index_rides_on_theme_park_id"
  end

  create_table "theme_parks", force: :cascade do |t|
    t.string "name"
    t.string "city"
    t.string "state"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
  end

  add_foreign_key "itineraries", "users"
  add_foreign_key "itinerary_rides", "itineraries"
  add_foreign_key "itinerary_rides", "rides"
  add_foreign_key "ride_users", "rides"
  add_foreign_key "ride_users", "users"
  add_foreign_key "rides", "theme_parks"
end
