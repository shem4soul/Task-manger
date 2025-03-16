Task Manager API

This is a **Task Manager API** built with **Node.js, Express, and MongoDB**. It allows users to create, read, update, and delete tasks.

## Features
- Create a task
- Get all tasks
- Get a single task by ID
- Update a task
- Delete a task
- Error handling with custom error messages

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB** (with Mongoose ODM)
- **dotenv** (for environment variables)
- **async-wrapper** (for handling async errors)

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/yourusername/task-manager.git
cd task-manager
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 4. Start the Server
```sh
npm start
```

## API Endpoints

### 1. Get All Tasks
```http
GET /api/v1/tasks
```
**Response:**
```json
{
  "tasks": [
    {
      "_id": "123abc",
      "name": "Sample Task",
      "completed": false
    }
  ]
}
```

### 2. Get a Single Task
```http
GET /api/v1/tasks/:id
```
**Response:**
```json
{
  "task": {
    "_id": "123abc",
    "name": "Sample Task",
    "completed": false
  }
}
```

### 3. Create a Task
```http
POST /api/v1/tasks
```
**Request Body:**
```json
{
  "name": "New Task",
  "completed": false
}
```
**Response:**
```json
{
  "task": {
    "_id": "456def",
    "name": "New Task",
    "completed": false
  }
}
```

### 4. Update a Task
```http
PATCH /api/v1/tasks/:id
```
**Request Body:**
```json
{
  "completed": true
}
```
**Response:**
```json
{
  "task": {
    "_id": "456def",
    "name": "New Task",
    "completed": true
  }
}
```

### 5. Delete a Task
```http
DELETE /api/v1/tasks/:id
```
**Response:**
```json
{
  "task": {
    "_id": "456def",
    "name": "New Task",
    "completed": true
  }
}
```

## Error Handling
The API returns structured error messages if a resource is not found.
```json
{
  "msg": "No task with id : 123xyz"
}
```

## License
This project is licensed under the **MIT License**.

---

### Author
**Emmanuel Shittu**  
[GitHub](https://github.com/shem4soul) | [LinkedIn](https://linkedin.com/in/emmanuel-shittu-91573915a)

