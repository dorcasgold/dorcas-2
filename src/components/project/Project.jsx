// component to display an individual project:
import codeicon from '../../assets/code-fork.gif';
import eyeicon from '../../assets/eye.gif';

function Project({ imgSrc, title, description, codeLink, liveLink }) {
  return (
    <div className='w-80 card rounded sm:w-3/6'>
      <div>
        <img className='rounded lazy-load-image-background lazy-load-image-loaded' src={imgSrc} alt="project-img" />
      </div>
      <div className='mx-3 my-3 px-3 py-3 flex gap-3 flex-col'>
        <p className='text-lg font-semibold'>{title}</p>
        <p className='text-gray-300'>{description}</p>
        <p>Html css js</p>
        <div className="flex items-center gap-10">
          <div>
            <div className='flex items-center gap-1'>
              <img className='w-8' src={codeicon} alt="icon" />
              <div>
                <a href={codeLink}>View Code</a>
              </div>
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <img className='w-6' src={eyeicon} alt="icon" />
            <div>
              <a href={liveLink}>Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project