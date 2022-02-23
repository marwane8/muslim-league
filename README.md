# CT Muslim League Basketball Web Application

In the state of connecticut the Muslim community is taking innitiative to unite people of all ages through local sports.
This webapplication was made to be the source of all basketball related information for the adult muslim basketball league.

This is a full stack web-application which is implemented with an MVC archeticutre nad is currently hosted on an EC2 server with AWS.
It is also deployed using Docker containerization inorder to ease the transition from development to production.

## Application Stack

1. Client - React (Javascript)

2. Server - Springboot (Java)

3. Database - Mysql (SQL)

Deployment:
  AWS EC2
  Docker Containerization

**THE CLIENT SIDE: REACT**

For the frontend, React was chosen for its strong focus on user experience and its easy to use Components implementation.
The frontend code for this project can be found at `league-web-app/src/main/react-frontend`

**THE SERVER SIDE: SPRING BOOT**

For the server, Spring Boot was implemented for its focus on building REST API's.
The REST API Implementation can be found at `league-web-app/src/main/java/com/homdev/ball/`

The Data Access Object Model along with the use of Beans for depency injection was used to implement REST Services with the spring framework
JDBC connector was also used inorder to connect to the mySQL data base 

**THE DATABASE: MYSQL**

MySQL was used for becasue it was opensource and has powerful dataquerying capabilites they have scale in mind.
The database is comprised of tables to persist the data in, along with stored proceedures and views for percise server interaction.


## DEPLOYMENT

As stated perviously this web application is hosted on an AWS EC2 server.
Amazon Web Services is the leading cloud service provider in the industry and it was chosen in this project for reliability, cost, and availability for support

Looking through the source code you will also find some docker files!
Docker Containerization was used to easily transition from development to deployment by simply composing up the application.

Thank you for taking the time to visit my project!
