# AltSchool Third Semester Exam Project

## Project Question

Create a new vue js application then using the GitHub API, fetch your GitHub repositories using this endpoint <https://api.github.com/users/{{USERNAME}}/repos>. show a page with a list of all your repositories on GitHub(the page should have some form of pagination). Then create another page showing data for a single repo clicked from the list of repos using nested routes. Make sure to implement a wildcard route to catch 404 pages. NB: Good UI and Designs are important.

[Hosted Link](https://githubapi-vue.vercel.app)

## Setup Instructions

To run the project locally on your machine, in the project directory, you can:

Clone the project by running:

### `git clone`

To install dependencies, cd into the project directory and run:

### `yarn`

To start the development server, run:

### `yarn run dev`

Runs the app in the development mode.\
Open [http://localhost:your-given-port](http://localhost:your-given-port) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Project overview

The website contains three pages: Home, Repositories and Repository Details

* Home Page: Here you are able to see information about the user

* Repositories Page: On this page you can see the entire list of the users repositories
  
* Repository Details Page: On this page you can view the details of a particular repository clicked on
