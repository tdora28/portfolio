import React from 'react';
import Image from 'next/image';
import { fontDisplay } from '@/utilities/font';
import Link from 'next/link';

type ProjectCardProps = {
  imageUrl: string;
  title: string;
  description: string;
  liveDemoUrl: string;
  codeUrl: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, description, liveDemoUrl, codeUrl }) => {
  return (
    <div className="max-w-[300px] border-b-2 border-white ">
      <div>
        <Image src={imageUrl} alt="Project Image" width={800} height={500} />
      </div>
      <div className="py-8">
        <h3 className={`${fontDisplay} text-3xl`}>{title}</h3>
        <p>{description}</p>
        <div className={`${fontDisplay} flex gap-4 text-xl`}>
          <Link href={liveDemoUrl} className="bg-white text-black py-2 px-4">
            Live demo
          </Link>
          <Link href={codeUrl} className="bg-white text-black py-2 px-4">
            Code
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
