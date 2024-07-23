# Product Management API

A robust backend service for managing products, built with Node.js and Express.js. This project showcases a basic CRUD (Create, Read, Update, Delete) API for handling product data with MongoDB integration.

## Table of Contents

- [Introduction](#introduction)
- [Demo](#demo)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Challenges and Learnings](#challenges-and-learnings)
- [Future Improvements](#future-improvements)
- [Contact](#contact)
- [License](#license)

## Introduction
The Product Management API provides a backend solution for managing product information. It allows users to perform CRUD operations on product data through a RESTful API. The application is built using Express.js for the server, Mongoose for MongoDB interactions, and follows a modular structure to maintain code clarity and scalability.
The main components of the application are:

- **Express.js**: The web framework used for handling HTTP requests and routing.
- **Database Connection**: Handles connecting to a database for data persistence.
- **Product Routes**: Manages various API endpoints related to products.

## Demo
no live demo

## Installation
1. Set Up MongoDB
You need a MongoDB instance to store and manage your data. You can choose between a cloud-based MongoDB service or a local installation.

**Option 1:** Using MongoDB Atlas (Cloud-Based)
- Go to the MongoDB Atlas website and sign up for a free account.
- Create a new cluster by following the setup wizard.
- Once your cluster is created, go to the "Database Access" tab and create a new user with appropriate permissions.
- Navigate to the "Network Access" tab and add your IP address to the IP whitelist.
- Obtain the connection string from the "Connect" button, which you'll use in your .env file.
  
**Option 2:** Installing MongoDB Locally
- Follow the installation instructions for your operating system.
- Start the MongoDB server using the mongod command in your terminal.
- By default, MongoDB runs on mongodb://localhost:27017, which you can use for local development.

2. Clone the Repository

```bash
Copier le code
git clone https://github.com/Nada-TB/Product-Management-API.git
```
3. Navigate to the Project Directory
```bash
Copier le code
cd Product-Management-API
```
4. Install Dependencies
Install the required Node.js dependencies using npm:

```bash
Copier le code
npm install
```
5. Configure Environment Variables
Create a .env file in the root directory of the project with the following content:

```plaintext
Copier le code
MONGODB_CONNECTION_STRING=your_mongodb_connection_string
```
Replace your_mongodb_connection_string with the connection string obtained from MongoDB Atlas or your local MongoDB server.

6. Run the Application
Start the server using npm:

```bash
Copier le code
npm start
```
7. Install Postman
Download and install Postman from Postman's official website

### Requirements
- Node.js (version 14.x or higher recommended)
- MongoDB (installed locally or use a cloud-based MongoDB service)
- Postman (for testing the API)
- .env file with MongoDB connection string

## Usage
To interact with the API, you can use tools like Postman to test the endpoints. Here’s a quick guide:
- Open Postman and create a new request.
- Enter the request URL and select the HTTP method (GET, POST, PUT, DELETE).
- Configure the request body if necessary (for POST and PUT requests).
- Click “Send” to make the request.
- View the response in the Postman interface, including the status code, response body, and headers.
- Refer to the Postman Documentation for more details on using Postman.

Get All Products

1. Method: GET
URL: http://localhost:3000/api/product/all
Add a New Product

2. Method: POST
URL: http://localhost:3000/api/product
Body: JSON data in the request body:

```json
Copier le code
{
  "name": "Product A",
  "quantity": 10,
  "price": 100
}
```
3. Get a Product by ID

- Method: GET
- URL: http://localhost:3000/api/product/{id} (Replace {id} with an actual product ID)

4. Update a Product by ID

- Method: PUT
- URL: http://localhost:3000/api/product/{id} (Replace {id} with an actual product ID)
- Body: JSON data in the request body:

```json
Copier le code
{
  "price": 150
}
```
5. Delete a Product by ID

- Method: DELETE
- URL: http://localhost:3000/api/product/{id} (Replace {id} with an actual product ID)

## Features
- CRUD Operations: Create, Read, Update, and Delete products.
- API Routing: Clean routing with Express.js for product management.
- Database Integration: MongoDB integration for data storage.
- Error Handling: Comprehensive error handling for API requests.

## Technologies Used

- Node.js: Server-side JavaScript runtime.
- Express: Web framework for building the API.
- MongoDB: NoSQL database for data storage.
- Mongoose: ODM library for MongoDB.
- dotenv: Module to load environment variables from a .env file.

## Project Structure

Outline the structure of your project directory, explaining the purpose of key files and folders.

```plaintext
your-repo-name/
├── controllers/            # Controller files for handling requests
│   └── product.controller.js
├── database/               # Database connection setup
│   └── db.js
├── models/                 # Mongoose models
│   └── product.model.js
├── routes/                 # API routes
│   └── product.route.js
├── .env                    # Environment variables
├── .gitignore              # Git ignore file
├── index.js                # Entry point for the application
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Challenges and Learnings

**Challenge:** Handling asynchronous database operations and ensuring proper error handling.

**Learning:** Gained experience in integrating MongoDB with Express.js and structuring a Node.js application for scalability.

## Future Improvements
- Add Authentication: Implement user authentication and authorization.
- Improve Error Handling: Provide more detailed and user-friendly error messages.
- Enhanced Validation: Add input validation for request data.
- Implement UI: Develop a user interface (UI) to handle API requests, providing a user-friendly way to interact with the API.

## Contact

- GitHub: [Nada-TB](https://github.com/Nada-TB)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details

---
