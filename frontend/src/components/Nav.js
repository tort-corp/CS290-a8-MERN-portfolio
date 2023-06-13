//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="../topics">Topics</Link>
        {/*<Link to="../contact">Contact</Link>*/}
        <Link to="../gallery">Gallery</Link>
        <Link to="../ordering">Order</Link>
        <Link to="../staffing">Staff</Link>
        <Link to="/repair">Add Repair</Link>
    </nav>
  );
}

export default Nav;
