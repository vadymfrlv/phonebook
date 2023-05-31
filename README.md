# Phonebook

## Description 📑

Phonebook is a web application that allows users to register, log in, and manage their contact list.
After successful registration, the user is redirected to the contacts page, where they can add
contacts using a form and view the list of existing contacts. Contact validation is performed using
Yup, and if the input values are valid, a request is made to add the contact to the list. If there
are no contacts in the list, the user sees a message indicating this. However, if there is at least
one contact, the user sees a contact counter and a search form. When searching for contacts, the
user is provided with information on how many contacts match the search query. If no contacts match
the search query, the user sees a message indicating this.

The application consists of several pages:

- `/` - a public route that displays the greeting.
- `/signup` - a public route for registering a new user with a form. This route is restricted, and
  if the user is already logged in, they cannot access this route.
- `/signin` - a public route for logging in an existing user with a form. This route is restricted,
  and if the user is already logged in, they cannot access this route.
- `/contacts` - a private route for managing the user's contact list. If the user is not logged in,
  they cannot access this route and will be redirected to the /signin page.

## Demo 🖥

![Demo](https://raw.githubusercontent.com/vadymfrlv/storage/main/demos/phonebook/phonebook-demo.gif)

## Installation ⚡️

To launch a project on GitHub, you first need to clone the project to your local machine. For
instance, if you're working with a React project created using create-react-app, you can clone the
project by running the command git clone https://github.com/username/project.git in your terminal.

After the project has been cloned, you need to navigate to the project directory and install any
dependencies that the project requires. You can do this by running the command `npm install` in your
terminal.

Once all dependencies have been installed, you can start the development server by running the
command <br> `npm start`. This will launch the project in your default browser and any changes you
make to the code will automatically update in the browser.

## Backend API ⚙️

The application communicates with a backend server to perform various operations. The following API
endpoints are used:

### User-related endpoints:

#### POST

- `/users/signup` - Create a new user
- `/users/login` - Log in user
- `/users/logout` - Log out user

#### GET

- `/users/current` - Get information about the current user

### Contact-related endpoints:

#### GET

- `/contacts` - Get all user contacts

#### POST

- `/contacts` - Create a new contact

#### DELETE

- /`contacts/{contactId}` - Delete a contact PATCH /contacts/{contactId} - Update an existing
  contact

Please refer to the backend documentation for detailed information on these endpoints and their
usage
[<b>https://connections-api.herokuapp.com/docs/#/</b>](https://connections-api.herokuapp.com/docs/#/)

## Tech Stack 🛠

The Phonebook application is built using the following technologies:

- React
- React Router DOM
- React-Redux
- Redux Toolkit
- Redux Persist
- Formik
- Yup
- MUI Material
- Styled Components
- Styled System

## Author 👨🏻‍💻

This app was developed by frlv
