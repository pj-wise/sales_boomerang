import React from "react";
import { GoogleMap } from "@react-google-maps/api";

const InnerMap = props => {
  return (
    <div>
      <GoogleMap
        className='gMap'
        mapContainerStyle={{
          height: "40em",
          width: "50em",
          margin: "0 auto"
        }}
        zoom={18}
        center={{ lat: props.lat, lng: props.lng }}
      />
    </div>
  );
};

export default InnerMap;
