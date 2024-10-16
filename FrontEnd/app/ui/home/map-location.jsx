import React from "react";

export default function MapLocation() {
  return (
    <iframe
      width="275"
      height="275"
      style={{ border: 0 }}
      loading="lazy"
      allowFullscreen
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw9QPPGJxVo8R4t89L2PCQto&key=AIzaSyDa8pwqo3RODxPYWFyRBE5UHz7NpBeQ8O0"
    ></iframe>
  );
}
