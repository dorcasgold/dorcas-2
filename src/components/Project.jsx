import form from '../assets/website/form.png'
import portfolio from '../assets/website/portfolio.png'
import rps from '../assets/website/rps.png'
import skill from '../assets/website/skill.png'
import codeicon from '../assets/code-fork.gif'
import eyeicon from '../assets/eye.gif'

function Project() {
  return (
    <div className='mx-3 my-3'>
      <div className='flex gap-10 items-center justify-center flex-col'>
        <div className='my-4 '>
          <p className='sm:text-4xl my-5 text-2xl font-semibold'>Showcase of my Personal Projects</p>
          <p className='text-xl my-5'>Browse through a collection of my creations to gain insight into my skills and interests.</p>
        </div>

        <div >
          <div className="flex flex-col justify-center items-center gap-10">
            <div className="w-80 card rounded sm:w-3/6">
              <div>
                <img className='rounded' src={skill} alt="project-img" />
              </div>
              <div className='mx-3 my-3 px-3 py-3 flex   gap-3 flex-col'>
                <p className='text-lg font-semibold'>Skillhub </p>
                <p className='text-gray-300'>Online Learning platform</p>
                <p>Html css js</p>
                <div className="flex items-center  gap-10">
                  <div>
                    <div className='flex items-center gap-1'>
                      <img className='w-8' src={codeicon} alt="icon" />
                      <div>
                        <a href="https://github.com/dorcasgold/skillhub">code</a>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <img className='w-6' src={eyeicon} alt="icon" />
                    <div>
                      <a href="https://skillhubb.netlify.app/">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-80 card rounded sm:w-3/6">
              <div>
                <img className='rounded' src={portfolio} alt="project-img" />
              </div>
              <div className='mx-3 my-3 px-3 py-3 flex   gap-3 flex-col'>
                <p className='text-lg font-semibold'>Portfolio Website</p>
                <p className='text-gray-300'>My previous Portfolio Website</p>
                <p>Html css js</p>
                <div className="flex items-center  gap-10">
                  <div>
                    <div className='flex items-center gap-1'>
                      <img className='w-8' src={codeicon} alt="icon" />
                      <div>
                        <a href="https://github.com/dorcasgold/dorcasodetayo">code</a>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <img className='w-6' src={eyeicon} alt="icon" />
                    <div>
                      <a href="https://dorcas-odetayo.netlify.app/">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-80 card rounded sm:w-3/6">
              <div>
                <img className='rounded' src={form} alt="project-img" />
              </div>
              <div className='mx-3 my-3 px-3 py-3 flex   gap-3 flex-col'>
                <p className='text-lg font-semibold'>Login / Signup </p>
                <p className='text-gray-300'>a modern and user-friendly login/signup form</p>
                <p>React Tailwind </p>
                <div className="flex items-center  gap-10">
                  <div>
                    <div className='flex items-center gap-1'>
                      <img className='w-8' src={codeicon} alt="icon" />
                      <div>
                        <a href="https://github.com/dorcasgold/React-Login-Signup">code</a>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <img className='w-6' src={eyeicon} alt="icon" />
                    <div>
                      <a href="https://react-form-dorcas.netlify.app/">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-80 card rounded sm:w-3/6">
              <div>
                <img className='rounded' src={skill} alt="project-img" />
              </div>
              <div className='mx-3 my-3 px-3 py-3 flex   gap-3 flex-col'>
                <p className='text-lg font-semibold'>Skillhub </p>
                <p className='text-gray-300'>Online Learning platform</p>
                <p>Html css js</p>
                <div className="flex items-center  gap-10">
                  <div>
                    <div className='flex items-center gap-1'>
                      <img className='w-8' src={codeicon} alt="icon" />
                      <div>
                        <a href="#">code</a>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <img className='w-6' src={eyeicon} alt="icon" />
                    <div>
                      <a href="#">Live Demo</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Project