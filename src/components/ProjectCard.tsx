import React from 'react';
import Image from 'next/image';
import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';
import { ProjectType } from '@/types';

const ProjectCard: React.FC<ProjectType> = (props) => {
  return (
    <div className="max-w-[300px] border-b-2 border-gray-500 elevate">
      <Link href={`/projects/${props.id}`} className="grid grid-cols-1 grid-rows-1">
        <Image src={props.imageUrl} alt="Project Image" width={800} height={500} className="col-start-1 col-end-1 row-start-1 row-end-1" />
        <span className={`${fontDisplay} col-start-1 col-end-1 row-start-1 row-end-1 self-end justify-self-end btn-sm mr-2 mb-2`}>Read more</span>
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
