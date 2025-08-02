import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
      <Link to="/" className="text-xl font-bold text-blue-700">ShuraaTax</Link>
      <ul className="flex gap-6 text-gray-700 font-medium">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
