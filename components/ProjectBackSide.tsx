import Link from 'next/link';
import { ProjectDetail } from '../types';
import GithubLogo from './logos/GithubLogo';

interface Props {
  project: ProjectDetail;
}

const ProjectBackSide = ({ project }: Props) => {
  const octoCatSize = 25;

  return (
    <>
      <h3 className="text-2xl font-bold uppercase tracking-wider mb-8">
        {project.title}
      </h3>
      {project?.website && (
        <Link href={project.website}>
          <a className="mb-8 py-2 px-10 bg-darkSlateBlue hover:bg-lightSlateBlue text-white rounded text-lg font-semibold tracking-wider uppercase">
            See It Live!
          </a>
        </Link>
      )}
      {!project?.website && (
        <p className="text-xl font-semibold">
          Demo and write up <span className="text-gradientPink">@</span> Github
          <span className="text-gradientPink">:</span>
        </p>
      )}
      <div className="flex text-xl my-3 space-x-8">
        {project?.githubFront && (
          <Link href={project.githubFront}>
            <a className="flex space-x-1 hover:text-brightSkyBlue transition">
              <GithubLogo height={octoCatSize} width={octoCatSize} />
              <span className="border-b-4 border-brightSkyBlue text-lightSlateBlue">
                Front End
              </span>
            </a>
          </Link>
        )}
        {project?.githubBack && (
          <Link href={project.githubBack}>
            <a className="flex space-x-1 hover:text-brightSkyBlue transition">
              <GithubLogo height={octoCatSize} width={octoCatSize} />
              <span className="border-b-4 border-brightSkyBlue text-lightSlateBlue">
                Back End
              </span>
            </a>
          </Link>
        )}
      </div>
      <div
        className={`flex flex-wrap justify-center w-2/3 space-x-2 ${
          project?.website ? 'mt-3' : 'mt-10'
        }`}
      >
        {project.tags.map((tag: string) => (
          <p
            className="py-1 px-3 mb-2 border-2 border-darkSlateBlue rounded-full font-medium"
            key={tag + Math.random()}
          >
            {tag}
          </p>
        ))}
      </div>
    </>
  );
};

export default ProjectBackSide;
