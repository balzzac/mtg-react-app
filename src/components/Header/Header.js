import React from 'react';

import './Header.css';

/**
 * App header react component
 * @return {jsx}
 */
export default function Header() {
  return (
    <div className="l-header a-header">
      <img
        className="l-header--logo"
        src={require('../../images/minified/MTGlogo.png')}
        alt="App Logo"
      />
    </div>
  );
}
