import React from 'react';

export default function Navbar() {
  return (
    <div className='fixed-top  navigator'>
      <nav
        className='navbar navbar-expand-lg navbar-dark bg-dark'
        style={{ backgroundColor: '#1c2331' }}
      >
        <div className='container-fluid'>
          <a className='navbar-brand app--title' href='/'>
            NewsLand
          </a>
        </div>
      </nav>
    </div>
  );
}
