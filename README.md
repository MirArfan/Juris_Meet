# ⚖️ Juris Meet

**Juris Meet** is a full-stack lawyer appointment booking web application that allows clients to schedule consultations, view available lawyers, and make secure payments online.

---

## 🔍 Features

### 🌐 Client Side
- Browse available lawyers
- Book appointments with real-time slots
- Pay online (bKash, Razorpay, etc.)
- View and manage bookings

### 🛠️ Admin Panel
- View upcoming appointments
- Manage lawyer availability
- Secure login and access

### 🔒 Authentication
- User login/registration
- Protected routes for both users and admin

### 💳 Payment Integration
- bKash (via SSLCommerz)
- Razorpay (for card payments)

---

## 🧑‍💻 Tech Stack

### Frontend
- Vite + React
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication

---

## 🌍 Live Demo

- **Frontend:** [juris-meet-client.onrender.com](https://juris-meet-frontendd.onrender.com)
- **Admin :** [juris-meet-api.onrender.com](https://juris-meet-admin.onrender.com/)

---

## 🚀 Getting Started Locally

### Prerequisites

- Node.js
- MongoDB
- Git

### Backend Setup

```bash
cd backend
npm install
# Add .env file with MongoDB URI, JWT secret, and payment keys
npm start
