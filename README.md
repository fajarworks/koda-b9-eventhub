# EventHub — Frontend

![React](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.3.3-06B6D4?logo=tailwindcss&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.12.0-764ABC?logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-8.3.0-CA4245?logo=reactrouter&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?logo=javascript&logoColor=black)

EventHub is a web application for discovering and managing technology events and communities.

This repository contains the **frontend application** built with React and Vite. It provides the user interface for browsing events, joining events, discovering communities, managing profiles, and interacting with the EventHub API.


## Tech Stack

- **React** — UI library
- **Vite** — Frontend build tool
- **Tailwind CSS** — Styling
- **Redux Toolkit** — State management
- **Redux Persist** — Persist Redux state
- **React Router** — Client-side routing
- **React Hook Form** — Form handling
- **React Hot Toast** — Notifications
- **React Icons** — Icons
- **Chart.js** — Data visualization

## Requirements

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) 20+
- npm
- EventHub Backend API

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd eventhub
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:8080
```

Make sure the backend API is running on the configured URL.

### 4. Run the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```



## Environment Variable

| Variable | Description | Example |
|---|---|---|
| `VITE_API_URL` | Backend API URL | `http://localhost:8080` |
