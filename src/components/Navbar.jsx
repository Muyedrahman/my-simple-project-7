import React from 'react';

// import Container from './Container';

const Navbar = () => {
    return (
      <div className="navbar bg-base-100 shadow-sm">
        {/* Left: Logo */}
        <div className="navbar-start">
          <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
        </div>

        {/* Right */}
        <div className="navbar-end flex items-center gap-4">
          {/* Mobile Menu */}
          <div className="dropdown dropdown-end lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Changelog</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>Download</a>
              </li>
              <li>
                <a>Contact</a>
              </li>
              <li>
                <a className="btn btn-primary font-bold mt-2">+ New Ticket</a>
              </li>
            </ul>
          </div>

          {/* Desktop Menu */}
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>

          {/* Desktop Button (Now aligned beside menu) */}
          <button className="btn btn-primary hidden lg:flex">
            <span className="text-xl font-bold">+</span> New Ticket
          </button>
        </div>
      </div>

      // <nav className='navbar bg-base-100 shadow-sm border-b-[0.5px] mx-auto'>

      //   {/* -1 */}
      //   <div className="flex-1 flex flex-row">

      //    <a className="btn btn-ghost text-xl font-bold">CS — Ticket System</a>
      //   </div>
      //   <div className="flex-none  ">
      //    <ul className="menu menu-horizontal px-1">
      //      <li><a>Home</a></li>
      //      <li><a>FAQ</a></li>
      //      <li><a>Changelog</a></li>
      //      <li><a>Blog</a></li>
      //      <li><a>Download</a></li>
      //      <li><a>Contact</a></li>

      //    </ul>
      //   <button className="btn btn-primary"> <p className='text-xl'> + </p> New Ticket</button>

      //   </div>

      // </nav>
    );
};

export default Navbar;