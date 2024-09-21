Task Management Application
Introduction
Welcome to the Task Management Application! This project is a full-stack application designed to help users manage their tasks efficiently. It features real-time updates using Socket.IO, secure user authentication, and a comprehensive task management system. Users can create, update, delete tasks, and even add comments, with changes reflected in real-time across all connected clients.

Features
User Authentication: Secure login and signup with JWT-based authentication.
Task Management: Create, update, delete, and list tasks.
Real-Time Updates: Live updates of tasks using Socket.IO.
Comments: Add comments to tasks with real-time notifications.
Technologies Used
Backend: Node.js, Express.js
Database: MongoDB
Real-Time Communication: Socket.IO
Authentication: JWT
Middleware: Custom authentication and authorization middleware
Getting Started
Prerequisites
Ensure you have the following installed:

Node.js (v16 or higher recommended)
MongoDB (installed and running)
Setup
Clone the Repository

bash
Copy code
cd task-management-app
Install Dependencies

Navigate to the project directory and run:

bash
Copy code
npm install
Configure Environment Variables

Create a .env file in the root directory and add the following environment variables:

env
Copy code
DB_URI=mongodb://localhost:27017/task-management
JWT_KEY=your_jwt_secret_key
Replace your_jwt_secret_key with a secret key of your choice.

Run the Server

Start the server with:

bash
Copy code
npm start
The server will start and listen on port 8080. You should see the message: Server Successfully Running on 8080.

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
Socket.IO: The server uses Socket.IO for real-time updates. Connect to http://localhost:8080 to receive real-time notifications about tasks.

Troubleshooting
Database Connection Issues: Ensure MongoDB is running and the DB_URI in your .env file is correct.
JWT Authentication Errors: Verify the JWT_KEY in your .env file is set correctly.
Contributing
Feel free to contribute to this project by opening issues, submitting pull requests, or providing feedback. For major changes, please open an issue first to discuss your proposed changes.

Feel free to adjust the repository URL, configuration details, and other specifics to match your project's actual setup and requirements.
