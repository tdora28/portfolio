import React from 'react';
import Image from 'next/image';
import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';
import { ProjectType } from '@/types';

const ProjectCard: React.FC<ProjectType> = (props) => {
  return (
    <div className="max-w-[300px] border-b-2 border-gray-500 elevate">
      <Link href={`/projects/${props.id}`} className="relative">
        <Image src={props.imageUrl} alt="Project Image" width={800} height={500} />
        <span className={`${fontDisplay} absolute bottom-2 right-2 btn-sm`}>Read more</span>
      </Link>
      <div className="p-5">
        <h3 className={`${fontDisplay} text-3xl`}>{props.title}</h3>
        <p>{props.description}</p>
        <div className={`${fontDisplay} flex gap-4 text-xl`}>
          <Link href={props.liveDemoUrl} className="btn">
            Live demo
          </Link>
          <Link href={props.codeUrl} className="btn">
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
