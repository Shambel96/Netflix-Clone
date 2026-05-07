# Netflix Clone (React + TMDB)

A Netflix-style UI built with React. It pulls movie/TV data from The Movie Database (TMDB) API and lets you click a title to play its trailer (via YouTube).

Live site (GitHub Pages): https://Shambel96.github.io/Netflix-Clone

## Features

- Home page layout with `Header`, `Banner`, and multiple content rows
- Movie/TV rows powered by TMDB endpoints (Trending, Top Rated, Action, Comedy, etc.)
- Click a poster to open an embedded YouTube trailer
- Responsive row slider-style UI

## Tech Stack

- React (Create React App)
- Axios (TMDB API requests)
- `movie-trailer` + `react-youtube` (trailer playback)
- Material UI (icons/components)

## Getting Started

### 1) Install

```bash
cd netflix-clone
npm install
```

### 2) Configure environment variables

Create a `.env` file in `netflix-clone/` and add:

```bash
REACT_APP_TMDB_KEY=your_tmdb_api_key
```

You can get an API key by creating an account on TMDB.

### 3) Run locally

```bash
npm start
```

Then open http://localhost:3000

## Scripts

- `npm start` - Run the app in development mode
- `npm test` - Run tests (watch mode)
- `npm run build` - Build for production
- `npm run deploy` - Deploy `build/` to GitHub Pages (uses `gh-pages`)

## Project Structure

- `src/pages/Home/Home.js` - Page composition (`Header`, `Banner`, `RowList`, `Footer`)
- `src/components/Rows/RowList/RowList.js` - Row categories and fetch URLs
- `src/components/Rows/Row/Row.js` - Poster rendering + trailer playback
- `src/utils/axios.js` - Axios instance configured with TMDB base URL
- `src/utils/request.js` - TMDB endpoints using `REACT_APP_TMDB_KEY`

## Notes / Disclaimer

- This project is for learning/demo purposes and is not affiliated with Netflix.
- TMDB API is used for content metadata. "This product uses the TMDB API but is not endorsed or certified by TMDB."
