MERN Stack CRUD Application
This is a simple MERN (MongoDB, Express.js, React, Node.js) stack CRUD (Create, Read, Update, Delete) application. The application allows users to create, read, update, and delete user information including username, email, and password without any authentication.

Features
Create: Add new user data with username, email, and password.

Read: Display all user data on the same page.

Update: Update user data by opening a new form.

Delete: Remove user data from the list.

Prerequisites
Make sure you have the following installed:

Node.js

npm (Node Package Manager)

MongoDB

Installation
Backend
Clone the repository:

bash
git clone https://github.com/turukpavan/crud-with-mern.git
cd crud-with-mern/backend
Install backend dependencies:

bash
npm install
Create a .env file in the backend directory and add your MongoDB connection string:

env
MONGODB_URI=your-mongodb-connection-string
Start the backend server:

bash
npm start
The backend server will run on http://localhost:3000.

Frontend
Navigate to the frontend directory:

bash
cd ../frontend
Install frontend dependencies:

bash
npm install
Start the frontend development server:

bash
npm start
The frontend server will run on http://localhost:3001.

Usage
Open your browser and go to http://localhost:3001.

You will see a form to add new user data with fields for username, email, and password.

After adding a new user, the data will be displayed on the same page with two buttons for each user:

Update: Click this button to open a new form pre-filled with the user's data. Submit the form to update the user's information.

Delete: Click this button to remove the user's data from the list.

Technologies Used
Frontend: React.js, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB, Mongoose

License
This project is licensed under the MIT License.
