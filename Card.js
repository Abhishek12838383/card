import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Card.css'
import logo from './img/1687233737285 (1) 1.png'

const Card = () => {
const [userData,setData]=useState([]);

useEffect(()=>{
  axios.get('https://randomuser.me/api/?page=1&results=1&seed=abc')
  .then((response)=>{
    console.log(response)
    setData(response.data.results)
  })
},[]);

  return (
    <div className='card'>
      
<div className="logo"><img src={logo} alt="" /></div>
<div className="profile-img">
{userData.map((results)=>{
  return(
    <div><img src={results.picture.large} alt="" /></div>
  )
})}
</div>

<div className="name">
<div className="profile-name">
{userData.map((results)=>{
  return(
    <div>{results.name.first}</div>
  )
})}
{userData.map((results)=>{
  return(
    <div>{results.name.last}</div>
  )
})}
</div>
</div> 
<div className="gender">
    <div className="genderr">
    {userData.map((results)=>{
  return(
    <div>{results.gender}</div>
  )
})}
    </div>

</div>
<div className="email">
{userData.map((results)=>{
  return(
    <div>{results.email}</div>
  )
})}
</div>

<div className="num">
{userData.map((results)=>{
  return(
    <div className='number'>{results.phone}</div>
  )
})}

</div>

    
    </div>
  
)}

export default Card;
