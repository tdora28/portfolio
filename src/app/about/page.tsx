import React from 'react';
import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';
import DecorText from '@/components/DecorText';

const AboutPage = () => {
  return (
    <>
      <main className="container">
        <ul className="flex flex-col sm:flex-row sm:justify-between gap-5 sm:max-w-max text-center my-10 py-2 uppercase">
          <li>
            <Link href="#skills" className="bg-side text-white px-5 py-2 indent block">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#experience" className="bg-side text-white px-5 py-2 indent block">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#resume" className="bg-side text-white px-5 py-2 indent block">
              Resume
            </Link>
          </li>
        </ul>
        <section>
          {/* About Me */}
          <div className="side-decor">
            <h3 className={`${fontDisplay} text-3xl pb-5`}>About Me</h3>
            <p>I&apos;m Dora Tokai: full-stack web developer based in Espoo, Finland that has a passion both for programming and human languages, enjoys problem solving, learning, and tinkering.</p>
            <p>
              I aim to create work that is not only smart and simple but also distinct and powerful. Whether it&apos;s implementing UI design, optimizing backend, or technical problem-solving, I&apos;m dedicated to providing impactful solutions. I
              prioritize a user-first approach, tailoring my work to meet specific project needs. Thank you for exploring my{' '}
              <Link href="/projects" className={`${fontDisplay} text-link`}>
                projects
              </Link>
              , and feel free to{' '}
              <Link href="/contact" className={`${fontDisplay} text-link`}>
                contact me
              </Link>{' '}
              for collaboration or inquiries.
            </p>
          </div>

          {/* Skills */}
          <div id="skills" className="side-decor scroll-top">
            <h3 className={`${fontDisplay} text-3xl pb-5`}>Skills</h3>
            <p className="flex flex-col">
              <span>Frontend:</span>
              <span>HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, Bootstrap</span>
            </p>
            <p className="flex flex-col">
              <span>Backend:</span>
              <span>Node.js, Express, Firebase, MongoDB, MySQL, RESTful APIs</span>
            </p>
          </div>

          {/* Experience */}
          <div id="experience" className="side-decor scroll-top">
            <h3 className={`${fontDisplay} text-3xl pb-5`}>Experience</h3>
            <p className="flex flex-col">
              <span>2023 - communications intern</span>
              <span>
                at{' '}
                <Link href="https://www.aalto.fi/en" className={`${fontDisplay} text-link`}>
                  Aalto University
                </Link>
              </span>
            </p>
            <p className="flex flex-col">
              <span>2022 - ui/ux tester</span>
              <span>
                at{' '}
                <Link href="https://www.linkedin.com/company/unfair-advantage/" className={`${fontDisplay} text-link`}>
                  Unfair Advantage
                </Link>
              </span>
            </p>
          </div>

          {/* Resume */}
          <div id="resume" className="side-decor scroll-top">
            <h3 className={`${fontDisplay} text-3xl pb-5`}>Resume</h3>
            <a href="/cv-dora-tokai.pdf" download="cv-dora-tokai.pdf" className={`${fontDisplay} inline-block btn bg-frame indent`}>
              Download CV
            </a>
          </div>
        </section>
      </main>

      {/* Decorative text in the background */}
      <DecorText text="About" />
    </>
  );
};

export default AboutPage;
