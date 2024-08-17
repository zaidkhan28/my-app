import React, { useState } from 'react'
import Logo from "../../Assets/Logo.jpg"
import photo from "../../Assets/restauranfood.jpg"
import { Link } from 'react-router-dom'
import "./main.css"





const Reservations = () => {
  const [alertt,setalertt] = useState(null);

  const toggle = ()=>{
    
    setalertt ("Thank's to Reservation table in little lemon " )
    
  }

  return (
  <>
  <div className='main-one'>
   <nav className='nav-dar'>
    <div className='logo-dar'>
     <img src={Logo} alt="" className='list-logo'/>
    </div>

    <ul className='list-dar'>
        <Link to="/" className='navda'> <li>Home</li></Link>
        <Link to="/about"className='navda'><li>About</li></Link>
        <Link to="/reservations" className='navda'><li>reservations</li></Link>
        <Link to="/Menu" className='navda'><li>Menu</li></Link>
        <Link to="/orderonline" className='navda'><li>Orderonline</li></Link>
        <Link to="/login" className='navda'><li>Login</li></Link>
    </ul>
   </nav>

   <header>


   <div className='about'>
      <h1>Little lemon</h1>
      <h4>Chicago</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <button>show</button>

      
    </div>


    <img src={photo} alt="" className='logo' />
   

   
   </header>

   <main className='list-one'>
    
    <div className='sec-one'>
      
      <p className='para'><b>Outdoor hotels offer a range of unique lodging options such as luxury tents</b>, yurts, treehouses, and cabins. These accommodations are often equipped with comfortable beds, private
         bathrooms, heating, and cooling systems, and sometimes even private decks with stunning views.</p>
         <div className='aboutt'>
         <label htmlFor="redio" id='box'>Out Dore</label>
         <input type="checkbox" name="redio" id="input" className='btn-btn'/>
         </div>
    </div>

    <div className='sec-two'>
    <p className='para'><b>Hotels in Indore, especially luxury and mid-range options,</b>,cuisine, and entertainment options, providing guests with an immersive experience of Indore's rich heritage.</p>
         <div className='aboutt'>
         <label htmlFor="redio" id='box'>In Dore</label>
         <input type="checkbox" name="redio" id="input" className='btn-btn'/>
         </div>
    </div>
    
    </main>
    
  <form className='reservetion'>
   <div className='datein'>
   <label htmlFor="date">Enter Date</label>
   <input className='date' type="date" />
   </div>
   <div className='timein'>
   <label htmlFor="time">Enter Time</label>
   <input className='time' type="time" />
   </div>

   <div className='grid-one'>
      <select name="table" id="table">
      <option value="2 persion">1 person</option>
      <option value="4 persion">2 person</option>
      <option value="6 persion">3 person</option>
      <option value="4 persion">4 person</option>
      <option value="6 persion">5 person</option>
      <option value="4 persion">6 person</option>
      <option value="6 persion">7 person</option>
      <option value="6 persion">8 person</option>
      <option value="4 persion">9 person</option>
      <option value="6 persion">10 person max</option>
      </select>
    </div>
     
    <div className='event'>
      <select name="table" id="table">
      <option value="Birthday">Birthday</option>
      <option value=" Anniversary">Anniversary</option>
      </select>
    </div>

    </form>
    <div className='sub'>
    <button onClick={toggle}>submit {alertt}</button>
    </div>
   
   </div>

   

   </>


   
  )
}

export default Reservations
