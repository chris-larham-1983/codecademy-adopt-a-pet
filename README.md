# Table of Contents

* [General Information](#general-information)
* [Project Structure](#project-structure)
* [Technologies](#technologies)
* [Unit Tests](#unit-tests)
* [Using the App](#using-the-app)
* [License](#license)

***

## General Information

This is my solution to the **Codecademy** challenge project entitled *Adopt a Pet*, wherein I had to design 
a responsive **React** website that allows users to browse through a selection of pets that are available for adoption.  

The information for the adoptee pets comes from the `animals.json`, `details.json`, and `types.json` files that are 
located in the `src/mocks/data` folder.  These files are communicated with using `async/await` syntax.

I added some user-friendly front-end hover transitions: the navigation links increase in size and change color from white 
to khaki over the space of a 0.5-second hover, and the animal images and their associated text increases in size over the 
course of a 1-second hover.  I also added a linear gradient background to the elements that serve as `<header>` and `<footer>` 
elements.

I used *React Testing Library* to unit test the User Interface, making sure the expected interface elements render correctly 
and the navigation links work appropriately.

***

## Project Structure

![Project Structure][project_structure]

[project_structure]: src/assets/adopt_a_pet_directory_structure.png

***

## Technologies
  
I wrote this **React** website using the following technologies:

- *ReactJS*
- *JSX*
- *Vanilla JavaScript*
- *HTML5*
- *CSS3*
- *React Testing Library*
- *Git and GitHub*
  
***

## Unit Tests

![Unit_Tests][unit_tests]

[unit_tests]: src/assets/adopt_a_pet_unit_tests.PNG

***

## Using the App

This app can be viewed and used at:

- https://codecademy-adopt-a-pet.netlify.app

Alternatively, clone this project and navigate to the project's root directory on your local machine.  Run 
`npm install` to install the project dependencies, and then `npm start` to run the project on `http://localhost:3000`.

***

## License

MIT License

Copyright (c) 2022 Chris Larham

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