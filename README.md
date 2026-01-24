# SyntecxHub - Employee Management System

A full-stack **Employee Management System** built using the **MERN stack**, designed to manage employee records efficiently with a modern, responsive user interface and a secure backend API.<br>
This project is developed as part of **SyntecxHub – Week 3** Task and demonstrates real-world CRUD operations, frontend-backend integration, and clean project architecture.

---

## 🚀 Features

### ✅ Core Functionalities
- Add new employees with validation
- View all employees in a clean dashboard
- Delete employee records
- Salary management & calculations
- Real-time data updates from MongoDB

### 📊 Dashboard Insights
- Total number of employees
- Total salary expenditure
- Average salary calculation

### 🎨 Frontend UI
- Built with React + Vite
- Glassmorphism-inspired modern UI
- Fully responsive design
- Professional layout suitable for real applications

### ⚙️ Backend API
- RESTful API using Node.js & Express
- MongoDB with Mongoose schema validation
- Secure environment variable usage
- Clean MVC-style structure

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

## 🧪 Validation & Error Handling
- Required field validation using Mongoose
- Proper error messages on failed requests
- Frontend form validation before submission

---

## Internship Task Coverage (SyntecxHub – Week 3)
✔ MERN Stack <br>
✔ CRUD Operations<br>
✔ React Frontend<br>
✔ Node + Express Backend<br>
✔ MongoDB Storage<br>
✔ Responsive UI<br>
✔ Form Validation<br>
#### ✅ All task requirements are fully covered

---

## 👨‍💻 Author
Aakash Rajesh Chouhan
- GitHub: mr-aakash897
- Web Development Intern – SyntecxHub

---

## 📄 License
This project is open-source and available for learning and educational purposes.
