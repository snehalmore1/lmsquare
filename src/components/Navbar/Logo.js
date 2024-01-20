import React from 'react';
import logo from './logo.png';

function Logo({ src, alt }) {
  return (
    <img src={logo} alt="client" style={{ width: '50%', height:'50%' }}/>   
  );
}

export default Logo;