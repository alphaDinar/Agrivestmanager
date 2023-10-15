import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <section>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
    </section>
  );
}

export default Navbar;