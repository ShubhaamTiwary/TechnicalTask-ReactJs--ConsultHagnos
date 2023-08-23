import React, { useEffect, useState } from 'react'
import '../style/User.css'
import axios from "axios";

const User = () => {

  const [user, setUser] = useState(null);
  const [company, setCompany] = useState(null);
  const [card, setCard] = useState(null);
  const [product, setProduct] = useState(null);

  const [address, setAddress] = useState(null);

  useEffect(() => {

    async function fetchData() {
      try {
        const UserResponse = await fetch("https://fakerapi.it/api/v1/persons?_quantity=1&amp;_gender=male&amp;_birthday_start=2005-01-01");
        const UserData = await UserResponse.json();
        // console.log(UserData.data[0]);
        setUser(UserData.data[0]);

        const CompanyResponse = await fetch("https://fakerapi.it/api/v1/companies?_quantity=1");
        const CompanyData = await CompanyResponse.json();
        setCompany(CompanyData.data[0]);
        setAddress(CompanyData.data[0].addresses);
        // console.log(CompanyData.data[0].addresses);

        const CardResponse = await fetch("https://fakerapi.it/api/v1/credit_cards?_quantity=1");
        const CardData = await CardResponse.json();
        setCard(CardData.data[0]);

        const ProductResponse = await fetch("https://fakerapi.it/api/v1/products?_quantity=3&amp;_taxes=1&amp;_categories_type=uuid");
        const productData = await ProductResponse.json();
        setProduct(productData.data);
        console.log(productData.data);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, [])


  return (
    <div className='userDetails'>
      <div className='Row'>
        <h2 className='heading'>User Details</h2>
        <span className='details'>First Name: <span className='text'> {user?.firstname}</span></span>
        <span className='details'>Last Name:<span className='text'> {user?.lastname}</span></span>
        <span className='details'>Email: <span className='text'> {user?.email}</span></span>
        <span className='details'>Phone Number: <span className='text'> {user?.phone}</span></span>
        <span className='details'>Gender:<span className='text'> {user?.gender}</span></span>
      </div>

      <div className='Row'>
        <h2 className='heading'>Company Details</h2>

        <h3>Basic Info</h3>
        <span className='details'>Company Name:<span className='text'> {company?.name}</span></span>
        <span className='details'>Company Email:<span className='text'> {company?.email}</span></span>
        <span className='details'>Country:<span className='text'> {company?.country}</span></span>
        <span className='details'>Phone Number<span className='text'> {company?.phone}</span></span>

        <h3>Company Address</h3>
        <span>{address?.map((ele, i) => {
          return (
            <div className='address'>
              <>Address-{i + 1}</>
              <span className='details'>Street:<span className='text'> {ele?.street}</span></span>
              <span className='details'>StreetName:<span className='text'> {ele?.streetName}</span></span>
              <span className='details'>City:<span className='text'> {ele?.city}</span></span>
              <span className='details'>Country:<span className='text'> {ele?.country}</span></span>
            </div>
          )
        })}
        </span>

        <h3>Contact Person Details</h3>
        <span className='details'>FirstName:<span className='text'> {company?.contact?.firstname}</span></span>
        <span className='details'>LastName:<span className='text'> {company?.contact?.lastname}</span></span>
        <span className='details'>Email:<span className='text'> {company?.contact?.email}</span></span>
        <span className='details'>Phone Number:<span className='text'> {company?.contact?.phone}</span></span>
        <span className='details'>Gender:<span className='text'> {company?.contact?.gender}</span></span>
      </div>

      <div className='Row'>
        <h2 className='heading'>Card Details</h2>
        <span className='details'>Type:<span className='text'> {card?.type}</span></span>
        <span className='details'>Card Number:<span className='text'> {card?.number}</span></span>
        <span className='details'>Card owner:<span className='text'> {card?.owner}</span></span>
      </div>

      <div className='Row'>
        <h2 className='heading'>Previously Bought Products</h2>
        <span>
          {product?.map((ele,i)=>{
            return (
              <div className='address'>
              <span className='details'>Name:<span className='text'> {ele?.name} (id: {ele?.id})</span></span>
              <span className='details'>Description:<span className='text'> {ele?.description}</span></span>
              <span className='details'>Price:<span className='text'> {ele?.price}</span></span>
              </div>
            )
          })}
        </span>
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