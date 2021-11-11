import forecastImage from '../public/images/project-list/forecast-your-snow.jpeg';
import personalBlog from '../public/images/project-list/personal-blog.jpeg';
import trelloClone from '../public/images/project-list/trello-clone.jpeg';
import onTheSnowClone from '../public/images/project-list/on-the-snow-clone.jpeg';
import projectDetails from '../public/project-details.json';
import FlipCard from './FlipCard';
import { ProjectDetail } from '../types';
//background color for empty boxes - not white?
//add breakpoints

const ProjectList = () => {
  const imageArray = [forecastImage, trelloClone, personalBlog, onTheSnowClone];
  return (
    <div className="w-full h-full flex flex-wrap justify-center bg-lightMint">
      {projectDetails.data.map((detail: ProjectDetail, i: number) => (
        <FlipCard
          image={imageArray[i]}
          projectDetail={detail}
          key={i + Math.random()}
        />
      ))}
    </div>
  );
};

export default ProjectList;
