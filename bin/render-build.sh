#!/usr/bin/env bash
# exit on error
set -o errexit

# Add build commands for front end
rm -rf public
npm install --prefix client && npm run build --prefix client
cp -a client/build/. public/

sudo apt-get install libpq-dev ruby-dev
bundle exec rake db:migrate