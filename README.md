# Impetus: Navbar-Module

Created frontend and API for the navbar microservice of a crowdfunding project page. The navbar microservice responsively displays data about the project, navigates between separate microservices, enables "liking" a project, and allows a user to register their email to receive a reminder in 48 hours about the project.

## Related Projects

* [Community Microservice](https://github.com/initial-impetus/community-module)
* [Campaign Microservice](https://github.com/initial-impetus/campaign-service)
* [Product Summary Microservice](https://github.com/initial-impetus/product-summary)
* [Updates Microservice](https://github.com/initial-impetus/updates-module)
* [Comments Microservice](https://github.com/initial-impetus/comments-module)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### Prerequisites

All dependencies are listed in the package.json

### Installing

Clone the repo to your local machine. Navigate to the directory and install dependencies with npm or with yarn:

`npm install || yarn install`

To run locally:

`npm start`

and navigate to localhost:3002 on your browser. In order to render different projects navigate to localhost:3006/?# where # is a number between 0 and 99.

### Running the tests

Run test suite with `npm test`

## Built With

* [React](https://www.reactjs.org) - Front-End Framework used
* [Express](https://expressjs.com) - Web framework for Node.js
* [MongoDB](https://www.mongodb.com) - noSQL database used for storing users and user games
* [Mongoose](http://www.mongoosejs.com) - MongoDB ORM for node.js
* [Sass](https://sass-lang.com/) - CSS extension language
* [Docker](https://www.docker.com/) - Container Platform

## Authors

* **Sam Getlan** - *Initial Work* - [SamGetlan](https://github.com/SamGetlan)


