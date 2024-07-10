###### Osumare-Backend-Api

### Description

This project is a simple RESTful API built with Node.js and Express.js that manages a collection of tasks (e.g., to-do items). The API allows users to perform basic CRUD (Create, Read, Update, Delete) operations on tasks. Additionally, it supports filtering, sorting, pagination, and authentication using JSON Web Tokens (JWT).

### Requirements

- Nodejs

- npm

- Postman

### Installation

1. Clone the repository

   git clone https://github.com/mathewalexKerala/Osumare-backend-api.git

2. Navigate to the project directory

   cd Osumare-backend-api

3. Install the dependencies

   npm install

4. Start the server

   npm start

The API will be accessible at http://localhost:3000.

##### Endpoints

## Authentication

1.  POST http://localhost:3000/api/v1/login

    - Description: Authenticates a user and returns a JWT token.

    - you can only login with this input json.

    - request body:

      {
      "username":"mathew",
      "password:"123"
      }

    - Responses:

      - 200 Ok : Returns a JWT token.

            {
               "token":"hfeo34234sjf"
            }

      - 401 Unauthorized: Invalid username or password

## Tasks

1. GET http://localhost:3000/api/v1/tasks

   - Description: Retrieve a list of all tasks with optional pagination, filtering and sorting

   - Authorization Tab : Pass token returned from the successful login to Bearer Token

   - Query Parameters:

     - page(optional) : Page number for pagination (default is 1).

     - limit(optional) : Number of tasks per page (default is 10).

     - sort(optional) : Field to sort by (eg:'title').

     - description(optional) : Filter tasks by description.

   - Responses:

     - 200 OK: Return a list of tasks.

       [
       {
       "id":1,
       "title":"Task 1",
       "description":"Description for Task 1"
       },
       ...
       ]

2. GET http://localhost:3000/api/v1/tasks/1

   - Description: Retrieve a specific task by ID.

   - Authorization Tab : Pass token returned from the successful login to Bearer Token

   - Responses:

     {
     "id":1,

     "title":"Task 1",

     "description":"Task description"
     }

     - 404 Not Found: Task not found.

3. POST http://localhost:3000/api/v1/tasks

   - Description:Create a new task.

   - Authorization Tab : Pass token returned from the successful login to Bearer Token

   - Request Body:

     {
     "title":"Task 1",
     "description":"Task description"
     }

   - Responses:

     - 200 OK : Returns the created task

       {
       "id":1,
       "title":"Task 1"
       "description":"Task description"
       }

     - 400 Bad Request : Missing title or description

4. PUT http://localhost:3000/api/v1/tasks/1

  - Authorization Tab : Pass token returned from the successful login to Bearer Token

  - Request Body:

    {
    "title":"Updated task",
    "description":Updated description"
    }

  - Responses:

    - 200 OK: Returns the updated task.

      {
      "id":1,
      "title:"updated task",
      "description":"updated description"
      }

    - 404 Not Found: Task Not found

5. DELETE http://localhost:3000/api/v1/tasks/1

   - Description: Delete a task by ID

   - Authorization Tab : Pass token returned from the successful login to Bearer Token

   - Responses:

     - 200 OK: Successfully deleted task

       {
       "message":"Successfully deleted task with id: 1"
       }

     - 404 Not Found : Task not found

###### Error Handling

The API includes error handling to ensure that meaningful error messages are returned for invalid requests or unexpected issues.

#### URL Not Found

        * eg: http://localhost:3000/v1/tasks/1

        * Description: Handles requests to undefined routes.

        * Responses:

           * 404 Not Found: URL not found

             {
                "error":"url doesnot exist"
             }
