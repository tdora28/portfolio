'use client';

import React from 'react';
import { fontDisplay } from '@/utilities/font';
import { useParams } from 'next/navigation';
import projects from '@/projects';
import Link from 'next/link';

const ProjectPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return (
      <>
        <main className="container">
          <h2 className={`${fontDisplay} text-5xl sm:text-6xl py-20`}>Project not found</h2>
          <p>
            The project you are looking for does not exist. Please go back to the{' '}
            <Link href="/work" className={`${fontDisplay} text-link`}>
              project showcase
            </Link>
            .
          </p>
        </main>

        {/* Decorative text in the background */}
        <div className={`${fontDisplay} fixed top-[50%] translate-y-[-50%] right-[-5vw] z-[-1] text-[30vw] opacity-10`}>404</div>
      </>
    );
  }

  return (
    <>
      <main className="container">
        <h2 className={`${fontDisplay} text-5xl sm:text-6xl py-20`}>{project!.title}</h2>
      </main>

      {/* Decorative text in the background */}
      <div className={`${fontDisplay} fixed top-[50%] translate-y-[-50%] right-[-5vw] z-[-1] text-[30vw] opacity-10`}>Project</div>
    </>
  );
};

export default ProjectPage;
