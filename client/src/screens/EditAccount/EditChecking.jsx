import React, { useState, useEffect } from "react";
import "./EditAccount.css";
import { useParams, Redirect } from "react-router-dom";
import Layout from "../../components/shared/Layout/Layout";
import { getAccount, updateAccount, deleteAccount } from "../../services/accounts";

const EditChecking = (props) => {
  let params = useParams();
  const [account, setAccount] = useState({
    accountType: "Checking",
    userId: `${params.userId}`,
    accountNumber: "",
    routingNumber: "",
    creditCardExp: "N/A",
    creditCardccv: "N/A",
    firstName: "",
    lastName: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });

  const [isUpdated, setUpdated] = useState(false);
  useEffect(() => {
    const fetchAccout = async () => {
      const account = await getAccount(params.userId, params.id);
      setAccount(account);
    };
    fetchAccout();
  }, [params.id]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateAccount(params.id, account);
    setUpdated(true);
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    await deleteAccount(params.id);
    setUpdated(true);
  };

  if (isUpdated) {
    return <Redirect to={`/User/${params.userId}/MyAccount`} />;
  }

  return (
    <div>
      <Layout />
      <div className="mimi2">
        <h1 className="title">Edit Checking</h1>
        <form className="pepperoni">
          <input
            className="first"
            type="text"
            name="accountNumber"
            value={account.accountNumber}
            onChange={handleChange}
            placeholder={account.accountNumber || "Account Number"}
          />

          <input
            className="first"
            type="text"
            name="routingNumber"
            value={account.routingNumber}
            onChange={handleChange}
            placeholder={account.routingNumber || "Routing Number"}
          />

          <input
            className="first"
            type="text"
            name="firstName"
            value={account.firstName}
            onChange={handleChange}
            placeholder={account.firstName || "First Name"}
          />

          <input
            className="first"
            type="text"
            name="lastName"
            value={account.lastName}
            onChange={handleChange}
            placeholder={account.lastName || "Last Name"}
          />

          <input
            className="first"
            type="text"
            name="address"
            value={account.address}
            onChange={handleChange}
            placeholder={account.address || "Address"}
          />

          <input
            className="first"
            type="text"
            name="address2"
            value={account.address2}
            onChange={handleChange}
            placeholder={account.address2 || "Address2"}
          />

          <input
            className="first"
            type="text"
            name="city"
            value={account.city}
            onChange={handleChange}
            placeholder={account.city || "City"}
          />

          <input
            className="first"
            type="text"
            name="state"
            value={account.state}
            onChange={handleChange}
            placeholder={account.state || "State"}
          />

          <input
            className="first"
            type="text"
            name="zip"
            value={account.zip}
            onChange={handleChange}
            placeholder={account.zip || "Zip Code"}
          />
        </form>
        <div>
          <button className="save" onClick={handleSubmit}>
            Save Changes
          </button>
          <button className="delete" onClick={handleDelete}>
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditChecking;
