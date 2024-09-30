# Books Management API

This project is a **Books Management API** developed using **NestJS**. The API allows users to perform basic CRUD (Create, Read, Update, Delete) operations on a collection of books. It exposes endpoints to create a new book, retrieve all books, retrieve a single book by its ID, update a book, and delete a book.

## Proposed Solution

The API is designed to manage book records and includes the following features:
- **Create**: Add a new book to the collection by providing its details (e.g., title, author, genre, publication date).
- **Read**: Retrieve all books or a specific book by ID.
- **Update**: Modify the details of an existing book by its ID.
- **Delete**: Remove a book from the collection by its ID.

### Technologies Used:
- **NestJS**: A framework for building efficient, reliable, and scalable server-side applications using Node.js.
- **TypeScript**: Ensures static typing and modern JavaScript features.
- **class-validator** and **class-transformer**: These packages are used for request data validation and transformation.

## Endpoints

The API exposes the following endpoints:

| HTTP Method | Endpoint        | Description                    |
|-------------|-----------------|--------------------------------|
| `POST`      | `/books`        | Create a new book              |
| `GET`       | `/books`        | Get all books                  |
| `GET`       | `/books/:id`    | Get a specific book by ID       |
| `PATCH`     | `/books/:id`    | Update a specific book by ID    |
| `DELETE`    | `/books/:id`    | Delete a specific book by ID    |

## DTOs (Data Transfer Objects)

- **CreateBookDto**: Defines the structure and validation rules for creating a book.
- **UpdateBookDto**: Defines the structure for updating a book.

The validation of inputs is done using NestJS `ValidationPipe`, which ensures that only valid data is passed to the service layer.

## How to Run the Application

### Prerequisites

- **Node.js**: You need to have Node.js installed. Download it from [here](https://nodejs.org).
- **NestJS CLI**: You can install it globally with `npm install -g @nestjs/cli`.

### Step-by-Step Guide

1. **Clone the Repository**
   
   First, clone this repository to your local machine:
   ```bash
   git clone https://github.com//AlejandroArpa/Nest-last-project

  ```
2. **Navigate to Project Directory**: Open a terminal and change to the directory where the project is located.
   ```bash
    cd Nest-last-project
   ```
3. **Install Dependencies**: Run the command to install all required dependencies for the project.
  ```bash
   npm install
   ```
4. **Set Up Database**: Ensure your database is set up and configured in the application. Update the database connection settings in the configuration file 

5. **Run the Application**: Start the NestJS application using the provided command.
  ```bash
  npm run start:dev
  ```
6. **Access the API**: Use a tool like Postman or your browser to interact with the API. You can test the various endpoints listed above to create, read, update, and delete book records.


### ER diagram
https://docs.google.com/document/d/11CEuXjrVVLuRYiWJFTRl_Kz13QFSqYDl3oQWD9LrLDY/edit?usp=sharing