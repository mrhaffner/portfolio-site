import Image from 'next/image';
import { ProjectDetail } from '../types';
import ProjectBackSide from './ProjectBackSide';

interface Props {
  image: StaticImageData;
  project: ProjectDetail;
}

const ProjectFlipCard = ({ image, project }: Props) => (
  <div className="card w-full md:flex-1/2 md:w-1/2 lg:flex-1/3 lg:w-1/3">
    <div className="card-side front w-full h-full">
      <Image
        src={image}
        alt={`${project.title} + webpage`}
        layout="responsive"
      />
    </div>
    <div className="card-side back w-full h-full flex flex-col justify-center items-center bg-mint">
      <ProjectBackSide project={project} />
    </div>
  </div>
);

export default ProjectFlipCard;
