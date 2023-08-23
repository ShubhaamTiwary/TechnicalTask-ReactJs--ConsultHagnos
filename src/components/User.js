import React, { useEffect, useState } from 'react'
import '../style/User.css'
import axios from "axios";

const User = () => {

  const [user, setUser] = useState({});
  const [company, setCompany] = useState({});
  const [card, setCard] = useState({});
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get("https://fakerapi.it/api/v1/persons?_quantity=1&amp;_gender=male&amp;_birthday_start=2005-01-01")
    .then(response => {
      setUser(response.data.data[0]);
      // console.log(response.data.data[0].firstname);
    })
    .catch(error => {
      console.error("Error fetching User:", error);
    });

    axios.get("https://fakerapi.it/api/v1/companies?_quantity=1")
    .then(response => {
      setCompany(response.data.data[0]);
      console.log(response.data);
    })
    .catch(error => {
      console.error("Error fetching User:", error);
    });

    axios.get("https://fakerapi.it/api/v1/credit_cards?_quantity=1")
    .then(response => {
      setCard(response.data.data[0]);
      console.log(response.data);
    })
    .catch(error => {
      console.error("Error fetching User:", error);
    });

  }, [])

  return (
    <div className='userDetails'>
      <div className='Row'>
        <h2>User Details</h2>
        <span className='details'>First Name: <span className='text'> {user?.firstname}</span></span>
        <span className='details'>Last Name:<span className='text'> {user?.lastname}</span></span>
        <span className='details'>Email: <span className='text'> {user?.email}</span></span>
        <span className='details'>Phone Number: <span className='text'> {user?.phone}</span></span>
        <span className='details'>Gender:<span className='text'> {user?.gender}</span></span>
      </div>

      <div className='Row'>
        <h2>Company Details</h2>

        <h3>Basic Info</h3>
        <span className='details'>Company Name:<span className='text'> {company?.name}</span></span>
        <span className='details'>Company Email:<span className='text'> {company?.email}</span></span>
        <span className='details'>Country:<span className='text'> {company?.country}</span></span>
        <span className='details'>Phone Number<span className='text'> {company?.phone}</span></span>

        <h3>Contact Person Details</h3>
        <span className='details'>FirstName:<span className='text'> {company?.contact?.firstname}</span></span>
        <span className='details'>LastName:<span className='text'> {company?.contact?.lastname}</span></span>
        <span className='details'>Email:<span className='text'> {company?.contact?.email}</span></span>
        <span className='details'>Phone Number:<span className='text'> {company?.contact?.phone}</span></span>
        <span className='details'>Gender:<span className='text'> {company?.contact?.gender}</span></span>
      </div>

      <div className='Row'>
        <h2>Card Details</h2>
        
      </div>

      <div className='Row'>

      </div>


    </div>
  )
}

const CompanyAddressComponent = (props) => {
  return (
    <>
      hello
    </>
  )
}

export default User