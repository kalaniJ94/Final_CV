# Celestial-Voyages

## Table of Contents 

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Hot to Contribute](#how-to-contribute)
- [Tests](#tests)


## User Story
    As a User, I want a fun, interactive experience that lets me "book" virtual vacations to destinations throughout the galaxy. 

## Acceptance Criteria
    - GIVEN a webpage which lets me book virtual "voyages".
    - WHEN I load the app, I am greeted with a login screen. 
    - WHEN I signup or login to the app, I am taken to a 'galaxyMap' page, and assigned a JWT to authenticate. 
    - WHEN I am at the Galaxy Map page, I am greeted with an image of our "tour" area, and can select a planet to travel to. 
    - WHEN I press the "book this planet" option, a card is rendered on the voyages page, showing that Planet with price, dates, and more information. 
    - WHEN I view the voyages page, I see all planets I have selected to travel to, along with the total price of the trip, and the total time . 
    - WHEN I logout from the app, my JTW is removed via authentication. 
    

## Description
Our main motivation for this project was to provide an extremely portfolio-ready product to show off for potential employees, by providing a mock business website. We wanted to showcase the ability to create business logic within an app that is also well designed. 

We also wanted to stick with a space theme that our group has followed through the previous two projects. We love space as a theme, as it allows a lot of potential as far as creative ideas and sleek design. 

This project represents the culmination of our journey through this Full-Stack Web Development bootcamp. We've learned so much through the course of the six months spent here, as evidenced by the quality of product shown here. We are incredibly proud of ourselves and each other. 

## Installation

To use this app, ensure you have access and have downloaded Node and mongoDB onto your local machine.

Upon opening the app for the first time, please check to make sure you have a package.json file in the file directory, on the lefthand side. If not, open your terminal using "Cntrl + `", or right click on the file directory and select "Open in intergrated terminal." Type into the terminal "npm init -y".

Still within the terminal, type "npm i" into the terminal. This will install and necessary packages to run our app.

Ensure that you have a 'client' and 'server' folder. You will need to ensure that you have a package.json and package-lock.json in each folder. Check the repository for a full list of all required npm packages. 

Within the client folder, ensure a vite.config file exists. 

Within the terminal, you will need to run a "npm run render-build" command to install all needed npm packages and create the 'dist' folder. 

To run the app locally, enter 'run npm develop' into the console. 

## Usage

[Screenshot showing the Login screen](./client/src/assets/images/login.png)
[Screenshot showing the basicVoyages page, and the glowing function](./client/src/assets/images/basic.png)
[Screenshot showing the premiumVoyages page](./client/src/assets/images/premium.png)

## Credits

W3Schools https://www.w3schools.com/

MDN https://developer.mozilla.org/en-US/

ChatGPT for AI generated images.


Render for docs on deployment

## License
MIT License

Copyright (c) 2023 Kalani Jones, Alexa Lester, Colton Laidig

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Badges

![badmath](https://img.shields.io/github/languages/top/kalaniJ94/Final_CV)

https://img.shields.io/badge/any_text-you_like-blue


## How to Contribute

If you've like to contribute to this project, please reach out! We are incredibly proud of the work, and also of the numerous future opportunities for future features it could hold.

Before you reach out, please be familiar with the Contributor Covenant and the code of conduct within.

Link to GITHUB repo can be found here: https://github.com/kalaniJ94/Final_CV


## Tests

This application contains no tests at this time