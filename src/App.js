import './App.css';
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    alternatePhoneNumber: '',
    streetAddress: '',
    city: '',
    state: '',
    pincode: '',
    dob: '',
    companyName: '',
    idCardNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (event) => {
    event.preventDefault();

    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  };

  const [errors, setErrors] = useState(false);

  const validateFormData = (data) => {
    const errors = {};

    // Validate each field and add error messages to the 'errors' object
    if (!data.name) {
      errors.name = 'Name is required';
    }

    if (!data.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Invalid email format';
    }

    // Add validation for other fields similarly

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData); // You can handle form submission here
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      <div className='heading'><h1>Consult Hagnos Registration Form </h1></div>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className='rowElement'>
          {/* Input-1 == Name  */}
          <input
            class={errors.name ? "error" : "form-field"}
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          {/* Input-2 == Email  */}
          <input
            class={errors.email ? "error" : "form-field"}
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        <div className='rowElement'>
          {/* Input-3 == Phone Number  */}
          <input
            class={errors.phoneNumber ? "error" : "form-field"}
            type="number"
            placeholder="Phone Number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />

          {/* Input-4 == Alternate Phone Number  */}
          <input
            class={errors.alternatePhoneNumber ? "error" : "form-field"}
            type="number"
            placeholder="Alternate Phone Number"
            name="alternatePhoneNumber"
            value={formData.alternatePhoneNumber}
            onChange={handleInputChange}
          />
        </div>

        <div className='rowElement'>
          {/* Input-5 == Street Address  */}
          <input
            class={errors.streetAddress ? "error" : "form-field"}
            type="text"
            placeholder="Street Address"
            name="streetAddress"
            value={formData.streetAddress}
            onChange={handleInputChange}
          />

          {/* Input-6 == Street Address  */}
          <input
            class={errors.streetAddress ? "error" : "form-field"}
            type="text"
            placeholder="City"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
          />

        </div>

        <div className='rowElement'>
          {/* Input-5 == Street Address  */}
          <input
            class={errors.streetAddress ? "error" : "form-field"}
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
          />

          {/* Input-6 == Street Address  */}
          <input
            class={errors.streetAddress ? "error" : "form-field"}
            type="text"
            placeholder="Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleInputChange}
          />
        </div>

        <div className='rowElement'>
          {/* Input == Street Address  */}
          <input
            class={errors.streetAddress ? "error" : "form-field"}
            type="text"
            placeholder="Date of Birth"
            name="dob"
            value={formData.dob}
            onChange={handleInputChange}
          />

          {/* Input-6 == Street Address  */}
          <input
            class={errors.streetAddress ? "error" : "form-field"}
            type="text"
            placeholder="Company Name"
            name="companyName"
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </div>

        <div className='rowElement'>
          {/* Input-6 == Street Address  */}
          <input
            class={errors.streetAddress ? "error" : "form-field-single"}
            type="number"
            placeholder="ID Card Number"
            name="idCardNumber"
            value={formData.idCardNumber}
            onChange={handleInputChange}
          />
        </div>

        <button class="form-field-Submit" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}


export default App;
