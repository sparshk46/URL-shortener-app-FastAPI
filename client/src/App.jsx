// src/App.js
import React, { useState } from "react";
import "./App.css";
import ShortenForm from "./components/ShortenForm";
import ShortenedURLs from "./components/ShortenedURLs";

function App() {
  const [shortenedURLs, setShortenedURLs] = useState([]);

  return (
    <div className="App">
      <h1>URL Shortener</h1>
      <ShortenForm setShortenedURLs={setShortenedURLs} />
      <ShortenedURLs shortenedURLs={shortenedURLs} />
    </div>
  );
}

export default App;
