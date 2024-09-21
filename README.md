Task Management Application
Introduction
Welcome to the Task Management Application! This project is a full-stack application designed to help users manage their tasks efficiently. It features real-time updates using Socket.IO, secure user authentication, and a comprehensive task management system. Users can create, update, delete tasks, and even add comments, with changes reflected in real-time across all connected clients. admins have the capability to manage tasks created by all users. The frontend is styled using Tailwind CSS to provide a responsive and user-friendly.

Features
User Authentication: Secure login and signup with JWT-based authentication.
Admin: role with extended permissions to manage all tasks of all users
Task Management: Create, update, delete, and list tasks.
Real-Time Updates: Live updates of tasks using Socket.IO.
Comments: Add comments to tasks with real-time notifications.
Import/Export File: File transporting in CSV formate
Pagination: Allow pagination
Sorting-Filtering: Allow sorting and filtering on data

Technologies Used
Backend: Node.js, Express.js
Database: MongoDB
Real-Time Communication: Socket.IO
Authentication: JWT
Middleware: Custom authentication and authorization middleware, JWT
Import/Export File: csv-parser, csv-writer, fast-csv, multer
Resource Sharing: cors
Frontend: Html, tailwind

Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v16 or higher recommended)
MongoDB (installed and running)
Setup
Clone the Repository
cd task-management-app
Install Dependencies

Navigate to the project directory and run:

npm install
Configure Environment Variables

Create a .env file in the root directory and add the following environment variables:

env
DB_URI
JWT_KEY

Run the Server

Start the server with:
npm start or nodemon (npm i -g nodemon)- to install globally
The server will start and listen on port 8080. You should see the message like: Server Successfully Running on 8080.

Access the Application

API Endpoints:

POST /user/signup - Register a new user
POST /user/login - Login and receive a JWT token
GET /task/ - Get tasks for the authenticated user
POST /task/create - Create a new task
PUT /task/update/:id - Update an existing task
DELETE /task/delete/:id - Delete a task
POST /task/:taskId/comment - Add a comment to a task
GET /task/admin - Get all tasks (Admin only)
POST /task/import - Import the CSV file
GET /task/export - Export the CSV file
Socket.IO: The server uses Socket.IO for real-time updates. Connect to http://localhost:8080.

Troubleshooting
Database Connection Issues: Ensure MongoDB is running and the DB_URI in your .env file is correct.
JWT Authentication Errors: Verify the JWT_KEY in your .env file is set correctly.

Contributing
Feel free to contribute to this project by opening issues, submitting pull requests, or providing feedback. For major changes, please open an issue first to discuss your proposed changes.

Feel free to adjust the repository URL, configuration details, and other specifics to match your project's actual setup and requirements.
