import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

//imports
import AddressGrid from "./components/AddressGrid";

function App() {
  return (
    <div className='App'>
      <h1>Address.info</h1>
      <AddressGrid />
      <div className='thankyou'>
        <h5>Created by: Pearl Wise</h5>
        <h5>Thank you for your time & consideration</h5>
      </div>
    </div>
  );
}

export default App;
