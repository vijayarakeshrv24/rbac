# RBAC Todo Management System

A full-stack **Role-Based Access Control (RBAC)** Todo application built using:

* **React (Frontend)**
* **Node.js + Express (Backend)**
* **MongoDB (Database)**
* **JWT Authentication**
* **Bcrypt Password Hashing**
* **Tailwind CSS (UI Styling)**

---

## 🚀 Features

### 👤 User

* Register & Login
* View all Todos

### 🛡️ Admin

* Add Todos
* Edit Todos
* Delete Todos
* View all Todos

### 🔐 Security

* JWT Authentication
* Password Hashing with Bcrypt
* Protected Routes
* Role-Based Permissions

Admins are created manually by the organization (not through the UI).

---

## 📁 Project Structure

```
rbac-project/
│
├── backend/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── controllers/
│   │   │   ├── auth.controller.js
│   │   │   └── todo.controller.js
│   │   ├── middleware/
│   │   │   ├── auth.js
│   │   │   └── roles.js
│   │   ├── models/
│   │   │   ├── user.model.js
│   │   │   └── todo.model.js
│   │   ├── routes/
│   │   │   ├── auth.routes.js
│   │   │   └── todo.routes.js
│   │   └── server.js
│   └── .env
│
└── frontend/
    ├── src/
    │   ├── context/AuthContext.jsx
    │   ├── pages/
    │   │   ├── Login.jsx
    │   │   ├── Register.jsx
    │   │   ├── AdminDashboard.jsx
    │   │   └── UserDashboard.jsx
    │   ├── components/ProtectedRoute.jsx
    │   ├── styles/index.css
    │   ├── App.jsx
    │   └── main.jsx
    └── package.json
```

---

## 🔧 Backend Setup

### 1. Install dependencies

```bash
cd backend
npm install
```

### 2. Create `.env` file

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/rbac_todo_app
JWT_SECRET=your_super_secret_key_here
```

### 3. Start backend

```bash
npm run dev
```

Backend runs at:

```
http://localhost:5000
```

---

## 🗄️ MongoDB Setup

Create an **admin user manually** in MongoDB Compass or shell:

```json
{
  "name": "Admin User",
  "email": "admin@mail.com",
  "password": "<hashed password>",
  "role": "admin"
}
```

---

## 🎨 Frontend Setup

### 1. Install dependencies

```bash
cd frontend
npm install
```

### 2. Start Vite app

```bash
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔐 Authentication Flow

### Register

* Password hashed using bcrypt
* User saved in MongoDB

### Login

* Email + password checked
* JWT token generated
* Token is returned to frontend

### Protected Requests

Frontend sends token:

```
Authorization: Bearer <token>
```

Backend validates token through middleware.

---

## 🛡️ Role-Based Access

### Admin-only routes:

```
POST /api/todos
PUT  /api/todos/:id
DELETE /api/todos/:id
```

### User routes:

```
GET /api/todos
```

---

## 📚 API Endpoints

### Auth

| Method | Route              | Description       |
| ------ | ------------------ | ----------------- |
| POST   | /api/auth/register | Register new user |
| POST   | /api/auth/login    | Login user        |

### Todos

| Method | Route          | Role       | Description |
| ------ | -------------- | ---------- | ----------- |
| GET    | /api/todos     | user/admin | Get todos   |
| POST   | /api/todos     | admin      | Create todo |
| PUT    | /api/todos/:id | admin      | Update todo |
| DELETE | /api/todos/:id | admin      | Delete todo |

---

## 🖥️ Frontend Pages

### 🔹 Register

* Only users can register

### 🔹 Login

* Redirects based on role:

  * Admin → `/admin`
  * User → `/user`

### 🔹 Admin Dashboard

* Add
* Edit
* Delete
* View todos

### 🔹 User Dashboard

* Only view todos

---

## 🧰 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT
* Bcrypt

### Frontend

* React
* Vite
* Axios
* React Router DOM
* Tailwind CSS

---

## 🔒 Security Features

* Token authentication
* Password hashing
* Role-based permissions
* API protection
* Secure session management

---

## 🌟 Why This Project Is Great

* Demonstrates full-stack development
* Shows authentication/authorization
* Implements RBAC correctly
* Clean folder structure
* Excellent portfolio project
* Good for college/internship submissions

---

