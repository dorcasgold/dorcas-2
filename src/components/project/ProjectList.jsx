import Project from "./Project"
import projects from './ProjectsData'

function ProjectList() {
  return (
    <div className='mx-3 my-3'>
      <div className='flex gap-10 items-center justify-center flex-col'>
        <div className='my-4'>
          <p className='sm:text-4xl my-5 text-2xl font-semibold'>Showcase of my Personal Projects</p>
          <p className='text-xl my-5'>Browse through a collection of my creations to gain insight into my skills and interests.</p>
        </div>

        <div className="flex flex-col justify-center items-center gap-10">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectList