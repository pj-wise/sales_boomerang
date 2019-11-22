import React from "react";
import { GoogleMap } from "@react-google-maps/api";

const InnerMap = () => {
  return (
    <div>
      <GoogleMap
        mapContainerStyle={{
          height: "40em",
          width: "60em"
        }}
        zoom={7}
        center={{ lat: 8, lng: 48 }}
      />
    </div>
  );
};

export default InnerMap;
