import Image from 'next/image';
import forecastImage from '../public/images/project-list/forecast-your-snow.jpeg';
import personalBlog from '../public/images/project-list/personal-blog.jpeg';
import trelloClone from '../public/images/project-list/trello-clone.jpeg';
import onTheSnowClone from '../public/images/project-list/on-the-snow-clone.jpeg';
//background color for empty boxes?

const ProjectList = () => {
  return (
    <div className="w-full h-full flex flex-wrap justify-center">
      <div className="flex-1/3 w-full h-full">
        <Image
          src={forecastImage}
          alt="Forecast Your Snow webpage project"
          layout="responsive"
        />
      </div>
      <div className="flex-1/3 w-full h-full">
        <Image
          src={trelloClone}
          alt="Forecast Your Snow webpage project"
          layout="responsive"
        />
      </div>
      <div className="flex-1/3 w-full h-full">
        <Image
          src={personalBlog}
          alt="Forecast Your Snow webpage project"
          layout="responsive"
        />
      </div>
      <div className="flex-1/3 w-full h-full">
        <Image
          src={onTheSnowClone}
          alt="Forecast Your Snow webpage project"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default ProjectList;
