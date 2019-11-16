[![Build Status](https://travis-ci.org/key-joshua/broadcaster-andela-cycle-13.svg?branch=develop)](https://travis-ci.org/key-joshua/broadcaster-andela-cycle-13)
[![CircleCI](https://circleci.com/gh/key-joshua/broadcaster-andela-cycle-13.svg?style=svg)](https://circleci.com/gh/key-joshua/broadcaster-andela-cycle-13)
[![Coverage Status](https://coveralls.io/repos/github/key-joshua/broadcaster-andela-cycle-13/badge.svg?branch=develop)](https://coveralls.io/github/key-joshua/broadcaster-andela-cycle-13?branch=develop)
[![Maintainability](https://api.codeclimate.com/v1/badges/7fc4405b4dea1a75adf9/maintainability)](https://codeclimate.com/github/key-joshua/broadcaster-andela-cycle-13/maintainability)

# broadcaster Application

Corruption is a huge bane to Africa’s development. African countries must develop novel and localized solutions that will curb this menace, hence the birth of Broadcaster. Broadcaster enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public. Users can also report on things that need government intervention
<br>

## Features

- All users who wishes they Landing on Home page of broadcaster Application.
- All Users who sign up will get free account on broadcaster Application.
- All Users who have acoount on broadcaster Application can sign in.
- All Users who sign in can change password.
- All Users who sign in can update profile.


- All Users who sign in can view his/her record.
- All Users who sign in can view other user record.
- All Users who sign in can comment other user record.

- All Users who sign in can create his/her record.
- All Users who sign in can comment on his/her record.
- All Users who sign in can update only his/her record.
- All Users who sign in can delete only his/her record.

- Admin can view all users records.
- Admin can view and change users record status.
 <br>

## Visit broadcaster UI Templates

Before we get started Remember to take  :coffee:   :pizza:  and :dancer:   When You Are coding, come on Dude it all about relax

 <br>

## Frontend tools

 - Javascript
 - HTML
 - CSS 

#### Get into broadcaster UI Template by Visiting Thoses link below

This, It all about what i have been requested (recommanded) in the instructions to hosting UI Template in github using this gh-pages branch and right now my UI Template Application is Hosted: 

- [broadcaster Application for users](https://key-joshua.github.io/broadcaster-andela-cycle-13/index.html).
- [broadcaster Application admin panel ](https://key-joshua.github.io/broadcaster-andela-cycle-13/UI/html/admin_signin.html).

## Backend tools

 - All Neccessary libraries
 - Express JS
 - NodeJs
 - Mocha
 - Chai

#### Get into broadcaster Back-end by Visiting Thoses link below

This, It all about what i have been requested (recommanded) in the instructions to hosting my APIs to Heroku, by using heroku services right now all endpoints of Application is Hosted: 

- [Api Root Heroku](https://broadcaster-andela-cycle-13.herokuapp.com)


#### Get into broadcaster Back-end Documentation by Visiting Thoses link below

This, It all about what i have been requested (recommanded) in the instructions to build documentation of all endpoints of project, by using swagger 2.0 right now all endpoints of Application is documented

- [Api Documentation](https://broadcaster-andela-cycle-13.herokuapp.com/api/v1/documentation/)

#### TABLE OF API ENDPOINTS SPECIFICATION AND DESCRIPTION

- Version API using URL versioning starting with the letter “v”. A simple ordinal
  number would be appropriate and avoid dot notation such as 1.0. So, that why you have to add api/v1 
  for each route of endpoints you want to access for example(i.e) http://localhost:1000/api/v1/auth/signup/  


| NO | VERBS  | ENDPOINTS                            | STATUS   | ACCESS                   | DESCRIPTION                             |
|----|--------|--------------------------------------|----------|--------------------------|-----------------------------------------|
| 1  | POST   | /auth/signup/                        |  201 OK  | public                   | create an account then get token        |
| 2  | POST   | /auth/signin/                        |  200 OK  | public                   | login to the app then get token         |
| 3  | GET    | /users/                              |  200 OK  | public                   | view all users with your token          |
| 4  | POST   | /red-flags/                          |  201 OK  | public                   | create any type of record with token    |
| 5  | GET    | /red-flags/                          |  200 OK  | public                   | view all created records with token     |
| 6  | GET    | /red-flags/:red-flag-id              |  200 OK  | public                   | view single created record with token   |
| 7  | PATCH  | /red-flags/:red-flag-id/comment      |  200 OK  | private (Owner's record) | update single record details with token |
| 8  | PATCH  | /red-flags/:red-flag-id/location     |  200 OK  | private (Owner's record) | update location of record with token    |
| 9  |PATCH   | /red-flags/:red-flag-id/changestatus |  200 OK  | private (Admin's system) | update location of record with token    |
| 10 |DELETE  | /red-flags/:red-flag-id              |  200 OK  | private (Owner's record) | delete single record with token         |


#### Other Tools

Other tools and technologies used in development of this application are;
- Hoster: [Heroku]().
- Compiler: [Babel](https://babeljs.io/).
- Pivotal Tracker:[PT](https://www.pivotaltracker.com/n/projects/2379610).
- Style Guide: [Airbnb](https://airbnb.io/projects/javascript/).
- Integrate: [TravisCI](https://travis-ci.org/key-joshua/broadcaster-andela-cycle-13).
- Integrate: [Coveralls](https://coveralls.io/github/key-joshua/broadcaster-andela-cycle-13).
- Framework: [ExpressJS](http://expressjs.com/).
- Documentation: [Swagger](https://swagger.io/).
- Linting Library: [ESLint](https://eslint.org/).
- API Testing environment: [Postman](https://www.getpostman.com).
- Programming language: [JavaScript(ES6)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/).
- Text Editor: [VSCode](https://code.visualstudio.com), [Sublime Text](https://www.sublimetext.com/).

#### Getting Start With Project

1. Clone the github repository [here](https://github.com/key-joshua/broadcaster-andela-cycle-13.git). 
2. Kindly read very well the provided swagger documentation

- Clone this project on your machine , by running this command on in your command line or Terminal:
 ```
git clone https://github.com/key-joshua/broadcaster-andela-cycle-13.git
 ```
 - Install the required dependencies found in package.json by running this command:
 ```
npm install
 ```
 - And then to start running  this project on your machine , run this command:
 ```
npm run server
 ```
 - then to run test, run this command:
 ```
npm run test
```

#### Api Documentation

Get started with broadcaster Api endpoints swagger documentation locally after clone project [here](http://localhost:1000/api/v1/documentation).

#### Deployment

- gh-pages : [broadcaster](https://key-joshua.github.io/broadcaster-andela-cycle-13/).
- heroku : [broadcaster](https://broadcaster-andela-cycle-13.herokuapp.com).
#### Dedicated: [Andela-Developer-Challenge](https://andela.com/).

#### Develoer: [Key Joshua](https://www.instagram.com/key_joshua/).