# Chuks Kitchen 🍲

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

A modern, high-fidelity frontend web application for ordering authentic Nigerian cuisine. Designed with a mobile-first approach, this project showcases modern UI/UX principles, seamless client-side routing, and responsive grid layouts.

## 🚀 Overview

Chuks Kitchen is a static frontend prototype built to demonstrate modern component-driven architecture. The application features a complete user journey—from landing and authentication to exploring the menu, managing a cart, and processing a simulated checkout. 

The primary goal of this project was to translate complex design mockups into a clean, responsive, and performant React application without relying on heavy external UI libraries.

## ✨ Key Features

* **Responsive Grid Layouts:** Dynamic product displays that gracefully scale from single-column mobile views to multi-column desktop interfaces.
* **Seamless Client-Side Routing:** Utilizes `react-router-dom` for instant page transitions without browser reloads, ensuring a native-app feel.
* **Split-Screen Authentication:** Modern login and registration flows featuring asynchronous image loading and responsive scaling.
* **Stateful Cart UI:** A fully interactive (static) cart interface demonstrating item management and cost breakdown structures.
* **Design System Implementation:** Strict adherence to a custom color palette (featuring signature brand orange and brown tones) using Tailwind CSS utility classes.

## 🛠️ Tech Stack

* **Core:** React 18, TypeScript / JavaScript
* **Styling:** Tailwind CSS (Utility-first CSS framework)
* **Routing:** React Router DOM v6
* **Icons:** Lucide-React
* **Build Tool:** Vite (for fast HMR and optimized production builds)

## 📂 Project Architecture

The application follows a modular component structure to separate concerns and improve maintainability:

```text
src/
├── components/          # Reusable UI elements (Navbar, Footer, Buttons)
├── sections/            # Major page views mapped to specific routes
│   ├── WelcomePage      # Landing and hero section
│   ├── ExplorePage      # Main menu and product grid
│   ├── OrdersPage       # Cart and order management
│   ├── OrderSummaryPage # Pre-checkout cost breakdown
│   ├── PaymentPage      # Simulated payment gateway interface
│   └── SignInPage / SignUpPage # Authentication flows
├── assets/              # Static media and local images
├── App.tsx              # Root component and Router configuration
└── main.tsx             # Application entry point



---

Clone the repository:


git clone [https://github.com/yourusername/chuks-kitchen.git](https://github.com/yourusername/chuks-kitchen.git)
Navigate to the project directory:


cd chuks-kitchen
Install dependencies:
npm install
Start the development server:
npm run dev


------


🔮 Future Roadmap
While currently a static frontend, the architecture is designed to be easily integrated with a backend service. Future iterations will include:

Integration with a backend API (e.g., Node.js or Go/Gin) for real-time menu fetching.

Implementation of global state management (Redux or Context API) for a persistent shopping cart.

Real-world payment gateway integration (e.g., Paystack or Flutterwave).



----


