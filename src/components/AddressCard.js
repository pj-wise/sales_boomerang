import React from "react";
import houseImg from "./imgs/white-and-red-wooden-house-with-fence-1029599.jpg";

import { Modal, Header } from "semantic-ui-react";
import MapModal from "./MapModal";

const AddressCard = ({ primary, city, state, zip }) => {
  return (
    <div className='addressCard'>
      <img className='houseImg' alt='house' src={houseImg} />
      <h4>{primary}</h4>
      <h4>
        {city}, {state}
      </h4>
      <h4>{zip}</h4>
      <Modal trigger={<button className='modalBtn'>More Info</button>}>
        <Modal.Header
          style={{
            textAlign: "center",
            color: "#2059A6",
            fontSize: "1.2em",
            fontFamily: "SpaceMeatballRegular"
          }}>
          {primary}&nbsp;
          {city}, {state}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description
            style={{
              textAlign: "center"
            }}>
            <MapModal
              className='mapModal'
              primary={primary}
              city={city}
              state={state}
            />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default AddressCard;
