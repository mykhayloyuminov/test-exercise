import React from "react";
import logo from './Logo.png';
import { Link } from "@reach/router";
import {auth} from "../firebase";

const Navbar = () => {
    return (
      <nav className="navbar">
          <a className="" href="https://www.cleveroad.com/" target="_blank">
            <img src={logo} width="105" alt="logo" />
          </a>
          <Link to="/products" className="tab">Products</Link>
          <Link to="/add" className="tab">Add</Link>
          <Link to="/signUp"><button className = "buttonGoogle" onClick = {() => {auth.signOut()}}>Sign out</button></Link>
        </nav>

  );
};


export default Navbar;