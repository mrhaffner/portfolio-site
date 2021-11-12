import Image from 'next/image';
import { Dispatch, SetStateAction } from 'react';
import { ProjectDetail } from '../types';
import ProjectBackSide from './ProjectBackSide';

interface Props {
  image: StaticImageData;
  project: ProjectDetail;
  showing: string;
  setShowing: Dispatch<SetStateAction<string>>;
}

const ProjectMobileCard = ({ image, project, showing, setShowing }: Props) => (
  <div className="w-full">
    {showing !== project.title && (
      <div onClick={() => setShowing(project.title)}>
        <Image
          src={image}
          alt={`${project.title} + webpage`}
          layout="responsive"
        />
      </div>
    )}
    {showing === project.title && (
      <div className="w-full aspect flex flex-col justify-center items-center bg-mint">
        <ProjectBackSide project={project} />
      </div>
    )}
  </div>
);

export default ProjectMobileCard;
