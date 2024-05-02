import React from 'react';
import { fontDisplay } from '@/utilities/font';
import ProjectCard from '@/components/ProjectCard';
import projects from '@/projects';

const WorkPage = () => {
  return (
    <>
      <main className="container">
        <h2 className={`${fontDisplay} text-5xl sm:text-6xl py-20`}>Project showcase</h2>

        {/* Project Cards */}
        {/* imageUrl, title, description, liveDemoUrl, codeUrl */}
        <section className="flex flex-wrap justify-evenly gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </section>
      </main>

      {/* Decorative text in the background */}
      <div className={`${fontDisplay} fixed top-[50%] translate-y-[-50%] right-[-5vw] z-[-1] text-[30vw] opacity-10`}>Work</div>
    </>
  );
};

export default WorkPage;
