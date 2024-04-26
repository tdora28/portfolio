import React from 'react';

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="container py-5 text-center">
      <small>&copy; {getCurrentYear()} TDora28. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
