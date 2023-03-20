import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from "react-router-hash-link"
const Header = () => {
  return (
    <nav>
        <h1>codeStar</h1>
        <main>
            <HashLink to="/#Home">Home</HashLink>
            <HashLink to="/#About">About</HashLink>
            <HashLink to="/contact">Contact</HashLink>
            <HashLink to="/#Brand">Brands</HashLink>
            {/* <HashLink to="/Services">Services</HashLink> */}
           
        </main>
    </nav>
  )
}

export default Header;