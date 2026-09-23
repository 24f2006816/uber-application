<div align="center">

# 🚖 UBER — Full-Stack Ride Booking Platform

### A modern, real-time ride-booking platform built with React, Node.js, Express, MongoDB & Socket.IO

<br/>

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge\&logo=react\&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge\&logo=tailwindcss\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=node.js\&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge\&logo=express\&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge\&logo=mongodb\&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge\&logo=socket.io\&logoColor=white)
![Google Maps](https://img.shields.io/badge/Google_Maps-4285F4?style=for-the-badge\&logo=googlemaps\&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge\&logo=greensock\&logoColor=black)

<br/>

**Real-Time Ride Booking • Live Location • Captain Dashboard • Fare Estimation • Secure Authentication**

<br/>

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel-black?style=for-the-badge\&logo=vercel)](YOUR_VERCEL_URL)
[![GitHub](https://img.shields.io/badge/Source_Code-GitHub-181717?style=for-the-badge\&logo=github)](YOUR_GITHUB_URL)

</div>

---

# 📌 Overview

This project is a **full-stack ride-booking platform inspired by modern transportation applications such as Uber**.

It provides separate experiences for:

* 👤 Passengers
* 🚗 Captains / Drivers

Passengers can search for locations, select a vehicle, estimate fares, request rides and follow the ride lifecycle.

Captains can register, go online, receive ride requests, accept rides, reach passengers, verify ride OTPs and complete rides.

The application combines **REST APIs, WebSockets, MongoDB, Google Maps and modern React UI architecture** to create a real-time ride-booking experience.

---

# ✨ Features

## 👤 Passenger Features

* 🔐 User registration & authentication
* 🔑 Secure login/logout
* 🛡️ Protected routes
* 📍 Pickup location selection
* 🎯 Destination selection
* 🔎 Location search & suggestions
* 🗺️ Google Maps integration
* 🚕 Vehicle selection
* 💰 Fare estimation
* 🚗 Ride booking
* 📡 Real-time captain matching
* 🔄 Real-time ride status
* 🔢 OTP-based ride verification
* 🏁 Ride completion
* 📱 Responsive UI
* ✨ Smooth animations

---

## 🚗 Captain Features

* 👨‍✈️ Captain registration
* 🔐 Captain authentication
* 🛡️ Protected captain dashboard
* 🟢 Online/offline status
* 📍 Location tracking
* 📡 Real-time ride requests
* ✅ Accept ride requests
* 🚘 Pickup workflow
* 🔢 OTP verification
* 🏁 Start & complete rides
* 💰 Fare information
* 🔄 Real-time ride updates

---

# ⚡ Real-Time Ride System

The application uses **Socket.IO** for real-time communication between passengers and captains.

```text
Passenger
    │
    │ Request Ride
    ▼
Backend
    │
    │ Socket.IO
    ▼
Available Captains
    │
    │ Accept Ride
    ▼
Backend
    │
    │ Socket Event
    ▼
Passenger
```

### Ride Lifecycle

```text
REQUEST RIDE
     ↓
CAPTAIN RECEIVES REQUEST
     ↓
CAPTAIN ACCEPTS
     ↓
CAPTAIN ARRIVES
     ↓
OTP VERIFICATION
     ↓
RIDE STARTS
     ↓
RIDE COMPLETED
```

---

# 🧠 Technology Stack

### Frontend

| Technology       | Purpose                 |
| ---------------- | ----------------------- |
| React.js         | UI                      |
| Vite             | Build tool              |
| Tailwind CSS     | Styling                 |
| GSAP             | Animations              |
| React Router     | Routing                 |
| Axios            | API communication       |
| Socket.IO Client | Real-time communication |
| Google Maps      | Maps & location         |

### Backend

| Technology | Purpose          |
| ---------- | ---------------- |
| Node.js    | Runtime          |
| Express.js | REST API         |
| MongoDB    | Database         |
| Mongoose   | MongoDB ODM      |
| Socket.IO  | WebSockets       |
| JWT        | Authentication   |
| bcrypt     | Password hashing |

---

# 🏗️ Architecture

```text
                         ┌─────────────────────┐
                         │      React UI       │
                         │   Passenger/Captain │
                         └──────────┬──────────┘
                                    │
                              HTTP / WebSocket
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Node + Express    │
                         │      Backend        │
                         └──────────┬──────────┘
                                    │
             ┌──────────────────────┼──────────────────────┐
             │                      │                      │
             ▼                      ▼                      ▼
      Authentication          Ride Services          Maps Services
             │                      │                      │
             ▼                      ▼                      ▼
            JWT                  MongoDB             Google Maps
                                    │
                                    ▼
                              Ride Database
```

---

# 📂 Project Structure

```text
uber-video-main/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
├── Backend/
│   ├── controllers/
│   ├── models/
│   ├── services/
│   ├── middlewares/
│   ├── db/
│   ├── app.js
│   ├── server.js
│   ├── socket.js
│   ├── package.json
│   └── .env.example
│
├── docs/
│   └── screenshots/
│
└── README.md
```

---

# 🔐 Authentication

Authentication follows a JWT-based architecture.

```text
REGISTER
   ↓
PASSWORD HASH
   ↓
MONGODB
   ↓
LOGIN
   ↓
JWT
   ↓
AUTH COOKIE
   ↓
PROTECTED ROUTE
```

Protected resources are validated through backend authentication middleware.

---

# 🗺️ Google Maps Integration

Google Maps services provide location-based functionality including:

* 📍 Current location
* 🔎 Location suggestions
* 🏠 Address search
* 📏 Distance calculation
* ⏱️ Estimated travel time
* 🗺️ Map rendering
* 🚗 Ride tracking

---

# 💰 Fare Calculation

Fare estimation is handled by the backend based on ride information and selected vehicle type.

Example:

```text
Bike
  ↓
Lower Fare

Auto
  ↓
Medium Fare

Car
  ↓
Higher Fare
```

Keeping fare calculation on the backend helps prevent the frontend from becoming the source of truth.

---

# 🔌 API Overview

## User

```http
POST /users/register
POST /users/login
GET  /users/profile
GET  /users/logout
```

## Captain

```http
POST /captains/register
POST /captains/login
GET  /captains/profile
GET  /captains/logout
```

## Ride

```http
POST /rides/create
POST /rides/confirm
POST /rides/start-ride
POST /rides/end-ride
```

## Maps

```http
GET /maps/get-coordinates
GET /maps/get-distance-time
GET /maps/get-suggestions
```

> Routes may vary depending on the current backend implementation.

---

# 🎨 UI / UX

The application is designed around a modern ride-booking experience.

### UI characteristics

* Responsive layouts
* Mobile-first interaction
* Animated panels
* Smooth transitions
* Interactive ride states
* Map-centric experience
* Clean component architecture
* Passenger/captain specific interfaces

GSAP can be used for advanced page and panel animations.

---

# 🗄️ Database Models

### User

```text
User
├── fullname
├── email
├── password
└── socketId
```

### Captain

```text
Captain
├── fullname
├── email
├── password
├── vehicle
├── location
├── status
└── socketId
```

### Ride

```text
Ride
├── user
├── captain
├── pickup
├── destination
├── fare
├── status
├── vehicleType
└── otp
```

---

# ⚙️ Local Development

## 1. Clone

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

## 2. Backend

```bash
cd Backend
npm install
```

Create `.env`:

```env
PORT=4000
MONGO_URI=mongodb://127.0.0.1:27017/uber
JWT_SECRET=your_jwt_secret
GOOGLE_MAPS_API=your_google_maps_api_key
```

Run:

```bash
npm run dev
```

---

## 3. Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Create `.env`:

```env
VITE_BASE_URL=http://localhost:4000
```

Run:

```bash
npm run dev
```

---

# 🗄️ MongoDB

For local development:

```bash
sudo systemctl start mongod
```

Check:

```bash
sudo systemctl status mongod
```

For production, use **MongoDB Atlas** instead of a local MongoDB instance.

---

# ☁️ Vercel Deployment

The project is structured to support deployment on **Vercel**.

Recommended production architecture:

```text
                    ┌───────────────┐
                    │    GitHub     │
                    └───────┬───────┘
                            │
               ┌────────────┴────────────┐
               │                         │
               ▼                         ▼
       Vercel Frontend            Vercel Backend
        React + Vite              Node + Express
               │                         │
               └────────────┬────────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
        MongoDB Atlas   Google Maps   Socket.IO
```

### Frontend

Set the Vercel root directory to:

```text
frontend
```

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

### Backend

Set the Vercel root directory to:

```text
Backend
```

Configure the required environment variables in:

```text
Vercel
→ Project
→ Settings
→ Environment Variables
```

Example:

```env
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_production_jwt_secret
GOOGLE_MAPS_API=your_google_maps_key
```

### Frontend Production URL

After deploying the backend:

```env
VITE_BASE_URL=https://your-backend.vercel.app
```

Update your frontend to use the production backend URL.

---

# 🔒 Environment Security

Never commit:

```text
.env
.env.local
.env.production
```

Use:

```text
.env.example
```

instead.

Example:

```env
MONGO_URI=
JWT_SECRET=
GOOGLE_MAPS_API=
```

Never expose:

* MongoDB credentials
* JWT secrets
* Private API keys
* Production database URLs

---

# 📸 Screenshots

Add screenshots to:

```text
docs/screenshots/
```

Recommended:

```text
docs/
└── screenshots/
    ├── home.png
    ├── login.png
    ├── signup.png
    ├── booking.png
    ├── vehicle-selection.png
    ├── captain-dashboard.png
    ├── live-tracking.png
    └── ride-completed.png
```

Then add them here:

```markdown
## 📸 Screenshots

### 🏠 Home

![Home](./docs/screenshots/home.png)

### 🚕 Ride Booking

![Ride Booking](./docs/screenshots/booking.png)

### 🚗 Captain Dashboard

![Captain Dashboard](./docs/screenshots/captain-dashboard.png)

### 🗺️ Live Tracking

![Live Tracking](./docs/screenshots/live-tracking.png)
```

---

# 🎥 Demo

```markdown
## 🎥 Project Demo

[▶️ Watch Demo](YOUR_YOUTUBE_VIDEO_URL)

## 🌐 Live Application

[🚀 Open Application](YOUR_VERCEL_URL)
```

---

# 🚀 Future Improvements

* 💳 Online payments
* ⭐ Rating system
* 📜 Ride history
* 🔔 Push notifications
* 💬 Passenger–captain chat
* 🚨 Emergency/SOS functionality
* 🧾 Digital invoices
* 🎁 Coupons
* 📊 Admin dashboard
* 📈 Captain analytics
* 🤖 AI-based demand prediction
* 🧭 Advanced route optimization
* ☁️ Docker deployment
* 🔄 CI/CD pipeline
* 📡 Production monitoring
* 📱 Progressive Web App

---

# 🧠 What This Project Demonstrates

```text
Full-Stack Development
        ↓
React
        ↓
REST APIs
        ↓
Node.js + Express
        ↓
MongoDB + Mongoose
        ↓
JWT Authentication
        ↓
Socket.IO
        ↓
Real-Time Systems
        ↓
Google Maps APIs
        ↓
Geolocation
        ↓
State Management
        ↓
Protected Routes
        ↓
Cloud Deployment
```

---

# 👨‍💻 Author

<div align="center">

## Pratyaksh Pandey

**Data Science & Artificial Intelligence Student**

<br/>

[![GitHub](https://img.shields.io/badge/GitHub-24f2006816-181717?style=for-the-badge\&logo=github)](https://github.com/24f2006816)

</div>

---

# ⭐ Show Your Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the repository

🐛 Report bugs

💡 Suggest improvements

---

# 📄 License

This project is created for educational and development purposes.

---

<div align="center">

### 🚖 Built with React • Node.js • Express • MongoDB • Socket.IO

**A full-stack real-time ride-booking experience.**

</div>
