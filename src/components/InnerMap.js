import React from "react";
import { GoogleMap } from "@react-google-maps/api";

const InnerMap = props => {
  return (
    <div>
      <GoogleMap
        mapContainerStyle={{
          height: "40em",
          width: "60em"
        }}
        zoom={12}
        center={{ lat: props.lat, lng: props.lng }}
      />
    </div>
  );
};

export default InnerMap;
