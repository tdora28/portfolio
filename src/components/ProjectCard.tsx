import React from 'react';
import Image from 'next/image';
import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';
import { ProjectType } from '@/types';

const ProjectCard: React.FC<ProjectType> = (props) => {
  return (
    <div className="max-w-[300px] border-b-2 border-white ">
      <Link href={`/projects/${props.id}`}>
        <Image src={props.imageUrl} alt="Project Image" width={800} height={500} />
      </Link>
      <div className="py-8">
        <h3 className={`${fontDisplay} text-3xl`}>{props.title}</h3>
        <p>{props.description}</p>
        <div className={`${fontDisplay} flex gap-4 text-xl`}>
          <Link href={props.liveDemoUrl} className="bg-white text-black py-2 px-4">
            Live demo
          </Link>
          <Link href={props.codeUrl} className="bg-white text-black py-2 px-4">
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
