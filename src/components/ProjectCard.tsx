import React from 'react';
import Image from 'next/image';
import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';

type Props = {};

const ProjectCard = (props: Props) => {
  return (
    <div className="max-w-[300px] border-b-2 border-white ">
      <div>
        <Image src="/example-project.jpg" alt="Project Image" width={800} height={500} />
      </div>
      <div className="py-8">
        <h3 className={`${fontDisplay} text-3xl`}>Example Project</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, purus nec lacinia fermentum, nunc nunc ultricies turpis, vel volutpat diam justo eu purus.</p>
        <div className={`${fontDisplay} flex gap-4 text-xl`}>
          <Link href="https://github.com/tdora28/" className="bg-white text-black py-2 px-4">
            Live demo
          </Link>
          <Link href="https://github.com/tdora28/" className="bg-white text-black py-2 px-4">
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
