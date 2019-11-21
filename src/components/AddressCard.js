import React from "react";
import houseImg from "./imgs/white-and-red-wooden-house-with-fence-1029599.jpg";

const AddressCard = ({ primary, city, state, zip }) => {
  return (
    <div className='addressCard'>
      <img className='houseImg' alt='house' src={houseImg} />
      <h3>{primary}</h3>
      <h4>{city}</h4>
      <h4>{state}</h4>
      <h4>{zip}</h4>
    </div>
  );
};

export default AddressCard;
