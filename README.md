<div align="center">

# 🚖 UBER — Full-Stack Ride Booking Platform

### A production-style real-time ride booking application built with the MERN stack, Socket.IO & Google Maps

<br/>

![React](https://img.shields.io/badge/React-2026-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Socket.IO](https://img.shields.io/badge/Socket.IO-Realtime-010101?style=for-the-badge&logo=socket.io&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

<br/>

**Real-time ride booking • Live tracking • Captain dashboard • Fare estimation • Authentication**

<br/>

[Features](#-features) •
[Architecture](#-architecture) •
[Installation](#-installation) •
[API](#-api-overview) •
[Project Structure](#-project-structure) •
[Future Improvements](#-future-improvements)

</div>

---

# 🚀 Project Overview

This project is a **full-stack ride-booking platform inspired by Uber**, designed to demonstrate how a modern transportation application can be built using the MERN ecosystem with real-time communication.

The application provides two primary experiences:

- 👤 **Passenger**
- 🚗 **Captain / Driver**

Passengers can create accounts, select pickup and destination locations, choose a vehicle, estimate fares, request rides and track the ride lifecycle.

Captains can register, go online, receive ride requests, accept rides, navigate toward passengers and complete rides.

The system uses **Socket.IO** for real-time communication and **Google Maps APIs** for location and route-related functionality.

---

# ✨ Key Features

## 👤 Passenger Experience

- 🔐 User registration
- 🔑 Secure login/logout
- 🛡️ Protected routes
- 📍 Pickup location selection
- 🎯 Destination selection
- 🗺️ Google Maps integration
- 🚕 Vehicle selection
- 💰 Dynamic fare estimation
- 🚗 Ride request creation
- 🔄 Real-time driver matching
- 📡 Live ride updates
- 🔢 Ride OTP verification
- 🏁 Ride completion
- 📱 Responsive interface

---

## 🚗 Captain Experience

- 👨‍✈️ Captain registration
- 🔐 Captain authentication
- 🛡️ Protected captain routes
- 🟢 Online/offline availability
- 📍 Current location tracking
- 📡 Real-time ride requests
- ✅ Accept ride
- 🚘 Pickup workflow
- 🔢 OTP verification
- 🏁 Complete ride
- 💰 Fare information
- 🔄 Real-time status updates

---

# ⚡ Real-Time Architecture

The application uses **Socket.IO** to synchronize passenger and captain actions in real time.

```text
Passenger
    │
    │ Request Ride
    ▼
Backend API
    │
    │ Socket.IO
    ▼
Available Captains
    │
    │ Accept Ride
    ▼
Backend
    │
    │ Real-time Event
    ▼
Passenger
    │
    ▼
Live Ride
