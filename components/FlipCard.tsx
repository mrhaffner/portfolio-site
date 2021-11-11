import Image from 'next/image';
import { ProjectDetail } from '../types';

interface Props {
  image: StaticImageData;
  project: ProjectDetail;
}

const FlipCard = ({ image, project }: Props) => {
  return (
    <div className="card w-full md:flex-1/2 md:w-1/2 lg:flex-1/3 lg:w-1/3 text-midnightBlue">
      <div className="card-side front w-full h-full">
        <Image
          src={image}
          alt={`${project.title} + webpage`}
          layout="responsive"
        />
      </div>
      <div className="card-side back w-full h-full flex flex-col justify-center items-center bg-mint">
        <h3 className="text-2xl font-bold uppercase tracking-wider">
          {project.title}
        </h3>
        <div className="flex flex-wrap justify-center w-2/3 space-x-2">
          {project.tags.map((tag: string) => (
            <p className="py-1 px-3 mb-2 border-2 border-midnightBlue rounded-full font-medium">
              {tag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
