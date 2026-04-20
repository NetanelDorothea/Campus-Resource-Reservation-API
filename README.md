# Campus-Resource-Reservation-API

Project Scope and System Description
The Campus Resource Reservation API (CRRA) is responsible for the management of reservable campus resources such as study rooms, lab spaces, shared facilities, and equipment. Through the CRRA, users are able to view available resources, manage reservations (crud), enforce access rules, and handle errors and system events reliably. This system will not handle payment processing.

Technology Confirmation
Using Node.js, Express.js, MySQL, and Github are important for a course like this, because it ensures consistency, fairness, and manageable grading. Additionally, these tools make sure the back-end is manageable and working. Node.js and Express.js are used to build fast and scalable network applications, while MySQL is used to store information in databases and manage them. Github provides version control and efficient collaboration within teams.

Instructions
In order to make the server run make sure you are in thhe folder and type in "npm start". The server should start running locally on something like http://localhost:3000.
To get the status of the server simply add "/status". SO something like http://localhost:3000/status.

Current Project Status
- Node.js and Express.js are installed and configured in the project.
- Core API structure and server setup are completed.

Refinement and Optimization
- created helper function in auth.js reducing duplicate SQL statement "const [existing] = await db.query('SELECT * FROM users WHERE email = ?', [email]);" for cleaner, shorter and more effecient code
- in auth.js improved variable naming which makes funcationality easier to understand
- in reservations.js improved variable naming which makes funcationality easier to understand
- in reservation.js removed reduntant code if (!req.body.start_time) {return res.status(400).json({ error: 'start_time is required' });} because its already validated before it reaches that code
- in resources.js removed redundant code "if (!resource_type) {return res.status(400).json({error:"Resource does not exist" });}" because validate already ensures the field exists  
- improved middleware usage in auth.js by removing redundant const auth = require('../middleware/authMiddleware');