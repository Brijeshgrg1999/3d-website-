import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
      <ul style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', listStyle: 'none', padding: 0 }}>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>Our Services</a></li>
        <li><a href='#'>Contact Us</a></li>
      </ul>
    </div>
  )
}

export default Navbar