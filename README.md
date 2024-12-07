Laptop Managment System <br />
A full-stack Laptop Managment System application built with the MERN stack (MongoDB, Express, React, Node.js). Users can view, add, edit, and delete , as well as filter employees by name,role etc. or search by.
Getting Started
Prerequisites
Node.js (v12+)
MongoDB (Local or MongoDB Atlas)
Backend Setup
Navigate to the backend directory:


cd backend
Install dependencies:
    

npm install
Set up environment variables:

Create a .env file in the backend directory and add your MongoDB connection string:
plaintext

MONGO_URI=your-mongodb-connection-string
PORT=5000
Run the backend server:
npm start
The backend server will be running at http://localhost:5000.

Frontend Setup
Navigate to the frontend directory:

cd frontend
Install dependencies:

npm install
Set up environment variables:

Create a .env file in the frontend directory and add the backend API URL:
plaintext

REACT_APP_API_URL=http://localhost:5000/api/
Run the frontend server:
npm start
The frontend server will be running at http://localhost:3000.

Running the Application
Start the Backend Server:

Ensure MongoDB is running locally or accessible through MongoDB Atlas.
Run npm start in the backend directory.
Start the Frontend Server:

Run npm start in the frontend directory.
Access the Application:

Open a browser and go to http://localhost:3000.
Dependencies
Backend
express: Web framework for Node.js.
mongoose: MongoDB object modeling for Node.js.
cors: Middleware to enable CORS.
dotenv: Loads environment variables from a .env file.
Frontend
react: JavaScript library for building user interfaces.
react-router-dom: Library for routing in React.
