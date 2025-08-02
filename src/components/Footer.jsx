import React from 'react';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-8 mt-12">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      <div className="mb-4 md:mb-0">
        <span className="font-bold">Shuraa Tax Accounting & Auditing</span> &copy; {new Date().getFullYear()}
      </div>
      <div className="flex gap-4">
        <a href="mailto:info@shuraatax.com" className="hover:underline">info@shuraatax.com</a>
        <a href="tel:+97144081900" className="hover:underline">+971 44081900</a>
      </div>
    </div>
  </footer>
);

export default Footer;
