# 🎓 Student Management Full Stack Application

This is a full stack CRUD-based web application built using **Spring Boot** (Java) and **React.js**. It allows users to:

- ✅ Add student details (name and address)
- 📋 View a list of all added students
- 🔁 Communicate between frontend and backend using REST APIs

---

## 🛠️ Tech Stack

### Backend:
- Java 17+
- Spring Boot
- Spring Data JPA
- MySQL
- Maven

### Frontend:
- React.js
- Material UI (MUI)
- JavaScript (ES6+)
- Fetch API

---
StudentSystem/
├── StudentSystem/ ← Spring Boot backend
│ └── src/...
│ └── pom.xml
├── studentfrontend/ ← React frontend
│ └── src/...
│ └── package.json
└── README.md ← Project overview


---

## 🚀 Features

- Add student records through a React form
- Fetch and display student data in real-time
- Fully RESTful backend API
- Cross-Origin Resource Sharing (CORS) enabled
- Material UI-powered modern frontend design

---

## 📦 How to Run

### 🧪 Backend (Spring Boot)

1. Open `StudentSystem/` in IntelliJ or your IDE
2. Make sure MySQL is running, and update `application.properties` with your DB credentials
3. Run:

```bash
./mvnw spring-boot:run

🌐 Frontend (React)
Open studentfrontend/ in VS Code or terminal

npm install
npm run dev   # or npm start if using CRA

Frontend runs on http://localhost:5173
Backend runs on http://localhost:8080

🎯 Learnings
Full stack integration of React and Spring Boot

RESTful API creation using Spring Data JPA

React useState and useEffect for state and lifecycle

Material UI component design

CORS handling between client and server

🙋‍♂️ Author
Gunjan Mahara
🔗 LinkedIn: https://www.linkedin.com/in/gunjan-mahara-364733258/


