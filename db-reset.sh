#!/bin/bash

# SCRIPT TO RESET API DATABASES 

echo "BUILDING DATABASES..."
cd ~/Projects/muslim-league/muslim-league-db/ && ./db-builder.sh

echo "DELETE OLD DATABASES..."
rm /Users/marwane/Projects/muslim-league/muslim-league-api/database/bball.db
rm /Users/marwane/Projects/muslim-league/muslim-league-api/database/soccer.db

echo "COPY NEW DATABASES..."
cp /Users/marwane/Projects/muslim-league/muslim-league-db/databases/bball.db /Users/marwane/Projects/muslim-league/muslim-league-api/database/bball.db
cp /Users/marwane/Projects/muslim-league/muslim-league-db/databases/soccer.db /Users/marwane/Projects/muslim-league/muslim-league-api/database/soccer.db
