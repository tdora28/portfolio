'use client';

import React from 'react';
import { fontDisplay } from '@/utilities/font';
import { useParams } from 'next/navigation';
import projects from '@/projects';
import Link from 'next/link';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import Image from 'next/image';

const ProjectPage = () => {
  const params = useParams();
  const id = Number(params.id);
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return (
      <>
        {/* Project Not Found */}
        <main className="container">
          <h2 className={`${fontDisplay} text-5xl sm:text-6xl py-20`}>Project not found</h2>
          <p>
            The project you are looking for does not exist. Check out the{' '}
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
      {/* Project Page */}
      <main className="container py-20">
        {/* Title */}
        <h2 className={`${fontDisplay} text-5xl sm:text-6xl pb-20`}>{project.title}</h2>
        {/* Image */}
        <div className="p-5 bg-side">
          <Image src={project.imageUrl} alt={project.title} width={800} height={500} />
        </div>
        <div className="flex gap-4 flex-wrap md:flex-nowrap justify-center md:justify-between md:items-center text-center py-8">
          {/* Labels */}
          <div className="flex gap-4">
            {project.labels.map((label) => (
              <span key={label} className="flex justify-center items-center bg-side text-white text-xs uppercase py-1 px-3">
                {label}
              </span>
            ))}
          </div>
          {/* Buttons */}
          <div className={`${fontDisplay} flex gap-4 text-xl w-full md:w-auto`}>
            <Link href={project.liveDemoUrl} className="bg-white text-black py-2 px-4 grow">
              Live demo
            </Link>
            <Link href={project.codeUrl} className="bg-white text-black py-2 px-4 grow">
              Code
            </Link>
          </div>
        </div>
        {/* Long description */}
        <div>
          {project.longDesc.map((desc, index) => (
            <p key={`${index}-${desc.slice(0, 5)}`}>{desc}</p>
          ))}
        </div>
      </main>

      {/* Back button */}
      <button className={`${fontDisplay} px-4 py-2 bg-white text-xl clr-dark fixed bottom-10 right-5 flex items-center gap-4`}>
        Projects <FaArrowAltCircleRight />
      </button>

      {/* Decorative text in the background */}
      <div className={`${fontDisplay} fixed top-[50%] translate-y-[-50%] right-[-5vw] z-[-1] text-[30vw] opacity-10`}>Project</div>
    </>
  );
};

export default ProjectPage;
