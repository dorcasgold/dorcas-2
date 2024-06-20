
import computer from '../assets/computer.gif'
import { TypeAnimation } from 'react-type-animation'
import cv from '../assets/DORCAS ODETAYO FRONTEND WEB DEVELOPER.pdf'

function Home() {
  return (
    <div className='my-8 mx-5'>
      <div className="flex-col sm:flex-row flex justify-between items-center mx-5 mt-5">
        <div className="text max-w-xl pl-2.5">
          <p className='text-3xl font-medium md:text-5xl sm:text-6xl'>Hello, I&apos;m</p>
          <p className='text-3xl font-medium md:text-5xl sm:text-6xl'>Dorcas Odetayo</p>
          <div>
            <h1 className='md:text-5xl sm:text-6xl text-2xl  md:py-6'>
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2500,
                  'Web Designer',
                  2500,
                  'Frontend Developer',
                  2500,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </div>
          <p className='my-3 leading-8 py-3.5 text-base'>
            I am a frontend developer with extensive experience in crafting visually appealing and user-centric web interfaces. My expertise lies in translating design visions into sleek, responsive, and intuitive websites and mobile apps. I am eager to join a dynamic team where I can push my boundaries, enhance user experiences, and drive the company&apos;s success with my skills and dedication.
          </p>

          <div>
            <span className="bg-stone-300 text-pink-950 py-3 px-5 rounded-lg font-medium cursor-pointer transition-all duration-300 ease-in hover:rounded-sm hover:bg-pink-950 hover:text-stone-300">
              <a href={cv}>
                View Resume
              </a>
            </span>
          </div>
        </div>
        <div className="icon hidden sm:flex max-w-sm flex-col">
          <img src={computer} alt="computer" />
        </div>

      </div>
    </div >
  )
}

export default Home