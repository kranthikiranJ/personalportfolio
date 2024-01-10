import './header.css'

// function header(){
//     return(
//         <div className="header1">
//             <p>Madelyn Torff</p>
//             <div className="header2">
//                 <p className='about'>About</p>
//                 <p className='about'>Project</p>
//                 <p className='about'>Contact</p>
//             </div>
//         </div>
//     )
// }

// export default header

import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
        <h1>Madelyn Torff</h1>
      </div>
      <div className="navbar__right">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
