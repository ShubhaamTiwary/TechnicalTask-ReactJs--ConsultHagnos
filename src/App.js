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

  const ChangeEmail=(event) =>{
    event.preventDefault();

    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      email: value
    }));
    
    // console.log(value);

    if (!value) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      errors.email = 'Invalid email format';
    }
    else{
      errors.email=null;
    }
  }

  function isValidPhoneNumber(phoneNumber) {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  }

  const ChangePhone=(event) =>{
    event.preventDefault();

    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      phoneNumber: value
    }));

    if (!isValidPhoneNumber(value)) {
      errors.phoneNumber = "Invalid phone number format";
    }
    else{
      errors.phoneNumber=null;
    }
  }
  const ChangeAlterPhone=(event) =>{
    event.preventDefault();

    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      alternatePhoneNumber: value
    }));

    if (!isValidPhoneNumber(value)) {
      errors.alternatePhoneNumber = "Invalid phone number format";
    }
    else{
      errors.alternatePhoneNumber=null;
    }
  }

  function isValidPincode(pincode) {
    const pincodePattern = /^\d{6}$/;
    return pincodePattern.test(pincode);
  }
  const handlePincode=(event) =>{
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      pincode: value
    }));

    if (!isValidPincode(value)) {
      errors.pincode = "Invalid Pincode";
    }
    else{
      errors.pincode=null;
    }
  }


  const handleConfirmPass=(event) =>{
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      confirmPassword: value
    }));

    if (formData.password && formData.password!=value) {
      errors.confirmPassword = "Confirm Password Did Not Match";
    }
    else{
      errors.confirmPassword=null;
    }
  }

  const [errors, setErrors] = useState({});

  const validateFormData = (data) => {
    const errors = {};
    
    if (!data.name) {
      errors.name = 'Name is required';
    }
    if (!data.streetAddress) {
      errors.streetAddress = 'Street Address is required';
    }
    if (!data.city) {
      errors.city = 'Enter a city';
    }
    if (!data.state) {
      errors.state = 'Enter a State';
    }

    if (!data.dob) {
      errors.dob = 'Select the Date of Birth';
    }

    if (!data.companyName) {
      errors.companyName = 'Enter a Company Name';
    }

    if (!data.idCardNumber) {
      errors.idCardNumber = 'Enter ID Card Number';
    }

    if (!data.password) {
      errors.password = 'Enter a Password';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateFormData(formData);
    if (Object.keys(validationErrors).length === 0) {
      console.log(formData); // You can handle form submission here
      alert("SUCCESS !!");
      setFormData({});
    } else {
      setErrors(validationErrors);
    }
  };
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const today = new Date().toISOString().split("T")[0];
  return (
    <div className="form-container">
      <div className='heading'><h1>Consult Hagnos Registration Form </h1></div>
      <form className="register-form" onSubmit={handleSubmit}>
      <div className='div'>
        <input
          className={errors.name ? "error-form-field" : "form-field"}
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        </div>
        {errors.name && <div className="error-message">{errors.name}</div>}

        <div className='div'>
        <input
          className={errors.email ? "error-form-field" : "form-field"}
          type="text"
          placeholder="Email ID"
          name="email"
          value={formData.email}
          onChange={ChangeEmail}
        />
        </div>
        {errors.email && <div className="error-message">{errors.email}</div>}


        <div className='div'>
        <input
          className={errors.phoneNumber ? "error-form-field" : "form-field"}
          type="Number"
          placeholder="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={ChangePhone}
        />
        </div>
        {errors.phoneNumber && <div className="error-message">{errors.phoneNumber}</div>}

        <div className='div'>
        <input
          className={errors.alternatePhoneNumber ? "error-form-field" : "form-field"}
          type="Number"
          placeholder="Alternate Phone Number"
          name="alternatePhoneNumber"
          value={formData.alternatePhoneNumber}
          onChange={ChangeAlterPhone}
        />
        </div>
        {errors.alternatePhoneNumber && <div className="error-message">{errors.alternatePhoneNumber}</div>}

        <div className='div'>
        <input
          className={errors.streetAddress ? "error-form-field" : "form-field"}
          type="text"
          placeholder="Street Address"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={handleInputChange}
        />
        </div>
        {errors.streetAddress && <div className="error-message">{errors.streetAddress}</div>}


        <div className='div'>
        <input
          className={errors.city ? "error-form-field" : "form-field"}
          type="text"
          placeholder="City"
          name="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        </div>
        {errors.city && <div className="error-message">{errors.city}</div>}

        <div className='div'>
        <input
          className={errors.state ? "error-form-field" : "form-field"}
          type="text"
          placeholder="State"
          name="state"
          value={formData.state}
          onChange={handleInputChange}
        />
        </div>
        {errors.state && <div className="error-message">{errors.state}</div>}

        <div className='div'>
        <input
          className={errors.pincode ? "error-form-field" : "form-field"}
          type="Number"
          placeholder="Pincode"
          name="pincode"
          value={formData.pincode}
          onChange={handlePincode}
        />
        </div>
        {errors.pincode && <div className="error-message">{errors.pincode}</div>}

        <div className='div'>
        <input
          className={errors.dob ? "error-form-field" : "form-field"}
          type="date"
          placeholder="Date of Birth"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          max={today}
        />
        </div>
        {errors.dob && <div className="error-message">{errors.dob}</div>}

        <div className='div'>
        <input
          className={errors.companyName ? "error-form-field" : "form-field"}
          type="text"
          placeholder="Company name"
          name="companyName"
          value={formData.companyName}
          onChange={handleInputChange}
        />
        </div>
        {errors.companyName && <div className="error-message">{errors.companyName}</div>}

        <div className='div'>
        <input
          className={errors.idCardNumber ? "error-form-field" : "form-field"}
          type="Number"
          placeholder="ID Card Number"
          name="idCardNumber"
          value={formData.idCardNumber}
          onChange={handleInputChange}
        />
        </div>
        {errors.idCardNumber && <div className="error-message">{errors.idCardNumber}</div>}

        <div className='div'>
        <input
          className={errors.password ? "error-form-field" : "form-field"}
          type={!showPassword?"password":"text"}
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button className="show-password-button" onClick={handleTogglePassword}>
          {showPassword ? "Hide" : "Show"} Password
        </button>
        </div>
        {errors.password && <div className="error-message">{errors.password}</div>}

        <div className='div'>
        <input
          className={errors.confirmPassword ? "error-form-field" : "form-field"}
          type={!showPassword?"password":"text"}
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleConfirmPass}
          disabled={!formData.password}
        />
        </div>
        {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}

        <button class="form-field-Submit" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}


export default App;
