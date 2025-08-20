# Weather App

A modern, responsive, and scalable **Weather Application** built with **React, TypeScript, shadcn/ui, TailwindCSS, Recharts, and TanStack Query (React Query)**.

The app provides real-time weather updates, 5-day forecasts, city search with history, and personalized features like favorites and theme switching — all optimized for speed, usability, and a delightful user experience.

**Live Demo:** [Weather App](https://d39y44142dbaos.cloudfront.net/)  
**Repository:** [GitHub Repo](https://github.com/minalk97/weather-app)

---

## Features

- 🌍 **Location-based weather** → Automatically detects browser location and shows real-time weather
- 🔎 **City Search** → Search weather details of any city worldwide
- ⭐ **Favorites** → Save or Remove your favorite cities (persisted via LocalStorage)
- 🕘 **Search History** → Recently searched cities are stored locally for quick access
- 🌗 **Dark/Light Mode** → Beautiful theme toggle with smooth transitions
- 📅 **5-Day Forecast** → Visualized forecast with temperature trends using **Recharts**
- ⚡ **Performance**
  - Data fetching optimized with **TanStack Query** (caching)
  - Client-side storage for fast retrieval of history/favorites
  - query caching
- 📱 **Responsive UI** → Built with **shadcn/ui** & **TailwindCSS** for modern design across devices

---

## Tech Stack

- **Frontend Framework:** React (TypeScript)
- **UI & Styling:** shadcn/ui, TailwindCSS
- **State & Data Management:** React Query (TanStack Query)
- **Charts:** Recharts (for forecast visualization)
- **Storage:** LocalStorage (favorites + search history)
- **Deployment:** AWS S3 + CloudFront (HTTPS)

---

## Performance Optimizations

- **React Query (TanStack Query):**
  - Caches API responses for faster navigation
  - Prevents over-fetching

## **LocalStorage:**

- Stores favorites & history with instant access

## **Clean Architecture:**

- Ensures components are modular, reusable, and scalable

## **CloudFront Deployment:**

- HTTPS enabled for secure access

---

## Architecture Overview
