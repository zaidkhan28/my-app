import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from "../../Assets/Logo.jpg"
import './home.css'
import video1 from '../../Assets/hotel.mp4'
import img1 from '../../Assets/Mario and Adrian A.jpg'
import img2 from '../../Assets/restaurant chef B.jpg'
import img3 from '../../Assets/takos.jpg'
import img4 from '../../Assets/pizza.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'
import img10 from '../../Assets/img10.jpg'
import img11 from '../../Assets/img11.jpg'
import img12 from '../../Assets/img12.jpg'
import {MdOutlineAddShoppingCart} from 'react-icons/md'
import {FaCopyright} from "react-icons/fa"


const Home = () => {

const [count, setcount] = useState (0);


 const Data=[
    {
        id:1,
        imgsrc:img5,
        title:"20$",
        
    },

    {
        id:2,
        imgsrc:img6,
        title:"30$",
        
    },
    {
        id:3,
        imgsrc:img7,
        title:"50$",
        
    },

    {
        id:4,
        imgsrc:img8,
        title:"45$",
        
    },
    {
        id:5,
        imgsrc:img9,
        title:"15$",
    },

    {
        id:6,
        imgsrc:img10,
        title:"100$",
    },
    {
        id:7,
        imgsrc:img11,
        title:"80$",
    },

    {
        id:8,
        imgsrc:img12,
        title:"80$",
    },

   
 ]
    
       



  return (
    <div>
     
     <nav className='nav-dar'>
    <div className='logo-dar'>
     <img src={Logo} alt="" className='list-logo'/>
    </div>

    <ul className='list-dar'>
        
        <Link to="/"> <li className='navda'>Home</li></Link>
        <Link to="/about"><li className='navda'>About</li></Link>
        <Link to="/reservations"><li className='navda'>reservations</li></Link>
        <Link to="/Menu"><li className='navda'>Menu</li></Link>
        <Link to="/orderonline"><li className='navda'>Orderonline</li></Link>
        <Link to="/login"><li className='navda'>Login</li></Link>
    </ul>
   </nav>
<div className='noll'>

<video className='backvid' muted autoPlay loop>
<source src={video1}  type='video/mp4'/>

</video>
<div className='leon'>
    <h1>Little Lemon: Taste the Zest</h1>
<p>Welcome to Little Lemon, where culinary artistry meets the warmth of home.<b> Little Lemon offers a delightful fusion of traditional flavors and contemporary dining.</b></p>
<div className='bro-bro'>
<Link to="/reservations"><button className='btn-nn'>Reservation</button></Link>
<button className='btn-nn'>Orderonline</button>
</div>
</div>
</div>
    
    <div className='carban'>

        <div className='oxygen'>
          <img src={img1} alt="" />
          <p>Best Octopus Shef</p>
        </div>
        <div className='oxygen'>
          <img src={img2} alt="" />
          <p>Best pizza shef</p>
        </div>
        <div className='oxygen'>
          <img src={img3} alt="" />
          <p>Octopus</p>
        </div>
        <div className='oxygen'>
          <img src={img4} alt="" />
          <p>Pizza</p>
        </div>

    </div>

    <div className='nana'>
  <h1>Best Seller's</h1>
  
   </div>
   <div className='lale'>
<div className='count'>{count}</div>
</div> 
           <div className='content'>
           
   


{
              Data.map(({id,imgsrc,title,}) =>{
                 return(
                    <div key={id} className="singleDestination">
                          <div className="imgeDiv">
                            <img src={imgsrc}  />
                          </div>

                          <div className="cardInfo">
                            <h4 className="destTitle">
                               {title}

                            </h4>
                             <button className='BBBB'>ORDER NOW</button>
                             
                             <button onClick={()=>setcount(count+1)} className='new-new'> <MdOutlineAddShoppingCart /></button>         
                          </div>
                          
                    </div>
                 )
              })
                }
            </div>

            <footer>
            <FaCopyright className='iphone' />
            <h1>Copy right Little Lemon</h1>
            </footer>
</div>


 
  )
}

export default Home
