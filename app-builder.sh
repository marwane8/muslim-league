#!/bin/bash

# SCRIPT TO AUTO BUILD DOCKER CONTAINERS LOCALLY

echo "BUILDING muslim-league api..."
docker build -t ml-api /Users/marwane/Projects/muslim-league/muslim-league-api

echo "BUILDING muslim-league ui..."
docker build -t ml-ui -f /Users/marwane/Projects/muslim-league/muslim-league-ui/Dockerfile.dev /Users/marwane/Projects/muslim-league/muslim-league-ui
