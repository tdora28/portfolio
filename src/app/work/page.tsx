import React from 'react';
import { fontDisplay } from '@/utilities/font';
import ProjectCard from '@/components/ProjectCard';

const WorkPage = () => {
  const projects = [
    {
      id: 1,
      imageUrl: '/example-project.jpg',
      title: 'Example Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus nec lacinia fermentum, nunc nunc ultricies turpis, vel volutpat diam justo eu purus.',
      liveDemoUrl: 'https://github.com/tdora28/',
      codeUrl: 'https://github.com/tdora28/',
    },
    {
      id: 2,
      imageUrl: '/example-project.jpg',
      title: 'Example Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus nec lacinia fermentum, nunc nunc ultricies turpis, vel volutpat diam justo eu purus.',
      liveDemoUrl: 'https://github.com/tdora28/',
      codeUrl: 'https://github.com/tdora28/',
    },
    {
      id: 3,
      imageUrl: '/example-project.jpg',
      title: 'Example Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus nec lacinia fermentum, nunc nunc ultricies turpis, vel volutpat diam justo eu purus.',
      liveDemoUrl: 'https://github.com/tdora28/',
      codeUrl: 'https://github.com/tdora28/',
    },
    {
      id: 4,
      imageUrl: '/example-project.jpg',
      title: 'Example Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus nec lacinia fermentum, nunc nunc ultricies turpis, vel volutpat diam justo eu purus.',
      liveDemoUrl: 'https://github.com/tdora28/',
      codeUrl: 'https://github.com/tdora28/',
    },
    {
      id: 5,
      imageUrl: '/example-project.jpg',
      title: 'Example Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus nec lacinia fermentum, nunc nunc ultricies turpis, vel volutpat diam justo eu purus.',
      liveDemoUrl: 'https://github.com/tdora28/',
      codeUrl: 'https://github.com/tdora28/',
    },
    {
      id: 6,
      imageUrl: '/example-project.jpg',
      title: 'Example Project',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus nec lacinia fermentum, nunc nunc ultricies turpis, vel volutpat diam justo eu purus.',
      liveDemoUrl: 'https://github.com/tdora28/',
      codeUrl: 'https://github.com/tdora28/',
    },
  ];

  return (
    <>
      <main className="container">
        <h2 className={`${fontDisplay} text-5xl sm:text-6xl py-20`}>Project showcase</h2>

        {/* Project Cards */}
        {/* imageUrl, title, description, liveDemoUrl, codeUrl */}
        <section className="flex flex-wrap justify-evenly gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} imageUrl={project.imageUrl} title={project.title} description={project.description} liveDemoUrl={project.liveDemoUrl} codeUrl={project.codeUrl} />
          ))}
        </section>
      </main>

      {/* Decorative text in the background */}
      <div className={`${fontDisplay} fixed top-[50%] translate-y-[-50%] right-[-5vw] z-[-1] text-[30vw] opacity-10`}>Work</div>
    </>
  );
};

export default WorkPage;
