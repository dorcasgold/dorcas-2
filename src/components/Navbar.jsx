import { Link, NavLink } from "react-router-dom";
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

function Navbar() {

  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <nav className='my-5 mx-5 bg-stone-300 text-pink-950 py-2.5 px-2.5 rounded-3xl'>
      <div className='flex justify-between items-center px-2.5'>
        <div className="logo">
          <Link to="/">
            <span className='text-3xl font-semibold'>DORCAS</span>
          </Link>
        </div>
        <div>
          <ul className=' hidden md:flex text-xl gap-5 font-medium'>
            <NavLink to="/"
              className={({ isActive }) =>
                ` ${isActive ? " text-red-500 " : "text-pink-950"} hover:text-orange-500`
              }
            >
              <li>About</li>
            </NavLink>

            <NavLink to="skills"
              className={({ isActive }) =>
                ` ${isActive ? " text-red-500 " : "text-pink-950"} hover:text-orange-500`
              }
            >
              <li>Tech</li>
            </NavLink>
            <NavLink to="project"
              className={({ isActive }) =>
                ` ${isActive ? " text-red-500 " : "text-pink-950"} hover:text-orange-500`
              }
            >
              <li>Project</li>
            </NavLink>
            <NavLink to="contact"
              className={({ isActive }) =>
                ` ${isActive ? " text-red-500 " : "text-pink-950"} hover:text-orange-500`
              }
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div className={nav ? 'md:hidden navbar text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r-gray-900 ease-in-out duration-500 ' : "fixed left-[-100%]"}>
          <div className="logo text-center my-10">
            <Link to="/">
              <span className='text-3xl logo font-semibold'>DORCAS</span>
            </Link>
          </div>
          <div>
            <ul className='flex flex-col items-center text-xl gap-5 font-medium'>
              <NavLink to="/"
                className={({ isActive }) =>
                  ` ${isActive ? " text-red-500 " : "text-white"} hover:text-orange-500`
                }
              >
                <li>About</li>
              </NavLink>

              <NavLink to="skills"
                className={({ isActive }) =>
                  ` ${isActive ? " text-red-500 " : "text-white"} hover:text-orange-500`
                }
              >
                <li>Tech</li>
              </NavLink>
              <NavLink to="project"
                className={({ isActive }) =>
                  ` ${isActive ? " text-red-500 " : "text-white"} hover:text-orange-500`
                }
              >
                <li>Project</li>
              </NavLink>
              <NavLink to="contact"
                className={({ isActive }) =>
                  ` ${isActive ? " text-red-500 " : "text-white"} hover:text-orange-500`
                }
              >
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar