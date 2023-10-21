import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
    <nav className="flex">
      <header className="footer-title">Brand Shop:</header>
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/login'>Login</NavLink>
      <NavLink to='/myCard'>My Cart</NavLink>
      <NavLink to='/addProduct'>Add Product</NavLink>
      <NavLink to='/register'>Register</NavLink>
      
    </nav> 
   
  </footer>
);
};

export default Footer;