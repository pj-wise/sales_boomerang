import React, { useState } from "react";
import Geocode from "react-geocode";
import InnerMap from "./InnerMap";

const key = "AIzaSyBYY_xLDK6bYFKqEJU5-7Hy7oKt5p8ZEf0";
Geocode.setApiKey(`${key}`);

const MapModal = ({ primary, city, state }) => {
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  Geocode.fromAddress(`${primary} ${city} ${state}`).then(
    async response => {
      //   console.log(response.results[0].geometry.location);
      setLat(response.results[0].geometry.location.lat);
      setLng(response.results[0].geometry.location.lng);
    },
    error => {
      console.error(error);
    }
  );

  return (
    <div>
      <InnerMap lat={lat} lng={lng} />
    </div>
  );
};

export default MapModal;
