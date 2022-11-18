import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">Fish Chat</span>
      <div className="user">
        <img src="https://cdn.discordapp.com/attachments/794666735126052866/1013541702260244510/GOPR0595.JPG" alt="" />
        <span>Alanis</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar