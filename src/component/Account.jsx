import react, { useState } from "react";
import "./Account.css";
const initFormValue = {
  firstName: "",
  phoneNumber: "",
  address: "",
  email: "",
  dateOfBirth: "",
};

const isEmptyValue = (value) => {
  return !value || value.trim().length < 1;
};

const isEmailValid = (email) => {
  return /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email);
};

export default function RegisterPage() {
  const [formValue, setFromValue] = useState(initFormValue);
  const [formError, setFormError] = useState({});

  const validateForm = () => {
    const error = {};

    if (isEmptyValue(formValue.firstName)) {
      alert("Name is missing");
    }
    if (isEmptyValue(formValue.address)) {
      alert("Address is missing");
    }
    if (isEmptyValue(formValue.phoneNumber)) {
      alert("Phone number is missing");
    }
    if (isEmptyValue(formValue.dateOfBirth)) {
      alert("Date of birth is missing");
    }
    if (isEmptyValue(formValue.email)) {
      alert("Email is missing");
    } else {
      if (!isEmailValid(formValue.email)) {
        alert("Email is invalid");
      }
    }

    setFormError(error);

    return Object.keys(error).length === 0;
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setFromValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log("form value", formValue);
    } else {
      console.log("form is wrong or missing");
    }

    console.log("form value", formValue);
  };

  return (
    <div className="register-page">
      <div className="register-form-container">
        <h1 className="title">Register Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="first-name" className="form-label">
              Full name
            </label>
            <input
              type="text"
              id="first-name"
              className="form-control"
              name="firstName"
              value={formValue.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="phone-number" className="form-label">
              Phone number
            </label>
            <input
              type="text"
              id="phone-number"
              className="form-control"
              name="phoneNumber"
              value={formValue.phoneNumber}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="form-control"
              value={formValue.address}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-control"
              name="email"
              value={formValue.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="date-of-birth" className="form-label">
              Date of birth
            </label>
            <input
              type="date›"
              id="day-of-birth"
              className="form-control"
              name="dateOfBirth"
              value={formValue.dateOfBirth}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit here
          </button>
        </form>
      </div>
    </div>
  );
}
