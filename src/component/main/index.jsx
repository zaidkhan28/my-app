import React from 'react'
import Logo from "../../Assets/Logo.jpg"
import photo from "../../Assets/restauranfood.jpg"

import "./main.css"

const main = () => {
  return (
  <>
  <div className='main-one'>
   <nav className='nav-dar'>
    <div className='logo-dar'>
     <img src={Logo} alt="" className='list-logo'/>
    </div>

    <ul className='list-dar'>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>reservations</li>
        <li>Orderonline</li>
        <li>Login</li>
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
    
    
  <form className='grid-one'>
      <select name="table" id="table">
      <option value="2 persion">2 person</option>
      <option value="4 persion">4 person</option>
      <option value="6 persion">6 person</option>
      </select>
      
     
    </form>
    <div className='sub'>
    <button>submit</button>
    </div>
   </main>
   </div>


   </>


   
  )
}

export default main
