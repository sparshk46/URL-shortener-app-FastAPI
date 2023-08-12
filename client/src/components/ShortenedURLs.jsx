// src/ShortenedURLs.js
import React from "react";
import "../App.css";

function ShortenedURLs({ shortenedURLs }) {
  return (
    <div className="ShortenedURLs">
      <ul>
        {shortenedURLs.map((url) => (
          <li key={url.id}>
            <a href={url.url} target="_blank" rel="noopener noreferrer">
              {url.url}
            </a>
            <p>Clicks: {url.clicks}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShortenedURLs;
