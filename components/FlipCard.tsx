import Image from 'next/image';
import { ProjectDetail } from '../types';

interface Props {
  image: StaticImageData;
  projectDetail: ProjectDetail;
}

const FlipCard = ({ image, projectDetail }: Props) => {
  return (
    <div className="card flex-1/3 w-1/3">
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
