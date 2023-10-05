//Navigate from page to page

import React from 'react';
import { Link } from 'react-router-dom';


/*Update the list of <Link/>s to reflect each page that you will have in your website (excluding Create, Update, and Delete; they do not need to be in the global navigation). The to="" path for each <Link/> will refer back a directory with ../ and reference the <Route> path as defined in the App.js file (which is created in the next tab.) The only exception is the Home page Route; it must not refer to a path; just itself, like this: <Link to="/">Home</Link>.*/ 


function Nav() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="../topics">Topics</Link>
        {/*<Link to="../contact">Contact</Link>*/}
        <Link to="../gallery">Gallery</Link>
        <Link to="../ordering">Order</Link>
        <Link to="../staffing">Staff</Link>
        <Link to="/repair">Repairs</Link>
    </nav>
  );
}


//Export the function name.
export default Nav;
