import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {

  return (
    <>
        <nav className='header_navbar'>
          <li>
            <img src="" alt="" />
          </li>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          
        </nav>
    </>
  )
}
