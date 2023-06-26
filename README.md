# React-Calculator

React calculator is just that. A calculator built with React. This is a simple project I set out to build, as a way of keeping up on skills. This calcualtor performs simple math tasks, such as addition, subtraction, multiplication, and division. It also handles negative numbers, percentages and memory storage.

I could have achieved memory storage easily enough by using local storage, however I chose to create a simple relational database to handle storage. Perhaps this was overkill, it however allowed me an opportunity to incorporate back end functionality for fun.

## Dependencies

- React
- Node.js
- Express
- Dotenv
- Mysql2
- Concurrently

## Installation

Note: You must have Mysql and Mysql Shell installed. You can visit the community downloads page [here](https://dev.mysql.com/downloads/mysql/). Alternatively, Workbench can be used to create the database.

- Clone repo
- From the root directory, run "npm install" (I have an "install" script setup to handle installation for the root package.json, as well as dependencies located in the client and server directories. Npm i from the root will not install the client and server directories)
- CD into the server directory
- Run the following command: "mysql -u root -p"
- Enter your mysql password when prompted
- Create the database with the following: "source db/schema.sql"
- Seed the database with the following: "source db/seeds.sql"
- Type "quit" then cd back into the root directory
- Run "npm run develop"

## Challenges

## Deployed Application
