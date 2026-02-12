// =====================================================
// Week 6: Lists & Forms in React
// Topic: Rendering Lists, Keys, Controlled Components
// Practical Lab: React Task Manager (A4)
// Instructor: Sohail Ahmed
// =====================================================

import React, { useState, useEffect } from "react";

function App() {

  /*
    STATE VARIABLES
    ------------------------------------------------
    movies  → stores movie list from API
    loading → controls loading message visibility
    error   → stores error message if fetch fails
  */
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /*
    🔐 API TOKEN
    ------------------------------------------------
    This token is required for TMDB authentication.
    It is passed inside the request header as:
    Authorization: Bearer TOKEN
  */
  // const TOKEN = "YOUR_TOKEN_HERE";

  const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjA3YThjMDBjODM1NGE2MGFmZDc3OTAyOGI3NjNkYyIsIm5iZiI6MTc3MDkxNzM5OS43NzUsInN1YiI6IjY5OGUwZTE3MDAwNDE5ZDhhMzNkODliNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jfx6mcyVWOOzdT1Cn4hazWLuVDChhAzeEPgxpGz5VWE";

  /*
    useEffect Hook
    ------------------------------------------------
    - Runs AFTER the component renders
    - Because dependency array is [] 
      → It runs ONLY once (on component mount)
    - Used here to fetch API data
  */
  useEffect(() => {

    /*
      fetch() sends a GET request to TMDB API
      We include:
      - method
      - headers
      - Authorization token
    */
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${TOKEN}`, // Bearer authentication
      },
    })
      .then((res) => {

        // Check if response is successful (status 200)
        if (!res.ok) {
          throw new Error("Failed to fetch movies");
        }

        // Convert response into JSON format
        return res.json();
      })
      .then((data) => {

        /*
          Save movie results into state.
          This triggers React to re-render the UI.
        */
        setMovies(data.results);

        // Stop loading spinner
        setLoading(false);
      })
      .catch((err) => {

        // If error happens, save error message
        setError(err.message);

        // Stop loading
        setLoading(false);
      });

  }, []); // Empty dependency array → run once only

  return (
    <div style={styles.container}>
      <h1>🎬 Popular Movies</h1>

      {/* CONDITIONAL RENDERING */}

      {/* Show loading text while API request is in progress */}
      {loading && <p>Loading movies...</p>}

      {/* Show error message if request fails */}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Display movie list */}
      <div style={styles.grid}>
        {movies.map((movie) => (
          <div key={movie.id} style={styles.card}>
            
            {/* Movie Poster */}
            <img
              src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              alt={movie.title}
              style={{ width: "100%", borderRadius: "8px" }}
            />

            {/* Movie Title */}
            <h3>{movie.title}</h3>

            {/* Movie Rating */}
            <p>⭐ Rating: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/*
  SIMPLE INLINE STYLES
  ------------------------------------------------
  Used for demo purposes.
  For large projects, move styles to CSS file.
*/
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "10px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
};

export default App;
