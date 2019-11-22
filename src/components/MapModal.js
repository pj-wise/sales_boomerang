import React, { useState } from "react";
import Geocode from "react-geocode";
import InnerMap from "./InnerMap";

const key = "AIzaSyBYY_xLDK6bYFKqEJU5-7Hy7oKt5p8ZEf0";
Geocode.setApiKey(`${key}`);

const MapModal = ({ primary, city, state }) => {
  const latlng = { lat: "", lng: "" };
  Geocode.fromAddress(`${primary} ${city} ${state}`).then(
    response => {
      console.log(response.results[0].geometry.location);
    },
    error => {
      console.error(error);
    }
  );

  return (
    <div>
      <InnerMap />
    </div>
  );
};

export default MapModal;
