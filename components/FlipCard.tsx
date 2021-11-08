import Image from 'next/image';
import { ProjectDetail } from '../types';

interface Props {
  image: StaticImageData;
  projectDetail: ProjectDetail;
}

const FlipCard = ({ image, projectDetail }: Props) => {
  return (
    <div className="card w-full md:flex-1/2 md:w-1/2 lg:flex-1/3 lg:w-1/2">
      <div className="card-side front w-full h-full">
        <Image
          src={image}
          alt={`${projectDetail.title} + webpage`}
          layout="responsive"
        />
      </div>
      <div className="card-side back w-full h-full">
        <div>{projectDetail.title}</div>
      </div>
    </div>
  );
};

export default FlipCard;
