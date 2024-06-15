import React from 'react'

function Navbar() {
  return (
    <nav className='my-5 mx-5 bg-stone-300 text-pink-950 py-2.5 px-2.5 rounded-full'>
      <div className='flex justify-between items-center px-2.5'>
        <div className="logo">
          <span className='text-3xl font-semibold'>DORCAS</span>
        </div>
        <div>
          <ul className='flex text-xl gap-5 font-medium'>
            <li>About</li>
            <li>Skills/Tools</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar