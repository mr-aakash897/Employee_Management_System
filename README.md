# SyntecxHub - Employee Management System

A full-stack **Employee Management System** built using the **MERN stack**, designed with clean architecture, scalable APIs, and a modern React frontend.  
This project allows organizations to manage employee records efficiently with CRUD operations and a professional UI.

---

## 🚀 Project Overview

The **SyntecxHub Employee Management System** is a full-stack web application that enables users to:
- Add new employees
- View all employees
- Update employee details
- Delete employee records
- Manage data securely using MongoDB

The project follows **industry-standard folder structure**, RESTful API design, and clean frontend practices, making it ideal for **internships, fresher roles, and real-world learning**.

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- JavaScript (ES6+)
- HTML5, CSS3
- Axios (API integration)
- Responsive UI (No UI libraries used)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose ODM
- dotenv for environment variables

### Tools & Workflow
- Git & GitHub
- VS Code
- REST APIs
- MVC-like backend structure

---

## 📂 Project Structure
```
Syntecxhub_Employee_Management_System/
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── services/
│ │ ├── styles/
│ │ ├── App.jsx
│ │ └── main.jsx
│ └── package.json
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── controllers/
│ ├── config/
│ ├── server.js
│ └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Features Implemented

- Employee CRUD operations (Create, Read, Update, Delete)
- RESTful API architecture
- MongoDB schema validation
- Axios-based frontend-backend communication
- Responsive and clean UI
- Proper error handling and validation

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/api/employees` | Get all employees |
| POST | `/api/employees` | Add a new employee |
| PUT | `/api/employees/:id` | Update employee |
| DELETE | `/api/employees/:id` | Delete employee |

---

## 🧪 Backend Status
```
Server running on 5000
MongoDB Connected 
```

---

## 🏃‍♂️ How to Run Locally
### 1️⃣ Clone the Repository
```
git clone https://github.com/mr-aakash897/Syntecxhub_Employee_Management_System.git
cd Syntecxhub_Employee_Management_System
```
### 2️⃣ Run Backend
```
cd backend
npm install
npm run dev
```

#### Create a .env file in backend/:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 3️⃣ Run Frontend
```
cd frontend
npm install
npm run dev
```

---

## 📌 Current Status
- ✅ Backend API complete
- ✅ MongoDB connected
- ✅ Frontend pages built
- ✅ GitHub repository updated
- 🔜 Edit Employee feature in progress
- 🔜 UI refinements & validations

---

## 🎯 Learning Outcomes
- Full-stack MERN development
- REST API design
- MongoDB schema validation
- Frontend-backend integration
- GitHub workflow & project structuring

---

## 👨‍💻 Author
Aakash Rajesh Chouhan
- GitHub: mr-aakash897
- Role: Full Stack Developer (Fresher)

---

## 📄 License
This project is open-source and available for learning and educational purposes.
