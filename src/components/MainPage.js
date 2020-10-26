import React, {useState} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import image from '../images/8.png'
import logo from '../images/logo1.png';
import namelogo from '../images/brandnameimage.png'
function MainPage() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   let width = window.innerWidth;
   console.log(width);
  return ( 
<div className = "container" >

   <div className = "navbar">
   <div class="menu">
     <img src={logo} alt=""className="image"/>
     <img src={namelogo} className="d-inline-block align-top  brandnameimage img-responsive brandnameimage" alt="React Bootstrap logo"/>
     <nav><ul>
     <a href="">Why Vyorius?</a>
     <a href="">Solutions</a>
     <a href="">Products</a>
     <a href ="">Use cases</a>
     <a href ="">Team</a>
     <a href ="">Partners</a>
     <a href ="">Contact Us</a>
     </ul></nav>

     <button type = "button" className = "menubutton" onClick = {handleShow} > Launch Vyorius </button>

</div></div>
<div className = "row" >
<div className = "col-2"><br></br>
<br></br><br></br><br></br><br></br>
<p> CONNECTING THE DISCONNECTED </p>
<h1 className="mainHeading">
    <span className = "orangeText" > Vyorius < /span>
    brings <span className="textinSingleline">unmanned <br></br> robots <
    span className = "orangeText" > together< /span></span>,< br/ > wherever they are<br></br> you are< /h1>
    
<p className="mainPageP" > With all of the operations,commanding and maintenance<br></br> tools in one place,unmanned vehicles will stay connected<br></br> and productive
     no matter where you’re operating. </p> <div class="body">
<img src={image} align="right"/>
</div>
<button type = "button" className = " btn  button1" onClick = {handleShow} > Try Vyorius < /button> 
<button type = "button" className = " btn button2" onClick = {handleShow}> Learn More < /button> 
     
<p className = "" > <span> Need to order  ? 
<a href = "" className = "link1" > Get Started < /a></span > < /p>


  </div>
  </div>
  </div>
     
  
);
}
export default MainPage;
