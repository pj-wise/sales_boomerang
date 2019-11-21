import React, { useState, useEffect } from "react";

//modules
import axios from "axios";

import AddressCard from "./AddressCard";

const AddressGrid = () => {
  const [addressData, setAddressData] = useState([]);
  const [dataLimit, setDataLimit] = useState(9);

  useEffect(() => {
    axios
      .get(
        `https://wgrau8p1s0.execute-api.us-east-1.amazonaws.com/production/1/${dataLimit}/`
      )
      .then(res => {
        console.log(res.data.rows);
        setAddressData(res.data.rows);
      })
      .catch(err => {
        console.log("Error in axios call", err);
      });
  }, [dataLimit]);

  return (
    <div className='addressGrid'>
      {addressData.map(address => {
        return (
          <AddressCard
            key={address.id}
            primary={address.primary_line}
            city={address.city}
            state={address.state}
            zip={address.zip_code}
          />
        );
      })}
    </div>
  );
};

export default AddressGrid;
