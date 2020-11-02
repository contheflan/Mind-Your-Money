import React, { useState } from 'react';
import "./savings.css"
function AddAccount(props) {
  // const [accountType, setAccountType] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [routingNumber, setRoutingNumber] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      // accountType,
      accountNumber,
      routingNumber,
      firstName,
      lastName,
      address,
      address2,
      city,
      state,
      zip
    };
  };

  const handleChange = (event) => {
    props.onChange(event.target.value)
}

  return (
    <div className="bottom">
    <form className="pepperoni" onSubmit={handleSubmit}>
      
        <input
        className="first"
        type="text"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
        placeholder="Account Number"
      />

        <input
        className="first"
        type="text"
        value={routingNumber}
        onChange={(e) => setRoutingNumber(e.target.value)}
        placeholder="Routing Number"
      />

      <input
        className="first"
        type="text"
        value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
      />

      <input
        className="first"
        type="text"
        value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
      />

      <input
        className="first"
        type="text"
        value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
      />

      <input
        className="first"
        type="text"
        value={address2}
          onChange={(e) => setAddress2(e.target.value)}
          placeholder="Address2"
      />

      <input
        className="first"
        type="text"
        value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
      />

      <input
        className="first"
        type="text"
        value={state}
          onChange={(e) => setState(e.target.value)}
          placeholder="State"
      />

      <input
        className="first"
        type="text"
        value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="Zip Code"
      />

       <button className="wax" type="submit">
        Submit
      </button>
    </form>
    </div>
  );
}

export default AddAccount;