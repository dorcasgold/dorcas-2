import React from 'react';
import Project from './Project';
import skill from '../assets/website/skill.png';
import portfolio from '../assets/website/portfolio.png';
import form from '../assets/website/form.png';
import wave from '../assets/website/wave.png';
import rps from '../assets/website/rps.png';

const ProjectComponents = () => {
  const projects = [
    {
      imgSrc: skill,
      title: 'Skillhub',
      description: 'Online Learning Platform',
      codeLink: 'https://github.com/dorcasgold/skillhub',
      liveLink: 'https://skillhubb.netlify.app/',
    },
    {
      imgSrc: portfolio,
      title: 'Portfolio Website',
      description: 'My previous Portfolio Website',
      codeLink: 'https://github.com/dorcasgold/dorcasodetayo',
      liveLink: 'https://dorcas-odetayo.netlify.app/',
    },
    {
      imgSrc: form,
      title: 'Login / Signup',
      description: 'A modern and user-friendly login/signup form',
      codeLink: 'https://github.com/dorcasgold/React-Login-Signup',
      liveLink: 'https://react-form-dorcas.netlify.app/',
    },
    {
      imgSrc: wave,
      title: 'WeatherWave',
      description: 'A web app that displays real-time weather data from the OpenWeatherMap API based on user-input locations.',
      codeLink: 'https://github.com/dorcasgold/WeatherWave',
      liveLink: 'https://weatherwavew.netlify.app/',
    },
    {
      imgSrc: rps,
      title: 'Slash Clash',
      description: 'Rock, Paper, Scissors !!!',
      codeLink: 'https://github.com/dorcasgold/Rock-Paper-Scissors',
      liveLink: 'https://slashclash.netlify.app/',
    },
  ];

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
  );
};

export default ProjectComponents;
