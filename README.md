# 🌍 PERN Travel Website

A modern **Full Stack Travel Website** built using the **PERN Stack (PostgreSQL, Express.js, React.js, Node.js)** featuring secure JWT authentication, user registration, login, and a responsive travel-themed UI.

## 🚀 Live Demo

🔗 **Website:** https://pern-login-register-form.vercel.app/

---

## 📸 Project Preview

> Add screenshots inside a `screenshots/` folder and update the paths below.

* Login Page
* Register Page
* Home Page
* Authentication Flow

Example:

```md
![Home](./screenshots/home.png)
```

---

# ✨ Features

### 🔐 Authentication

* User Registration
* User Login
* Password Hashing using **bcrypt**
* JWT Authentication
* Secure API
* Duplicate Email Validation
* Protected Authentication Flow

### 💻 Frontend

* React + Vite
* Tailwind CSS
* Responsive UI
* Glassmorphism Login & Register Pages
* Travel Landing Page
* React Router DOM
* Axios API Integration
* React Icons

### ⚙️ Backend

* Node.js
* Express.js
* PostgreSQL
* REST API
* Environment Variables
* CORS Configuration

### 🗄️ Database

* PostgreSQL
* Users Table
* Secure Password Storage
* Email Validation

---

# 🛠 Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router DOM
* React Icons

## Backend

* Node.js
* Express.js
* PostgreSQL
* bcrypt
* JSON Web Token (JWT)
* dotenv
* cors

---

# 📂 Project Structure

```
travel-website
│
├── client
│   ├── src
│   ├── public
│   └── package.json
│
├── server
│   ├── config
│   ├── controllers
│   ├── routes
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/your-repository.git
```

Move into the project:

```bash
cd your-repository
```

---

## Frontend Setup

```bash
cd client

npm install

npm run dev
```

Runs on:

```
http://localhost:5173
```

---

## Backend Setup

```bash
cd server

npm install

npm run dev
```

Runs on:

```
http://localhost:5000
```

---

# 🔑 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000

DATABASE_URL=YOUR_DATABASE_URL

JWT_SECRET=YOUR_SECRET_KEY
```

---

# 🗃 Database

Create a PostgreSQL database and run:

```sql
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    dob DATE,
    gender VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

---

# 🌐 API Endpoints

## Register

```
POST /api/auth/register
```

### Body

```json
{
  "name": "John",
  "email": "john@gmail.com",
  "password": "123456",
  "dob": "2000-01-01",
  "gender": "Male"
}
```

---

## Login

```
POST /api/auth/login
```

### Body

```json
{
  "email": "john@gmail.com",
  "password": "123456"
}
```

---

# 🚀 Deployment

### Frontend

* Vercel

### Backend

* Render

### Database

* Neon PostgreSQL

---

# 📚 What I Learned

* Building a Full Stack PERN Application
* REST API Development
* PostgreSQL Integration
* Password Hashing with bcrypt
* JWT Authentication
* React Router
* Axios API Calls
* Environment Variables
* Full Stack Deployment
* Git & GitHub Workflow
* Deploying React on Vercel
* Deploying Express on Render

---

# 🔮 Future Improvements

* User Profile
* Edit Profile
* Travel Destination CRUD
* Trip Booking
* Wishlist
* Search Destinations
* Reviews & Ratings
* Admin Dashboard
* Dark Mode
* Payment Gateway Integration

---

# 👨‍💻 Author

**Sarbajit Acharjee**

Frontend Developer | MERN / PERN Stack Developer

If you like this project, feel free to ⭐ the repository.
