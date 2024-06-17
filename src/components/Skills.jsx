function Skills() {
  return (
    <div className="my-5  mx-12">
      <div className="flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-6 justify-between">
          < h1 className="text-xl font-semibold sm:text-5xl">Technologies & Tools</h1>
          <h1 className="text-sm font-medium sm:text-base">Here are some of the tools & tech I use in personal and professional projects.</h1>
          <div>
            <span className="bg-stone-300 text-pink-950 py-3 px-5 rounded-lg font-medium cursor-pointer transition-all duration-300 ease-in hover:rounded-sm hover:bg-pink-950 hover:text-stone-300">
              View Resume
            </span>
          </div>
        </div>

        <div className="mt-5">
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
            <div className="group border-gray-500 h-40 rounded-md border w-40 text-center justify-center items-center px-2 py-2 gap-5  flex flex-col">
              <img className="imgIcon transition duration-200 transform group-hover:scale-125" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
              <p className="text-gray-400">react</p>
            </div>

            <div className="group border-gray-500 h-40 rounded-md border w-40 text-center justify-center items-center px-2 py-2 gap-5  flex flex-col">
              <i className="imgIcon transition duration-200 transform group-hover:scale-125  devicon-reactrouter-plain colored "></i>
              <p className='text-gray-400'>react router</p>
            </div>
            <div className="group border-gray-500 h-40 rounded-md border w-40 text-center justify-center items-center px-2 py-2 gap-5  flex flex-col">
              <img className="imgIcon transition duration-200 transform group-hover:scale-125" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
              <p className='text-gray-400'>html5</p>
            </div>
            <div className="group border-gray-500 h-40 rounded-md border w-40 text-center justify-center items-center px-2 py-2 gap-5  flex flex-col">
              <img className="imgIcon transition duration-200 transform group-hover:scale-125" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
              <p className='text-gray-400'>Javascript</p>
            </div>
            <div className="group border-gray-500 h-40 rounded-md border w-40 text-center justify-center items-center px-2 py-2 gap-5  flex flex-col">
              <svg className="transition duration-200 transform group-hover:scale-125" viewBox="0 0 128 128">
                <path fill="#1572B6" d="M18.814 114.123L8.76 1.352h110.48l-10.064 112.754-45.243 12.543-45.119-12.526z"></path><path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.601-96.354h-45.16v106.49z"></path><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"></path><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"></path><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"></path><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.64l-.277-3.108-.63-7.012-.331-3.711h34.646zm-.047 27.996v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"></path>
              </svg>
              <p className='text-gray-400'>css</p>
            </div>
            <div className="group border-gray-500 h-40 rounded-md border w-40 text-center justify-center items-center px-2 py-2 gap-5  flex flex-col">
              <i className="transition duration-200 transform group-hover:scale-125 devicon-github-original"></i>
              <p className='text-gray-400'>github</p>
            </div>
            <div className="group border-gray-500 h-40 rounded-md border w-40 text-center justify-center items-center px-2 py-2 gap-5  flex flex-col">
              <img className="transition duration-200 transform group-hover:scale-125 imgIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
              <p className="text-gray-400">sass</p>
            </div>
            <div className="group border-gray-500 h-40 rounded-md border w-40 text-center justify-center items-center px-2 py-2 gap-5  flex flex-col">
              <img className="transition duration-200 transform group-hover:scale-125 imgIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" />
              <p className='text-gray-400'>firebase</p>
            </div>
            <div className="group border-gray-500 h-40 rounded-md border w-40 text-center justify-center items-center px-2 py-2 gap-5  flex flex-col">
              <i className="transition duration-200 transform group-hover:scale-125 devicon-tailwindcss-original colored "></i>
              <p className='text-gray-400'>tailwind css</p>
            </div>
            <div className="group border-gray-500 h-40 rounded-md border w-40 text-center justify-center items-center px-2 py-2 gap-5  flex flex-col">
              <img className="transition duration-200 transform group-hover:scale-125 imgIcon" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
              <p className='text-gray-400'>figma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills