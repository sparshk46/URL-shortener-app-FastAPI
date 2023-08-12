// src/ShortenForm.js
import React, { useState } from "react";
import "../App.css";

function ShortenForm({ setShortenedURLs }) {
  const [url, setURL] = useState("");
  const [shortenedURL, setShortenedURL] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/url", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ target_url: url }),
      });
      const data = await response.json();
      setShortenedURL(data.url);
    } catch (error) {
      console.error("Error shortening URL:", error);
    }
  };

  return (
    <div className="ShortenForm">
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter URL to shorten"
          value={url}
          onChange={(e) => setURL(e.target.value)}
          required
        />
        <button type="submit">Shorten</button>
      </form>
      {shortenedURL && (
        <p>
          Shortened URL:{" "}
          <a href={shortenedURL} target="_blank" rel="noopener noreferrer">
            {shortenedURL}
          </a>
        </p>
      )}
    </div>
  );
}

export default ShortenForm;
