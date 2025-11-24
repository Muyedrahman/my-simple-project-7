import React from 'react';

import Container from './Container';

const Navbar = () => {
    return (

    <nav className='navbar bg-base-100 shadow-sm border-b-[0.5px] mx-auto'>  

      {/* -1 */}
      <div className="flex-1 flex flex-row">
   
       <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
      </div>
      <div className="flex-none  ">
       <ul className="menu menu-horizontal px-1">
         <li><a>Home</a></li>
         <li><a>FAQ</a></li>
         <li><a>Changelog</a></li>
         <li><a>Blog</a></li>
         <li><a>Download</a></li>
         <li><a>Contact</a></li>
        
       </ul>
      <button className="btn btn-primary"> <p className='text-xl'> + </p> New Ticket</button>
       
         
      </div>
    

    </nav>



      


    
        


    );
};

export default Navbar;