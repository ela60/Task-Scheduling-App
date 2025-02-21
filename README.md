# Task Management Application

A web-based Task Management System that allows users to manage tasks, add/edit/delete tasks, reorder them, and move tasks between categories (To-Do, In Progress, Done). The application uses drag-and-drop functionality, integrates with MongoDB for data persistence, and ensures real-time synchronization.

## Live Links

- **Frontend (Live Demo)**: [Live Demo URL]
- **Backend (API)**: [Backend API URL]

## Features

- Add, edit, delete, and reorder tasks.
- Drag-and-drop tasks between categories (To-Do, In Progress, Done).
- Real-time synchronization of tasks.
- Responsive and clean user interface.

---

## Dependencies

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Vite.js**: A build tool that provides a fast development environment for React apps.
- **@hello-pangea/dnd**: A drag-and-drop library to handle task reordering.
- **Tailwind CSS**: A utility-first CSS framework for creating custom designs quickly.
- **Axios**: A promise-based HTTP client for making requests to the backend.

### Backend

- **Express.js**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database used to store tasks and user information.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **jsonwebtoken (JWT)**: For user authentication and generating secure tokens.
- **bcryptjs**: For hashing passwords (if used for user authentication).

---

## Installation Steps

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/task-management-app.git
cd task-management-app
