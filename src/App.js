import React from "react";
import "./App.css";

//imports
import AddressGrid from "./components/AddressGrid";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Address.info</h1>
        <AddressGrid />
        <div className='thankyou'>
          <h5>Created by: Pearl Wise</h5>
          <h5>Thank you for your time & consideration</h5>
        </div>
      </header>
    </div>
  );
}

export default App;
