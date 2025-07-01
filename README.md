# 💼 Social Feed + HRMS Web Application

This project is a **full-stack web application** combining a **Social Feed** system and a basic **HRMS (Human Resource Management System)**. It includes a **React-based frontend** and a **Node.js/Express backend** with a structured project folder.

---

## 📁 Project Structure
Social_Feed/
├── HRMS/
│ ├── client/ # Frontend React App
│ └── server/ # Backend Express API
├── .gitignore
├── README.md

---

## ⚙️ Features

### 🌐 Frontend (`client/`)
- Built with **React.js**
- Components for user interaction
- Social Feed (Posts, Comments, Likes)
- Forms, modals, and responsive layout

### 🌐 Backend (`server/`)
- Built with **Node.js** + **Express.js**
- RESTful API architecture
- MongoDB database support (via Mongoose)
- Handles user authentication, post handling, etc.

---

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js & npm installed
- MongoDB installed or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

---

### 📦 Installation Steps

1. **Clone the repo**
```bash
git clone https://github.com/Sravanthi2712/Social_Feed.git
cd Social_Feed/HRMS

2. **Install Client dependencies**
cd client
npm install

3. **Install Server dependencies**
cd ../server
npm install

🔑 Environment Setup
Create a .env file in server/:

env

PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

▶️ **Run the App**
📲 **Frontend**

cd client
npm start
Visit: http://localhost:3000

🖥 **Backend**

cd server
npm run dev
Runs on: http://localhost:5000

🧠 **Tech Stack**
Frontend: React, HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MongoDB (via Mongoose)
Tools: Git, VSCode, npm

✅ **To-Do / Enhancements**
 Add user authentication (JWT)
 Create user dashboards
 Add file upload support
 Integrate real-time features (chat, notifications)
 Improve UI with Tailwind/Bootstrap

👩‍💻 **Author**
Sravanthi Lakkaraju
GitHub -- https://github.com/Sravanthi2712
