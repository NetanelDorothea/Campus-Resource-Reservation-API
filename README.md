# Campus-Resource-Reservation-API

# Project Overview | Scope and System Description
This project (Campus Resource Reservation API (CRRA)) is a REST API for managing user accounts and tasks. It is responsible for the management of reservable campus resources such as study rooms, lab spaces, shared facilities, and equipment. Through the CRRA, users are able to view available resources, manage reservations (crud), enforce access rules, and handle errors and system events reliably. This system will not handle payment processing.

# Technology Confirmation
- Node.js
- Express.js
- MySQL
- JWT Authentication
- bcrypt

Using Node.js, Express.js, MySQL, and Github are important for a course like this, because it ensures consistency, fairness, and manageable grading. Additionally, these tools make sure the back-end is manageable and working. Node.js and Express.js are used to build fast and scalable network applications, while MySQL is used to store information in databases and manage them. Github provides version control and efficient collaboration within teams.

# Setup Instructions
Clone the repository
Run npm install
Create a .env file
Start the server using npm start

The server should start running locally on something like http://localhost:3000.
To get the status of the server simply us the following link http://localhost:3000/status.

# Environment Variables
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root123
DB_NAME=campus_reservation
JWT_SECRET=mysecretkey
PORT=3000

# Database Initialization Steps
Create a MySQL database named campus_reservation
Import the provided SQL file "milestone2_schema.sql"

# Authentication Overview
The project uses JWT authentication. After logging in, users receive a token that must be included in protected API requests.
        

# API Endpoint Summary
Base URL: http://localhost:3000

GET:
- /status | Retrieve status
- /api/users | Retrieve information from all users
- /api/resources | Retrieve information from all resources
- /api/reservations | Retrieve information from all reservations

POST
- /api/auth/register | Register a user
- /api/auth/login | User login
- /api/resources | Create resource
- /api/reservations | Create reservation

# How to Run the Project Locally
Run the command "npm start" and the server will run on http://localhost:3000.


# Current Project Status
- Node.js and Express.js are installed and configured in the project.
- Core API structure and server setup are completed.

# Refinement and Optimization
- created helper function in auth.js reducing duplicate SQL statement "const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);" for cleaner, shorter and more effecient code
- in auth.js improved variable naming which makes funcationality easier to understand
- in reservations.js improved variable naming which makes funcationality easier to understand
- in reservation.js removed reduntant code if (!req.body.start_time) {return res.status(400).json({ error: 'start_time is required' });} because its already validated before it reaches that code
- in resources.js removed redundant code "if (!resource_type) {return res.status(400).json({error:"Resource does not exist" });}" because validate already ensures the field exists  
- improved middleware usage in auth.js by removing redundant const auth = require('../middleware/authMiddleware');