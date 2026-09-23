# 🚗 Uber Full-Stack Clone (MERN + Socket.IO + GSAP + TailwindCSS)

A full-stack, real-time ride-hailing web application built with modern web technologies. This application features separate workflows for **Users (Riders)** and **Captains (Drivers)**, real-time ride broadcasting, interactive route maps, OTP verification, live ride status tracking, and smooth GSAP-powered animations.

---

## 📸 Features & Highlights

- **Dual Authentication System**: Secure JWT-based authentication for both Users and Captains with token blacklisting on logout.
- **Real-Time Ride Dispatch via WebSockets (Socket.IO)**:
  - Users request rides in real time.
  - Nearby Captains receive instantaneous ride pop-up alerts with passenger details, pickup/drop-off points, and fare estimation.
- **Interactive Trip Booking**:
  - Auto-complete location suggestions for pickup and destination.
  - Dynamic fare calculation for multiple vehicle types (UberGo / Car, Moto, and Auto).
- **Secure OTP Ride Handshake**:
  - Captains must enter a unique 6-digit OTP provided to the rider before the ride starts.
- **Live Ride Tracking**:
  - Interactive map integration with live GPS geolocation tracking and graceful fallback for local development.
- **Smooth Micro-Interactions**:
  - Dynamic slide-up sheets and modals powered by **GSAP (GreenSock)** animations.
- **Zero-Crash Resilience**:
  - Full client-side input validation, error handling banners, and backend fallback coordinates/distance estimators.

---

## 🛠️ Tech Stack

### Frontend
- **React 18** (Vite-powered single page application)
- **Tailwind CSS** (Utility-first modern styling)
- **GSAP & @gsap/react** (Fluid bottom-sheet and panel animations)
- **Socket.IO Client** (Bidirectional real-time events)
- **Axios** (Promise-based HTTP client)
- **Remix Icon** (High-quality iconography)
- **@react-google-maps/api** (Google Maps integration)

### Backend
- **Node.js & Express.js** (REST API & routing)
- **MongoDB & Mongoose** (Database schemas, geospatial queries, and token blacklist)
- **Socket.IO** (Real-time event server)
- **JWT (JSON Web Tokens)** & **Bcrypt** (Authentication and password hashing)
- **Express Validator** (Input validation & sanitization)

---

## 📁 Project Structure

```plaintext
uber-video-main/
├── Backend/
│   ├── controllers/         # Request handlers (user, captain, ride, map)
│   ├── db/                  # MongoDB database connection
│   ├── middlewares/         # JWT Auth middleware (user & captain)
│   ├── models/              # Mongoose models (User, Captain, Ride, BlacklistToken)
│   ├── routes/              # Express API route declarations
│   ├── services/            # Business logic (maps, fare calculation, ride workflows)
│   ├── socket.js            # Socket.IO connection and event handlers
│   ├── server.js            # HTTP and Socket server entry point
│   ├── app.js               # Express application configuration
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/      # Panels: VehiclePanel, RidePopUp, ConfirmRide, LiveTracking, etc.
│   │   ├── context/         # React Contexts (User, Captain, Socket)
│   │   ├── pages/           # Views: Home, UserLogin, CaptainHome, Riding, etc.
│   │   ├── App.jsx          # Route definitions
│   │   └── main.jsx         # Application root
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Quickstart Guide

### 1. Prerequisites
- **Node.js** (v18.x or v20.x+ recommended)
- **MongoDB** installed and running locally (`mongodb://127.0.0.1:27017`) or a MongoDB Atlas URI.

---

### 2. Backend Setup & Run

1. Navigate to the `Backend` directory:
   ```bash
   cd Backend
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Check your `.env` file in `Backend/.env`:
   ```env
   PORT=3000
   DB_CONNECT=mongodb://127.0.0.1:27017/uber-video
   JWT_SECRET=super_secret_jwt_key_change_in_production
   GOOGLE_MAPS_API=your_google_maps_api_key
   ```
   *(Note: The backend has built-in graceful fallback coordinates and fare estimators, so it works seamlessly even without a paid Google Maps API key!)*

4. Start the backend server:
   ```bash
   npm run dev
   # Or using standard node:
   npm start
   ```
   The backend will start at: `http://localhost:3000`.

---

### 3. Frontend Setup & Run

1. Open a new terminal tab and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```
3. Verify or create `frontend/.env`:
   ```env
   VITE_BASE_URL=http://localhost:3000
   VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   ```

4. Start the Vite development server:
   ```bash
   npm run dev
   ```
   Open your browser at: `http://localhost:5173`.

---

## 🧪 Testing the Complete Ride Workflow

To test the real-time ride flow locally:

1. **User Window**: Open `http://localhost:5173` in a normal browser window.
   - Click **Get Started** -> **Login / Signup as a Rider**.
   - You will land on `/home`.
2. **Captain Window**: Open `http://localhost:5173` in an **Incognito** window (or another browser).
   - Click **Sign in as Captain** -> **Register as a Captain** (select vehicle type: Car, Auto, or Moto).
   - You will land on `/captain-home`.
3. **Book a Ride**:
   - In the Rider window, type pickup: `Connaught Place` and destination: `Noida Sector 18`.
   - Click **Find Trip**, select your vehicle type, and click **Confirm**.
4. **Accept & Complete Ride**:
   - The Captain window instantly receives a **New Ride Available!** slide-up alert.
   - Captain clicks **Accept**.
   - Captain enters the rider's **OTP** and clicks **Confirm** to start the trip.
   - Captain clicks **Complete Ride** -> **Finish Ride** upon arrival. Both rider and captain return cleanly to their respective dashboards.

---

## 📤 How to Push to GitHub

Run these commands from the project root (`uber-video-main`):

```bash
# 1. Initialize git (if not already initialized)
git init

# 2. Add all files to staging
git add .

# 3. Create your initial commit
git commit -m "feat: complete Uber clone with real-time sockets, GSAP animations, and resilient APIs"

# 4. Set the main branch
git branch -M main

# 5. Add your GitHub repository remote (replace with your repo URL)
git remote add origin https://github.com/<YOUR_USERNAME>/<YOUR_REPO_NAME>.git

# 6. Push to GitHub
git push -u origin main
```

---

## 💼 LinkedIn Showcase Template

Here is a ready-to-post template to showcase this project to recruiters and the developer community:

> 🚀 **Excited to share my latest full-stack project: A Real-Time Uber Clone!** 🚗💨
>
> I just wrapped up building an end-to-end ride-hailing web application powered by the **MERN stack, Socket.IO, GSAP, and Tailwind CSS**.
>
> 🔹 **Key Features Built**:
> - 👥 **Dual Workflows**: Independent dashboards and authentication flows for Riders and Captains (Drivers).
> - ⚡ **Real-Time Sockets**: Bidirectional ride dispatching, instant ride requests broadcast to nearby drivers, and live ride status synchronization via **Socket.IO**.
> - 🔐 **Secure Handshake**: Real-time 6-digit OTP verification system ensuring only assigned drivers can initiate trips.
> - 🎨 **Sleek UI/UX**: Responsive bottom-sheets and smooth micro-interactions crafted with **GSAP** and **Tailwind CSS**.
> - 🗺️ **Interactive Navigation**: Live geolocation tracking with Google Maps integration and graceful offline/mock fallback resilience.
> - 🛡️ **Robust Architecture**: JWT authentication with token blacklisting, MongoDB geospatial indexing, and express-validator error handling.
>
> 💻 **Tech Stack**:
> React.js | Node.js | Express.js | MongoDB | Socket.IO | GSAP | Tailwind CSS | Vite
>
> 🔗 **GitHub Repository**: [Insert your GitHub Repo Link Here]
>
> Feedback and suggestions are always welcome! 👇
>
> #FullStack #WebDevelopment #MERN #ReactJS #NodeJS #SocketIO #JavaScript #Coding #PortfolioProject #SoftwareEngineering

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
