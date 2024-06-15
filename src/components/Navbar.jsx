import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='my-5 mx-5 bg-stone-300 text-pink-950 py-2.5 px-2.5 rounded-full'>
      <div className='flex justify-between items-center px-2.5'>
        <div className="logo">
          <span className='text-3xl font-semibold'>DORCAS</span>
        </div>
        <div>
          <ul className=' hidden md:flex text-xl gap-5 font-medium'>
            <li>About</li>
            <li>Skills/Tools</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'md:hidden text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r-gray-900 bg-pink-950 ease-in-out duration-500 ' : "fixed left-[-100%]"}>
          <div className="logo text-center my-10">
            <span className='text-3xl font-semibold'>DORCAS</span>
          </div>
          <div>
            <ul className='flex flex-col items-center text-xl gap-5 font-medium'>
              <li>About</li>
              <li>Skills/Tools</li>
              <li>Project</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar