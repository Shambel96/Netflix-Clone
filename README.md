<div align="center">

# Netflix Clone

A feature-rich Netflix UI clone built with React, powered by The Movie Database (TMDB) API.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=github-pages)](https://Shambel96.github.io/Netflix-Clone)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TMDB API](https://img.shields.io/badge/TMDB-API-0D253F?style=for-the-badge&logo=themoviedatabase&logoColor=white)](https://www.themoviedb.org/)

</div>

---

## Overview

This project replicates the core Netflix browsing experience — a responsive header with navigation, a dynamic hero banner, scrollable content rows organized by category, and inline YouTube trailer playback. Content metadata and images are sourced from the TMDB API in real time.

## Live Demo

**https://Shambel96.github.io/Netflix-Clone**

## Features

- **Dynamic Hero Banner** — Randomly selects a Netflix Original and displays its backdrop, title, and overview
- **Category Rows** — Scrollable rows for Netflix Originals, Trending, Top Rated, Action, Comedy, Horror, Romance, and Documentaries
- **Trailer Playback** — Click any poster to watch the corresponding YouTube trailer in an embedded player
- **Responsive Navigation** — Fully responsive header with a hamburger menu for mobile devices
- **Scroll-Aware Header** — Header background changes on scroll for better readability
- **Footer** — Social media links and informational footer matching Netflix's layout

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | UI library |
| **Axios** | HTTP client for TMDB API |
| **Material UI** | Icon components |
| **react-youtube** | YouTube embedded player |
| **movie-trailer** | Trailer URL resolver |
| **gh-pages** | GitHub Pages deployment |

## Prerequisites

- **Node.js** (v16 or higher recommended)
- **npm** (v8 or higher)
- A **TMDB API key** — [Get one here](https://www.themoviedb.org/settings/api)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Shambel96/Netflix-Clone.git
cd Netflix-Clone/netflix-clone
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the `netflix-clone/` root directory:

```env
REACT_APP_TMDB_KEY=your_tmdb_api_key_here
```

> You can obtain a free API key by creating an account at [themoviedb.org](https://www.themoviedb.org/settings/api) and requesting an API key.

### 4. Start the development server

```bash
npm start
```

The app will open at **http://localhost:3000**.

## Available Scripts

| Command | Description |
|---|---|
| `npm start` | Launch the app in development mode |
| `npm run build` | Create an optimized production build |
| `npm test` | Run the test suite |
| `npm run deploy` | Deploy the production build to GitHub Pages |

## Project Structure

```
netflix-clone/
├── public/
├── src/
│   ├── assets/
│   │   └── images/
│   │       └── netflix-logo.jpg
│   ├── components/
│   │   ├── Banner/
│   │   │   ├── Banner.js
│   │   │   └── banner.css
│   │   ├── Footer/
│   │   │   ├── Footer.js
│   │   │   └── Footer.css
│   │   ├── Header/
│   │   │   ├── Header.js
│   │   │   └── header.css
│   │   └── Rows/
│   │       ├── Row/
│   │       │   ├── Row.js
│   │       │   └── Row.css
│   │       └── RowList/
│   │           ├── RowList.js
│   │           └── RowList.css
│   ├── pages/
│   │   └── Home/
│   │       └── Home.js
│   ├── utils/
│   │   ├── axios.js
│   │   └── request.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .env
├── .gitignore
├── package.json
└── README.md
```

## How It Works

1. **`request.js`** defines TMDB API endpoints using your environment API key
2. **`axios.js`** provides a pre-configured Axios instance with TMDB's base URL
3. **`Banner.js`** fetches Netflix Originals and displays a random title as the hero section
4. **`RowList.js`** composes multiple `Row` components, each fetching a different category
5. **`Row.js`** renders horizontally scrollable posters and handles trailer playback via YouTube

## Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

This runs `npm run build` and publishes the `build/` folder to the `gh-pages` branch automatically.

## Disclaimer

This project is built for **educational and demonstration purposes only**. It is not affiliated with, endorsed by, or connected to Netflix, Inc. in any way.

> This product uses the TMDB API but is not endorsed or certified by TMDB.

## Author

**Shambel Dechu**

- GitHub: [Shambel96](https://github.com/Shambel96)
- Email: shambeldechu@gmail.com

## License

This project is open source and available for personal and educational use.
