# The Muslim League CT Web Application

In the state of Connecticut, the Muslim community is taking innitiative to unite people of all ages through local sports.
This web application was made to be the source of all sports related information for the adult muslim basketball and soccer league.

## Application Stack

1. Frontend - Next.js, tailwind (Typescript)

2. Backend - FAST API (Python)

3. Database - Sqlite (SQL)

### CICD
- Hostinger VPS
- Docker, Docker Compose
- Git Hub Actions

**THE FRONTEND: NEXT.JS**

`muslim-league-ui`

For the frontend, Next.js was chosen for its state management, ease of use when dealing with routes, as well as its server side rendering capabilities. In addition I chose tailwind for declartive syntax which increased my developing speed. 


**THE SERVER SIDE: FAST API**

`muslim-league-api`

For the server, the FAST API was chosen beacause well.... its fast! It flexible file structure and simplicity when building endpoint is what was needed for this light weight project. 

**THE DATABASE: SQLITE**

`muslim-league-db`

This project was built with simplicity being at the center of all design decsions. Because this app is serving a few 100 request a day and only storing 10,000 of rows of data. The simplicist solution was store everything in a SQLite file that can be stored directly on the server and easily backed up.

An added benifit to this design decision is the ease of testing! if you notice the db repoistiory has a complete fake sqlite database that has been integral in testing out the service.


## DEPLOYMENT

Docker is used to ensure that this application identically in dev and productions. Containerizing also alows the app to be run on any machine which provides the flexibility to switch host when needed.

Git Hub actions and Docker Hub are used as CICD tools to automatically deploy to production on every push to master. This has been very helpful to move changes quickly and adhere to sound Continous Integration principles.


## Next Steps
Currently this project is displaying data from last years season. Due to the busy work schedule it hasn't been maintained as much as I'd like. For the coming season the project milestiones are as follows:
- add more components to the soccer home page
- add more features to the admin page to edit seasons
- refactor basketball frontend components
- refactor backend api routes
- add more unit and integration testing

Thank you for taking the time to visit my project!