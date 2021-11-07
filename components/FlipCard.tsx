import Image from 'next/image';

interface Props {
  image: StaticImageData;
  alt: string;
}

const FlipCard = ({ image, alt }: Props) => {
  return (
    <div className="card flex-1/3 w-1/3">
      <div className="card-side front w-full h-full">
        <Image src={image} alt={alt} layout="responsive" />
      </div>
      <div className="card-side back w-full h-full">
        <div>Back Side</div>
      </div>
    </div>
  );
};

export default FlipCard;
